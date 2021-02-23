import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import StarshipDetails from '../starship-details';
import RandomPlanet from '../random-planet';
import PlanetDetails from '../planet-details';

import './app-wrap.scss';

export default class App extends Component {

    state = {
        selectedPerson: null,
    };

    onPersonSelecter = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {
        console.log(this.state.selectedPerson)
        return (
            <div className="section-outer">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelecter} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}