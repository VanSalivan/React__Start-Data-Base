import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Spiner from '../spiner/spiner';

import './item-list.scss';


export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList: [],
    };

    componentDidMount() {
        this.swapiService
            .getAllPerson()
            .then((peopleList) => {
                this.setState({
                    peopleList: peopleList
                });
            });
    };

    renderItems(arr) {
        return arr.map(person => {
            return (
                <li className="list-group-item"
                    key={person.id}
                    onClick={() => this.props.onItemSelected(person.id)}>
                    {person.name}
                </li>
            );
        });
    };

    render() {
        const { peopleList } = this.state // Деструктурируем в переменную
        const itemsLi = this.renderItems(peopleList); // передаем кастомной функции отображения наш массив из стейта

        if (!peopleList[0]) {
            return <Spiner />
        };

        return (
            <ul className="item-list list-group" >
                {itemsLi}
            </ul>
        );
    };
};
