import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

/* Test Case 01 */
/* Expected result is it should render no users when the users array is empty */
describe ('UserList', () => {
    it('should render no users when the users array is empty', () => {
        render(<UserList users={[]}/>);
        expect(screen.getByText(/No users/)).toBeInTheDocument();
        console.log('PASSED as expected.');
    })

    /* Test Case 02 */
/* Expected result is it should render a list of users */
    it('should render a list of users', () => {
        const users: User [] = [
        // two array objects...
           {id: 1, name: 'John'},
           {id: 2, name: 'Sam'}, 
        ]
        // render code...
        render(<UserList users={users}/>);
        // assertion code...
        users.forEach(user=>{
            const link = screen.getByRole('link', {name: user.name});
            expect(link).toBeInTheDocument();
            expect (link).toHaveAttribute('href', `/users/${user.id}`);
            console.log('PASSED as expected.');
        })
    })
})