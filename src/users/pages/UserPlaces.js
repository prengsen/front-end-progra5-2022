import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from '../../places/components/PlaceList/PlaceList.js';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Uno de los rascacielos más grandes del mundo',
        imageURL: 'https://dam.ngenespanol.com/wp-content/uploads/2019/06/empire-state.png',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creatorId: 'u1'
    }];

const UserPlaces = () =>{
    const userId = useParams().userId; //nuevo
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId); //nuevo

    return(
        <PlaceList items={loadedPlaces} />
    );
}

export default UserPlaces;