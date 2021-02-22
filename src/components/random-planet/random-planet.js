import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import './random-planet.scss';

export default class RandomPlanet extends Component {
    swapi = new SwapiService();
    state = {
        planet: {},
    };

    constructor() { // в момент создания компонента отправляем запрос на сервер
        super();
        this.updatePlanet(); // получаемый ответ отображаем на странице через смену state
    };

    onPlanetLoaded = (planet) => { // стрелка для работы с значением this
        this.setState({ planet }) // передаем в state обьект planet который приходит из this.swapi.getPlanet
    };

    updatePlanet() {
        // Генерация случайной планеты через числа
        const itemId = Math.floor(Math.random() * 17) + 2;
        this.swapi.getPlanet(itemId) // получаем планету по передаваемому параметру ID
            .then(this.onPlanetLoaded); // дожидаемся ответа и устанавливаем новый стейт из параметров result от сервера
    };

    render() {
        return (
            <div className="random-planet card" >
                <img className="random-planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planet.id}.jpg`} alt="planet" />
                <div className="card-body">
                    <h4>{this.state.planet.planeName}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{this.state.planet.population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{this.state.planet.rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{this.state.planet.diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

