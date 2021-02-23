import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Spiner from '../spiner/spiner';

import './item-list.scss';


export default class ItemList extends Component {
    swapi = new SwapiService();
    state = {
        peopleList: [],
    };

    componentDidMount() {
        this.swapi.getAllPerson()
            .then((peopleList) => {
                this.setState({ peopleList });
            });
    };

    renderItems(arr) {
        // console.log(this.state.peopleList[0])
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected}>{name}</li>
            );
        });
    };

    render() {
        const { peopleList } = this.state
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
