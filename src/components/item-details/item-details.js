import React, { Component } from 'react';

import './item-details.scss';

const Record = (props) => {
    const { item, field, label } = props;

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };

// Компонент отображает данные персонажа с сервера  
export default class ItemDetails extends Component {
    state = {
        itemIdBody: null,
        image: null,
    };

    componentDidMount() { // Отрисовывает данные персонажа если они были назначенны при старте
        this.updateItemBody();
    };

    componentDidUpdate(prevProps) {

        // Если будем использовать смену props || state необходимо условие проверки чтобы не создать петлю
        // Если "ID из пропса" не такой же как "ID предыдущего пропса"
        // SetState =>  componentDidUpdate => SetState =>  componentDidUpdate = БЕСКОНЕЧНОСТЬ

        if (this.props.itemId !== prevProps.itemId) {
            this.updateItemBody();
        }
    }

    updateItemBody() { // функция для обновления выбранного персонажа
        const { itemId, getData, getImageUrl } = this.props

        // если пользователь ничего не выбрал, в itemId будет null
        if (!itemId) {
            return;  // не обновляем персонажа
        }

        // если пользователь кого-то выбрал, делаем запрос на сервер за данными по ID из пропса
        getData(itemId).then(newItem => { // когда данные будут доступны получим newItem
            this.setState({
                itemIdBody: newItem, // присваиваем данные newItem стейту
                image: getImageUrl(newItem) // возвращает картинку по заданому ID
            });
        });
    };

    render() {

        if (!this.state.itemIdBody) { // если не выбран не один персонаж == null
            return <span>Выберите персонажа из списка</span>
        }

        // Деструктуризация
        const { id, name, gender, birthYear, eyeColor } = this.state.itemIdBody;

        return (
            <div className="item-details card" >
                <img className="item-image" src={this.state.image} />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {
                                    item: this.state.itemIdBody
                                });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
};