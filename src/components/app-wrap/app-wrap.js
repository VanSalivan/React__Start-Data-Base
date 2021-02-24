import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PagePerson from '../page-person';

import './app-wrap.scss';

export default class App extends Component {

    render() {
        return (
            <div className="section-outer">
                <Header />
                <RandomPlanet />
                <PagePerson />
                <PagePerson />
            </div>
        );
    }
}