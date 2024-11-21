/* Import functions and libraries */
import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

/* Test Case 01 */
/* Expected result is it should render with correct text and initial state */
describe ('TermsAndConditions', () => {
    const renderComponent = () => {
        render(<TermsAndConditions/>)
        return{
            heading: screen.getByRole('heading'),
            checkbox: screen.getByRole ('checkbox'),
            button: screen.getByRole ('button')
        }
    } 
    it('should render with correct text and initial state', () => {
        const {heading, checkbox, button} = renderComponent();

            expect(heading).toHaveTextContent ('Terms & Conditions');
        // validate the checkbox's initial state is unchecked
            expect(checkbox).not.toBeChecked();
        // validate the Submit button is initially disabled
            expect(button).toBeDisabled();
        console.log('PASSED as expected.');
    });

/* Test Case 02 */
/* Expected result is it should enable the button when the checkbox is checked */
// Note: install user-event library from @testing-library (this is to simullate a user behavior from the UI)
    it('should enable the button when the checkbox is checked', async () => {
        const {checkbox, button} = renderComponent();
        
        //Arrange
        //Act
        const user = userEvent.setup();
        await user.click(checkbox);
        //Assert
        expect(button).toBeEnabled();   
        console.log('PASSED as expected.');
    })  
})