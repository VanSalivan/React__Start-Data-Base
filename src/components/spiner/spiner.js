import React from "react";

import "./spiner.scss";


const Spiner = () => {
    return (
        <div className="spinner-wrap">
            <div className="spinner-body">
                <div></div>
                <div></div>
                <div><div></div></div>
                <div><div></div></div>
            </div>
        </div>
    );
};

export default Spiner;