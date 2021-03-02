import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService()

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            getData={swapiService.getPerson}
            getImageUrl={swapiService.getPersonImage}
            itemId={itemId}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    )
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            getData={swapiService.getPlanet}
            getImageUrl={swapiService.getPlanetImage}
            itemId={itemId}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            getData={swapiService.getStarships}
            getImageUrl={swapiService.getStarshipImage}
            itemId={itemId}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costCredits" label="Credits" />

        </ItemDetails>
    )
};

export { PersonDetails, PlanetDetails, StarshipDetails };