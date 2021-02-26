import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";

import './page-person.scss';

export default class PagePerson extends Component {
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

    // функция ловит ошибку и останавливает ее всплытие
    componentDidCatch() { // заменяем флаг ошибки при срабатывании
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError) {
            return <span>Ошибочка, не волнуйтесь, все исправим, скоро...</span>
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPerson}
                        renderItem={(item) => `${item.name} ( ${item.gender} - ${item.birthYear} )`}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>

        );
    };
};