import { deleteUser } from "../api/UsersAPI";
import React from 'react'
import "./styles/Button.css"


type DeleteUserButtonProps = {
    id: number,
    refresh: () => void;
};

/**
 * The delete user button.
 */
export default function DeleteUserButton(props: DeleteUserButtonProps) {
    return <button 
                className="delete-button"
                onClick={deleteRow(props.id, props.refresh)}>Delete</button>
}

function deleteRow(id: number, refresh: () => void) {
    return () => {
        deleteUser(id).then(response => {
            if (response.ok) refresh();
        });
    }
}


