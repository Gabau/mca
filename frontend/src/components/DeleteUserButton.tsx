import { deleteUser } from "../api/UsersAPI";
import React from 'react'


type DeleteUserButtonProps = {
    id: number,
    refresh: () => void;
};

export default function DeleteUserButton(props: DeleteUserButtonProps) {
    return <button onClick={deleteRow(props.id, props.refresh)}>Delete</button>
}

function deleteRow(id: number, refresh: () => void) {
    return () => {
        deleteUser(id).then(response => {
            if (response.ok) refresh();
        });
    }
}


