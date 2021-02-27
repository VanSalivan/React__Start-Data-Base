import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import ErrorBoundary from '../error-boundary';

import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './page-person.scss';

// Компонент "Обертка страницы персоажей" 
export default class PagePerson extends Component {
    swapiService = new SwapiService();
    state = {
        selectedItem: 11, // изначально выбранный персонаж из списка
    };

    onItemSelected = (id) => { // Функция смены выбранного персонажа
        this.setState({
            selectedItem: id,
        });
    };

    render() {
        // Элементы разметки
        const itemList = (
            <ItemList getData={this.swapiService.getAllPerson} onItemSelected={this.onItemSelected}>
                {(element) => `${element.name}`}
            </ItemList>
        );

        const itemDetails = <ItemDetails itemId={this.state.selectedItem} />

        return (
            <ErrorBoundary>
                <Row leftElement={itemList} rightElement={itemDetails} />
            </ErrorBoundary>
        );
    };
};