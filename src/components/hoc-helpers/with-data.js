import React, { Component } from 'react';
import Spiner from '../spiner/spiner';

// HOC для работы с полученнием данных
// Компонент-обертка - верет на себя некоторые обязанности/логику о которых не нужно заботить внутреннему компоненту
const withDataHOC = (ComponentView, getDataFunction) => {
    return class extends Component {
        state = {
            dataHOC: null,
        };

        componentDidMount() {
            this.update() // обновляем состояниеЫ
        };

        componentDidUpdate(prevProps) {
            if (this.props.getDataFunction !== prevProps.props.getDataFunction) {
                this.update() // обновляем состояниеЫ
            }
        };

        update() { // Логика работы с сетью - [1]
            getDataFunction()
                .then((dataHOC) => { // Вызываем переданные с сервера данные
                    this.setState({ dataHOC: dataHOC });
                })
        };


        render() {
            const { dataHOC } = this.state // Деструктурируем в переменные

            if (!dataHOC) { // Логика отображения спиннера - [2]
                return <Spiner />
            };

            return <ComponentView {...this.props} dataHOC={dataHOC} /> // передаем полученные свойства
        }
    }
};

export default withDataHOC;