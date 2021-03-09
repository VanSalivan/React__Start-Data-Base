import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">Star DB</div>
            <ul className="header__list">
                <li className="header__list-item"><a href="../">People</a></li>
                <li className="header__list-item"><a href="../">Planets</a></li>
                <li className="header__list-item"><a href="../">Starships</a></li>
            </ul>
        </header>
    );
};

export default Header;