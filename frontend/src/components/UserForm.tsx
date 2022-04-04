import React, { FormEvent, useState } from 'react'
import { createUser } from '../api/UsersAPI';
import FormUser from '../models/FormUser';
import './styles/UserForm.css'

type UserFormProps = {
    show: boolean,
    onClose: () => void
};

type UserFormState = {
    user: FormUser
}

const emptyState: UserFormState = { 
    user: {
        name: '',
        date: '',
        age: '',
        occupation: ''
    }
 }

export default function UserForm(props: UserFormProps) {
    const [state, setState] = useState(emptyState);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        createUser(state.user).then(props.onClose);
    }
    if (!props.show) {
        return null;
    }


    return (<form onSubmit={onSubmit} className="modal" id="modal" onClick={props.onClose}>
        <div className="modal-content"onClick={e => e.stopPropagation()}>
            <h2 className="modal-header">User Form</h2>
                <div className="modal-body">
                    <label>
                        Name:  
                        <input 
                            type="text" 
                            name="name" 
                            required={true} 
                            value={state.user.name} 
                            onChange={event => setState({ user: { ...state.user, name: event.target.value } })} />
                    </label>
                    <br />
                    <label>
                        Age:  
                        <input type="text" 
                            name="age" 
                            pattern="[0-9]*"
                            required={true}
                            value={state.user.age}
                            onChange={event => setState({ user: { ...state.user, age: event.target.value } })} />
                    </label>
                    <br />
                    <label>
                        Date:
                        <input type="date" 
                            name="date" 
                            required={true}
                            value={state.user.date}
                            onChange={event => setState({
                                user: {
                                    ...state.user,
                                    date: event.target.value
                                }
                            })}
                             />
                    </label>
                    <br />
                    <label>
                        Occupation: 
                        <input type="text" 
                            name="occupation"
                            required={true}
                            value={state.user.occupation}
                            onChange={event => setState({ user: { ...state.user, occupation: event.target.value } })} />
                    </label>
                    <br />
                </div>
            <input type="submit" className="modal-footer"/>
        </div>
    </form>)

}

