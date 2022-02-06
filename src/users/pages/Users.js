import React from "react";

//importamos lista de usuarios.
import UserList from '../components/UsersList/UsersList.js';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Jhon Doe',
            image: 'https://fotos01.noticiasdenavarra.com/2021/12/29/690x278/beloqui.jpg',
            places: 3
        }
    ]

    return(
        <UserList items={USERS} />
    );
}

export default Users;