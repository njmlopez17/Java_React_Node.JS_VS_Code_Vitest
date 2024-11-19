/* Import functions and libraries */
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet';


/* Test Case 01 */
/* Expected result is to display "Hello" with the name when a name is provided */
describe ('Greet', () => {
    it('should render Hello with the name when the name is provided', () => {
        render(<Greet name="John"/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Hello John/i);
        console.log('PASSED as expected.');
    })

/* Test Case 02 */
/* Expected result is to display login button when a name is not provided */
    it('should render login button when a name is not provided', () => {
        render(<Greet/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
        console.log('PASSED as expected.');
    })
})