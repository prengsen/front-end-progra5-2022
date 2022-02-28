import React from "react";

import './NewPlaces.css';
import Input from '../../shared/components/FormElements/Input/Input.js';
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewPlaces = () => {
    return(
        <form className="place-form">
            <Input 
                element="input" 
                type="text"
                label="Title"
                errorText="Ingrese un valor valido." /** nuevo */
                validators={[VALIDATOR_REQUIRE()]} //nuevo
            />

        </form>
    );
}

export default NewPlaces;