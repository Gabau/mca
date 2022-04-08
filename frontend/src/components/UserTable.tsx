import React from 'react'
import { getUsers } from '../api/UsersAPI';
import UserFromAPI from '../models/UserFromAPI';
import UserFormButton from './UserFormButton';
import UserRow from './UserRow';
import './styles/UserTable.css'

type UserTableState = {
    users: UserFromAPI[],
};

const emptyState: UserTableState = { users: [] };

/**
 * Table of users.
 */
export default function UserTable() {
    const [state, setState] = React.useState(emptyState)
    const refresh = () => {
        getUsers().then((response) => {
            setState({users: response})
        })
    };
    React.useEffect(refresh, []);
    return <table className="table">
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Date Created</td>
                <td>Occupation</td>
                <td>Actions</td>
                <td>
                    <UserFormButton onClose={refresh} />
                </td>
            </tr>
        </thead>
        <tbody>
            {state.users.map(user => <UserRow refresh={refresh}  user={user} key={user.id} />)}
        </tbody>
        </table>;
}



