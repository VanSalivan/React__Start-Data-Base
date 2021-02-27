import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import ErrorBoundary from '../error-boundary';

import Row from '../row';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './page-person.scss';

// Компонент "Обертка страницы персоажей" 
export default class PagePerson extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null, // изначально выбранный персонаж из списка
    };

    onPersonSelected = (id) => { // Функция смены выбранного персонажа
        this.setState({
            selectedPerson: id,
        });
    };

    render() {
        // Элементы разметки
        const itemList = (
            <ItemList getData={this.swapiService.getAllPerson} onItemSelected={this.onPersonSelected}>
                {(item) => `${item.name} ( ${item.birthYear} )`}
            </ItemList>
        );

        const personDetails = <PersonDetails personId={this.state.selectedPerson} />

        return (
            <ErrorBoundary>
                <Row leftElement={itemList} rightElement={personDetails} />
            </ErrorBoundary>
        );
    };
};