import React, { Component } from 'react';

import Header from '../header';
import { PeoplePage } from '../pages'
import { PlanetPage } from '../pages'
import { StarshipPage } from '../pages'
import RandomPlanet from '../random-planet'

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';

import './app-wrap.scss';


// Компонент "Обертка приложения" 
export default class App extends Component {
    state = {
        swapiService: new SwapiService(), // источник данных как состояние - удобно для смены источника или тестов
    };

    render() {

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="section-outer">
                    <Header />
                    <RandomPlanet />

                    <PlanetPage />
                    <PeoplePage />
                    <StarshipPage />
                </div>
            </SwapiServiceProvider>
        );
    }
};
