import { usersURL } from "../config/keys"
import User from "../models/User";
import FormUser from "../models/FormUser";
import UserCreated from "../models/UserCreated";
import EditFormUser from "../models/EditFormUser";

export function getUsers(): Promise<User[]> {
  return fetch(usersURL).then(checkResponse);
}

export function createUser(toCreate: FormUser): Promise<Response> {
  const user: UserCreated = userFromForm(toCreate);
  return fetch(usersURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}

export function deleteUser(toDelete: number): Promise<Response> {
  return fetch(`${usersURL}/${toDelete}`, {
    method: 'DELETE'
  });
}

export function updateUser(toUpdate: EditFormUser): Promise<Response> {
  const user: UserCreated = userFromForm({ ...toUpdate });
  return fetch(`${usersURL}/${toUpdate.id}`, 
    { method: 'PUT', 
      headers: 
      { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(user) });
}


function userFromForm(toCreate: FormUser): UserCreated {
  const result = {
    name: toCreate.name,
    age: parseInt(toCreate.age),
    date: new Date(toCreate.date),
    occupation: toCreate.occupation
  }
  return result;
}

function checkResponse(response: Response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error("No User"));
}



