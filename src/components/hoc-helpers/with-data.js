import React, { Component } from 'react';
import Spiner from '../spiner/spiner';

// HOC - Компонент высшего порядка
// Функция которая возвращает компонент, который оборачивает основной компонент
// Компонент-обертка - верет на себя некоторые обязанности/логику о которых не нужно заботить внутреннему компоненту
const withDataHOC = (ComponentView, getDataFunction) => {
    return class extends Component {
        state = {
            dataHOC: [],
        };

        // Логика работы с сетью - [1]
        componentDidMount() {
            getDataFunction().then((dataHOC) => { // Вызываем переданные с сервера данные
                this.setState({ dataHOC: dataHOC });
            })
        };


        render() {
            const { dataHOC } = this.state // Деструктурируем в переменные

            if (!dataHOC[0]) { // Логика отображения спиннера - [2]
                return <Spiner />
            };

            return <ComponentView {...this.props} dataHOC={dataHOC} /> // передаем полученные свойства
        }
    }
};

export default withDataHOC;