import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PagePerson from '../page-person';
import Row from '../row';
import ItemDetails from '../item-details/item-details';

import SwapiService from "../../services/swapi-service";

import './app-wrap.scss';


// Компонент "Обертка приложения" 
export default class App extends Component {
    swapiService = new SwapiService();

    render() {

        const personDetails = <ItemDetails
            getData={this.swapiService.getPerson}
            getImageUrl={this.swapiService.getPersonImage}
            itemId={11}
        />

        const starshipDetails = <ItemDetails
            getData={this.swapiService.getStarships}
            getImageUrl={this.swapiService.getStarshipImage}
            itemId={5}
        />

        return (
            <div className="section-outer">
                <Header />
                <Row leftElement={personDetails} rightElement={starshipDetails} />
                {/* <RandomPlanet /> */}
                {/* <PagePerson /> */}
            </div>
        );
    }
}
