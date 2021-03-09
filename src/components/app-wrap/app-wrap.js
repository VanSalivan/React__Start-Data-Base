import React, { Component } from 'react';

import Header from '../header';
import Row from '../row';

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';

import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components'

import './app-wrap.scss';


// Компонент "Обертка приложения" 
export default class App extends Component {
    state = {
        swapiService: new SwapiService(), // источник данных как состояние - удобно для смены источника или тестов
        showRandomPlanet: true,
    }

    render() {

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="section-outer">
                    <Header />

                    <PersonDetails itemId={11} />

                    <PlanetDetails itemId={11} />
                    <StarshipDetails itemId={11} />

                    {/* <PersonList>
                        {(element) => `${element.name}`}
                    </PersonList> */}

                </div>
            </SwapiServiceProvider>
        );
    }
};
