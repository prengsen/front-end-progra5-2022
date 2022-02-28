import React from "react";

import './UsersList.css';

import UserItem from './UserItem.js';
import Card from '../../shared/components/Card/Card.js';

const UsersList = (props) =>{
    if(props.items.length === 0){
        return(
            <Card className="center">
                <h2> No se encontraron usuarios. </h2>
            </Card>
        );  
    } else {
        return(
            <ul className="users-list">
                {props.items.map(user => {
                    return(<UserItem 
                                key={user.id}
                                id={user.id}
                                image={user.image}
                                name={user.name}
                                placesCount={user.places} />);
                })}
            </ul>
        );
    }

}

export default UsersList;