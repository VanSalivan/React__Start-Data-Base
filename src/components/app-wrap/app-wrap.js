import React, { Component } from 'react';

import Header from '../header';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';

import SwapiService from "../../services/swapi-service";

import './app-wrap.scss';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details'


// Компонент "Обертка приложения" 
export default class App extends Component {
    swapiService = new SwapiService();

    render() {

        return (
            <div className="section-outer">
                <Header />

                <PersonDetails itemId={11} />

                <PersonList>
                    {(element) => `${element.name}`}
                </PersonList>

            </div>
        );
    }
};
