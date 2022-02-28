import React from "react";

import Card from '../../../shared/components/Card/Card.js';
import PlaceItem from "../PlaceItem/PlaceItem.js";

import './PlaceList.css';

const PlaceList = (props) => {
    if(props.items.length === 0){
        return (
            <div className="place-list center"> 
                <Card>  
                    <h2> No se encontrarorn sitios registrados.</h2>
                    <button> ¿Deseas crear un sitio nuevo? </button>
                </Card>
            </div>
        );
    } else {
        return(
            <ul className="place-list">
                {props.items.map(place => (
                    <PlaceItem 
                        key={place.id}
                        id={place.id}
                        image={place.imageURL}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        creatorId={place.creator}
                        coordinates={place.location}
                    />
                ))}
            </ul>
        );
    }
}

export default PlaceList;