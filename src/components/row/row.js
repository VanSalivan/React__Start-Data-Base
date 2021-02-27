import React, { Component } from 'react';

import './row.scss';

// Компонент обертка для деления на 2 стороны
const Row = ({ leftElement, rightElement }) => { // Деструктурируем поля получаемые из props
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftElement}
            </div>
            <div className="col-md-6">
                {rightElement}
            </div>
        </div>
    )
};

export default Row;