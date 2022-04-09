import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
    const [supprime, setSupprime] = useState(false)
    function efface() {
        setSupprime(!supprime)
    }

    return (
        <div className={supprime? 'noneGame' : 'game'}>
            <h2 className='game_title'>{props.name}</h2>
            <NavLink onClick={''} to={`/${props.id}`}>
                <button className='game_button'>Détails</button>
            </NavLink>
            <img className='game_img' src={props.image} alt={props.name}/>
            <h3 className='game_note'>{props.note}</h3>
            <button className='game_sup' onClick={efface}>Supprime ce Jeu</button>
        </div>
    );
};

export default Game;