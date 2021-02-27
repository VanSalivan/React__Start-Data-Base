import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.scss';

// Компонент отображает данные персонажа с сервера  
export default class PersonDetails extends Component {
    SwapiService = new SwapiService();

    state = {
        person: null,
    };

    componentDidMount() { // Отрисовывает данные персонажа если они были назначенны при старте
        this.updatePerson();
    };

    componentDidUpdate(prevProps) {

        // Если будем использовать смену props || state необходимо условие проверки чтобы не создать петлю
        // Если "ID из пропса" не такой же как "ID предыдущего пропса"
        // SetState =>  componentDidUpdate => SetState =>  componentDidUpdate = БЕСКОНЕЧНОСТЬ

        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() { // функция для обновления выбранного персонажа

        // если пользователь ничего не выбрал, в personId будет null
        if (!this.props.personId) {
            return; // не обновляем персонажа
        }

        // если пользователь кого-то выбрал, делаем запрос на сервер за данными по ID из пропса
        this.SwapiService
            .getPerson(this.props.personId).then(person => { // когда данные будут доступны получим person
                this.setState({
                    person: person // присваиваем данные person стейту
                });
            });
    };

    render() {

        if (!this.state.person) { // если не выбран не один персонаж == null
            return <span>Выберите персонажа из списка</span>
        }

        // Деструктуризация
        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card" >
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};