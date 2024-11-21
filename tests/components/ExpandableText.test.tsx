/* Import functions and libraries */
import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';

describe ('ExpandableText', () => {
    const limit = 255;
    const longText = 'a'.repeat (limit + 1);
    const truncatedText = longText.substring (0, limit) + "...";

    /* Test Case 01 */
    /* Expected result is it should render the full text if less than 25 char */
    it('should render the full text if less than 25 char', () => {
        const text = "Short text";
            render(<ExpandableText text={text}/>);
            expect(screen.getByText(text)).toBeInTheDocument();
        console.log('PASSED as expected.');
    })

    /* Test Case 02 */
    /* Expected result is it should truncate the text if more than 255 char */
    it('should truncate the text if more than 255 char', () => {
            // this is to check the text if more than 255 char
            render(<ExpandableText text={longText} />);
            expect(screen.getByText(truncatedText)).toBeInTheDocument();
            // this is to check the expected buttons
            const button = screen.getByRole('button');
            expect(button).toHaveTextContent(/more/i);
        console.log('PASSED as expected.');
    })

    /* Test Case 03 */
    /* Expected result is it should expand text when Show More button is clicked */
    it('should expand text when Show More button is clicked', async () => {
        // this is to check the text if more than 255 char...
        render(<ExpandableText text={longText} />);
        // this is to check when button is clicked...
        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);
        // this is to check the expected buttons...
        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    console.log('PASSED as expected.');
    })

    /* Test Case 04 */
    /* Expected result is it should collapse text when Show Less button is clicked */
    it('should collapse text when Show Less button is clicked', async () => {
        // this is to check the text if more than 255 char...
        render(<ExpandableText text={longText} />);

        // this is to check when button is clicked the first time (button is from Show More to Show Less)...
        const showMoreButton = screen.getByRole('button', {name: /more/i});
        const user = userEvent.setup();
        await user.click(showMoreButton);
        // this is to check when button is clicked the after full text is displayed and button is from Show Less to Show More again)...
        const showLessButton = screen.getByRole('button', {name: /less/i});
        await user.click(showLessButton);

        // this is to check the expected buttons...
        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showMoreButton).toHaveTextContent(/more/i);
    console.log('PASSED as expected.');
    })
})