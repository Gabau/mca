import { useState } from "react"
import UserForm from "./UserForm"
import React from 'react'
import './styles/Button.css'

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
        className="add-button"
        onClick={() => {
            setShow(true)
        }}
         >Add</button>
        <UserForm 
            onClose={onClose}
            show={show}/>
    </div>)

}