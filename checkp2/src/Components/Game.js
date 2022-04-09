import React from 'react';

const Game = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name}/>
            <h3>{props.note}</h3>
        </div>
    );
};

export default Game;