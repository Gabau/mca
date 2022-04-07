import { useState } from "react"
import UserForm from "./UserForm"
import React from 'react'

type UserFormProps = {
    onClose: () => void,
};

/**
 * Button for showing user form.
 */
export default function UserFormButton(props: UserFormProps) {
    const [show, setShow] = useState(false);
    const onClose = () => {
        setShow(false);
        props.onClose();
    }
    return (<div>
        <button
        className="toggle-button"
        onClick={() => {
            setShow(true)
        }}
         >{show ? "Close" : "Add"}</button>
        <UserForm 
            onClose={onClose}
            show={show}/>
    </div>)

}