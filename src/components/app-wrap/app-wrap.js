import React, { Component } from 'react';

import Header from '../header';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';

import SwapiService from "../../services/swapi-service";

import './app-wrap.scss';


// Компонент "Обертка приложения" 
export default class App extends Component {
    swapiService = new SwapiService();

    render() {

        const personDetails = (
            <ItemDetails
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
                itemId={11}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                getData={this.swapiService.getStarships}
                getImageUrl={this.swapiService.getStarshipImage}
                itemId={5}>

                <Record field="model" label="Modal" />
                <Record field="length" label="Lenght" />
                <Record field="costCredits" label="Credits" />

            </ItemDetails>
        );

        return (
            <div className="section-outer">
                <Header />
                <Row leftElement={personDetails} rightElement={starshipDetails} />

            </div>
        );
    }
}
