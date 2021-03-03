import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default StarshipDetails;