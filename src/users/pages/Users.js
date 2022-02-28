import React from 'react';

import UsersList from '../components/UsersList.js';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Preng Biba',
            image: 'https://media-exp1.licdn.com/dms/image/C5603AQGzlxF59E4HGg/profile-displayphoto-shrink_200_200/0/1561994514254?e=1646265600&v=beta&t=7PwYfRfNB-Y4df1BFs_2buvHmPPBFqawSnpNodI0Q1I',
            places: 3
        }
    ];
    
    return(
        <UsersList items={USERS} />
    );
}

export default Users;