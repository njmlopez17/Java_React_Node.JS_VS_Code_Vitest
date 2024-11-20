/* Import functions and libraries */
import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from  '../../src/entities';


/* Test Case 01 */
/* Expected result is it should render user name */
describe ('UserAccount', () => {
    it('should render user name', () => {
        const user: User = {id: 1, name: 'John'};
        render(<UserAccount user={user}/>);
        expect(screen.getByText(user.name)).toBeInTheDocument();
        console.log('PASSED as expected.');
    })

/* Test Case 02 */
/* Expected result is it should render edit button if user is admin */
    it('should render edit button if user is admin', () => {
        const user: User = {id: 1, name: 'John', isAdmin: true};
        render(<UserAccount user={user}/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
        console.log('PASSED as expected.');
    })

    /* Test Case 03 */
    /* Expected result is it should not render edit button if user is not admin */
    it('should not render edit button if user is not admin', () => {
        const user: User = {id: 1, name: 'John', isAdmin: false};
        render(<UserAccount user={user}/>);
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
        console.log('PASSED as expected.');
    })
})