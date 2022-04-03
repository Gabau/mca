import { userInfo } from "os";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { updateUser } from "../api/UsersAPI";
import EditFormUser from "../models/EditFormUser";
import User from "../models/User";
import DeleteUserButton from "./DeleteUserButton";
import "./UserRow.css"

type UserRowProps = {
    user: User,
    key: number,
    refresh: () => void,
};


type UserRowState = {
    isEditMode: boolean,
};

type EditUserRowProps = UserRowProps & { onClose: () => void } 

type EditUserRowState = {
    user: EditFormUser
}

const emptyState: UserRowState = { isEditMode: false };

export default function UserRow(props: UserRowProps) {
    const [state, setState] = useState(emptyState);
    if (state.isEditMode) {
        return <EditUserRow {...props} onClose={() => setState({ isEditMode: false })} />
    }

    return (<tr className="Row">
        <td>{props.user.name}</td>
        <td>{props.user.age}</td>
        <td>{dateDisplayed(props.user.date)}</td>
        <td>
            <DeleteUserButton refresh={props.refresh} id={props.user.id} />
        </td>
        <td>
            <button onClick={() => setState({ isEditMode: true })}>Edit</button>
        </td>
    </tr>);
}



function createEditUserFromUser(user: User): EditFormUser {
    return {
        name: user.name,
        age: user.age.toString(),
        date: user.date.toString(),
        id: user.id
    }
}


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

    

    return (
        <tr className="Row">
                <td>
                    <input 
                        className="name-input"
                        name="name" 
                        value={state.user.name} 
                        onChange={modifyName} />
                </td>
                <td>
                    <input 
                        className="age-input"
                        name="age"
                        pattern="[0-9]*" 
                        value={state.user.age} 
                        onChange={modifyAge} />
                </td>
                <td>
                    <input type="date" name="date" value={state.user.date} onChange={modifyDate} />
                </td>
                <td>
                    <button onClick={submit} >Submit</button>
                </td>
                <td>
                    <button onClick={props.onClose}>Close</button>
                </td>
        </tr>
    )
}



function dateDisplayed(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}


