import React, {useState} from "react";

import './PlaceItem.css';
import Card from "../../../shared/components/Card/Card.js";
import Button from "../../../shared/components/FormElements/Button.js";
import Modal from '../../../shared/components/Modal/Modal.js';
import Map from '../../../shared/components/Map/Map.js';

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () =>{
        setShowMap(true);
    }

    const closeMapHandler = () =>{
        setShowMap(false);
    }

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CERRAR</Button>}
            >
                <div className="map-container">
                    {/* Original */}
                    {/*<h2> EL MAPA!!! </h2>*/}

                    {/* Nuevo */}
                    <Map 
                        center={props.coordinates} 
                        zoom={16} 
                    />
                </div>
            </Modal>

            <li className="place-item">
                <Card>
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>

                    <div className="place-item__info">
                        <h2> {props.title} </h2>
                        <h3> {props.address}</h3>
                        <p> {props.description}</p>
                    </div>
                    <div className="place-item__actions">
                    {/* Orignial*/} 
                        {/*<button> VIEW ON MAP </button>
                        <button>EDIT</button>
                        <button>DELETE</button>*/}
                        
                        {/* Nuevos */}
                        <Button inverse onClick={openMapHandler}> VER EN EL MAPA </Button>
                        <Button to={`/places/${props.id}`} > EDIT </Button>
                        <Button> DELETE </Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
}

export default PlaceItem;