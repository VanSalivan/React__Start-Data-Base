import React from 'react';

import './item-list.scss';

// Часть отрисовки компонента
const ItemList = (props) => {
    const itemsLi = props.dataHOC.map(item => { // передача данных из props

        const label = props.children(item); // получаем снаружи функцию {(element) => `${element.name}`}

        return (
            <li className="list-group-item"
                key={item.id}
                onClick={() => props.onItemSelected(item.id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group" >
            {itemsLi}
        </ul>
    );
};

export default ItemList;