import React from 'react';

const DashHeader = ({ kingdomHall }) => {
    return (
        <header className="header__container">
            <h2>{kingdomHall}</h2>
            <p>Congregation</p>
        </header>
    );
}

export default DashHeader;