import React, { Component } from 'react';
import Spiner from '../spiner/spiner';

import './item-list.scss';


export default class ItemList extends Component {
    state = {
        itemList: [],
    };

    componentDidMount() {
        this.props.getData() // Вызываем переданные с сервера данные
            .then((itemList) => {
                this.setState({
                    itemList: itemList
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

        const { itemList } = this.state // Деструктурируем в переменную
        const itemsLi = this.renderItems(itemList); // передаем кастомной функции отображения наш массив из стейта

        if (!itemList[0]) {
            return <Spiner />
        };

        return (
            <ul className="item-list list-group" >
                {itemsLi}
            </ul>
        );
    };
};
