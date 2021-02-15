import React from 'react';
import './planet-details.scss';

const PlanetDetails = () => {
    return (
        <div className="planet-details card">
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/8.jpg`} alt="planet" />
            <div className="card-body">
                <h4>name</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>population</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>rotationPeriod</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>diameter</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PlanetDetails;