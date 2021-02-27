import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PagePerson from '../page-person';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";

import './app-wrap.scss';

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null,
        hasError: false,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {
        return (
            <div className="section-outer">
                <Header />
                <RandomPlanet />
                <PagePerson />
            </div>
        );
    }
}