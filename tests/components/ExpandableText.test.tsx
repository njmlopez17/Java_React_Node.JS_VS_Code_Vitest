/* Import functions and libraries */
import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';

describe ('ExpandableText', () => {

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
            const text = 'a'.repeat(256);
            render(<ExpandableText text={text} />);
            const truncatedText = text.substring(0, 255) + '...';
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
         const text = 'a'.repeat(256);
        render(<ExpandableText text={text} />);
        // this is to check when button is clicked...
        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);
        // this is to check the expected buttons...
        expect(screen.getByText(text)).toBeInTheDocument();
                expect(button).toHaveTextContent(/less/i);
    console.log('PASSED as expected.');
    })
})