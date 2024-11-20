import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

/* Test Case 01 */
/* Expected result is it should render with correct text and initial state */
describe ('TermsAndConditions', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions/>);
        const heading = screen.getByRole('heading');
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveTextContent ('Terms & Conditions');
        // validate the checkbox's initial state is unchecked
        const checkbox = screen.getByRole ('checkbox');
            expect(checkbox).toBeInTheDocument();
            expect(checkbox).not.toBeChecked();
        // validate the Submit button is initially disabled
        const button = screen.getByRole ('button');
            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/submit/i);
            expect(button).toBeDisabled();
        console.log('PASSED as expected.');
    })

/* Test Case 02 */
/* Expected result is it should enable the button when the checkbox is checked */
// Note: install user-event library from @testing-library (this is to simullate a user behavior from the UI)
    it('should enable the button when the checkbox is checked', async () => {
        //Arrange
        render(<TermsAndConditions/>);
        //Act
        const checkbox = screen.getByRole ('checkbox');
        const user = userEvent.setup();
            await user.click(checkbox);
        //Assert
            expect(screen.getByRole('button')).toBeEnabled();   
        console.log('PASSED as expected.');
    })  
})