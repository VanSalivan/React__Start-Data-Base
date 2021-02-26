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

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}