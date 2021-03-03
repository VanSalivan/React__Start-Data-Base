import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {(swapiService) => {
                return (
                    <ItemDetails
                        getData={swapiService.getPerson}
                        getImageUrl={swapiService.getPersonImage}
                        itemId={itemId}>

                        <Record field="gender" label="Gender" />
                        <Record field="eyeColor" label="Eye Color" />

                    </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>
    )
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {(swapiService) => {
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
            }}
        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {(swapiService) => {
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
            }}
        </SwapiServiceConsumer>
    )
};

export { PersonDetails, PlanetDetails, StarshipDetails };