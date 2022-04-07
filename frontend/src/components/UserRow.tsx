import moment from "moment";
import React, { FormEvent, useState } from "react";
import { updateUser } from "../api/UsersAPI";
import EditFormUser from "../models/EditFormUser";
import UserFromAPI from "../models/UserFromAPI";
import DeleteUserButton from "./DeleteUserButton";
import "./styles/UserRow.css"

type UserRowProps = {
    user: UserFromAPI,
    key: number,
    refresh: () => void,
};


type UserRowState = {
    isEditMode: boolean,
};

type EditUserRowProps = UserRowProps & { onClose: () => void } 

const emptyState: UserRowState = { isEditMode: false };

/**
 * A row in the user table.
 */
export default function UserRow(props: UserRowProps) {
    const [state, setState] = useState(emptyState);
    if (state.isEditMode) {
        return <EditUserRow {...props} onClose={() => setState({ isEditMode: false })} />
    }

    return (<tr className="Row">
        <td>{props.user.name}</td>
        <td>{props.user.age}</td>
        <td>{moment(props.user.date).format('YYYY-MM-DD')}</td>
        <td>{props.user.occupation}</td>
        <td>
            <DeleteUserButton refresh={props.refresh} id={props.user.id} />
        </td>
        <td>
            <button 
                className="edit-button"
                onClick={() => setState({ isEditMode: true })}>Edit</button>
        </td>
    </tr>);
}



function createEditUserFromUser(user: UserFromAPI): EditFormUser {
    return {
        name: user.name,
        age: user.age.toString(),
        date: moment(user.date).format('YYYY-MM-DD'),
        id: user.id,
        occupation: user.occupation
    }
}

/**
 * Used for a user row that can be edited.
 */
function EditUserRow(props: EditUserRowProps) {
    const [state, setState] = useState({ user: createEditUserFromUser(props.user) });

    const submit = () => {
        updateUser(state.user).then(props.refresh).then(props.onClose);
    }
    const modifyName = (e: FormEvent<HTMLInputElement>) => {
        setState({ user: { ...state.user, name: e.currentTarget.value } });
    }
    const modifyDate = (e: FormEvent<HTMLInputElement>) => {
        setState({ user: {...state.user, date: e.currentTarget.value } });
    }
    const modifyAge = (e: FormEvent<HTMLInputElement>) => {
        setState({ user: { ...state.user, age: e.currentTarget.value } })
    }
    const modifyOccupation = (e: FormEvent<HTMLInputElement>) => {
        setState({ user: { ...state.user, age: e.currentTarget.value } });
    }
    

    return (
        <tr className="Row">
                <td>
                    <input 
                        className="name-input"
                        type="text"
                        name="name" 
                        value={state.user.name} 
                        onChange={modifyName} />
                </td>
                <td>
                    <input 
                        className="age-input"
                        type="text"
                        name="age"
                        pattern="[0-9]*" 
                        value={state.user.age} 
                        onChange={modifyAge} />
                </td>
                <td>
                    <input type="date" name="date" value={state.user.date} onChange={modifyDate} />
                </td>
                <td>
                    <input 
                        className="occupation-input"
                        type="text"
                        name="occupation" 
                        value={state.user.occupation} 
                        onChange={modifyOccupation} />
                </td>
                <td>
                    <button 
                        className="submit-button"
                        onClick={submit} >Submit</button>
                </td>
                <td>
                    <button 
                        className="close-button"
                        onClick={props.onClose}>Close</button>
                </td>
        </tr>
    )
}



function dateDisplayed(dateString: string): string {
    const pad = (s: number) => s < 10 ? '0' + s : s;
    const date = new Date(dateString);
    return `${pad(date.getDate())}-${pad(date.getMonth())}-${date.getFullYear()}`;
}


