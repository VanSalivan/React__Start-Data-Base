import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Spiner from '../spiner/spiner';

import './random-planet.scss';

// Компонент для работы с состоянием и логикой
export default class RandomPlanet extends Component {
    swapi = new SwapiService();
    state = {
        planet: {},
        loading: true, // флаг показа спиннера : по умолчанию показывать - true
    };

    constructor() { // в момент создания компонента отправляем запрос на сервер
        super();
        this.updatePlanet(); // получаемый ответ отображаем на странице через смену state
    };

    onPlanetLoaded = (planet) => { // стрелка для работы с значением this
        this.setState({
            planet, // передаем в state обьект planet который приходит из this.swapi.getPlanet
            loading: false // снимаем флаг спинера в state как только данные готовы
        })
    };

    updatePlanet() {
        // Генерация случайной планеты через числа
        const itemId = Math.floor(Math.random() * 17) + 2;
        this.swapi.getPlanet(itemId) // получаем планету по передаваемому параметру ID
            .then(this.onPlanetLoaded); // дожидаемся ответа и устанавливаем новый стейт из параметров result от сервера
    };

    render() {
        // если мы загружаемася(true по умолчанию) : null(ничего)
        const spiner = this.state.loading ? <Spiner /> : null;
        // если не загружаемся/значит данные пришли показывает компонент с данными : null(ничего) - не отображает ничего
        const content = !this.state.loading ? <PlanetViev planet={this.state.planet} /> : null;
        return ( // null В JSX разметке игнорируется
            <div className="random-planet card" >
                {spiner}
                {content}
            </div>
        );
    }
};

// Компонент для отображения загруженых/полученных данных
const PlanetViev = ({ planet }) => {
    return (
        <React.Fragment>
            <img className="random-planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} alt="planet" />
            <div className="card-body">
                <h4>{planet.planetName}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{planet.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{planet.rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};