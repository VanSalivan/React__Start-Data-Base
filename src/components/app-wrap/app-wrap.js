import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import StarshipDetails from '../starship-details';
import PlanetDetails from '../planet-details';

import './app-wrap.css';

export default class App extends Component {

    render() {
        return (
            <div className="">
                <Header />
                <ItemList />
                <PersonDetails />
                <PlanetDetails />
                <RandomPlanet />
                <StarshipDetails />
            </div>
        );
    }
}