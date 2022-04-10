import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
    const [supprime, setSupprime] = useState(false)
    function efface() {
        setSupprime(!supprime)
    }

    return (
        <div className='game_global'>
            <div className={supprime ? 'noneGame' : 'game'}>
                <h2 className='game_title'>{props.name}</h2>
                <img className='game_img' src={props.image} alt={props.name} />
                <h3 className='game_note'>Note: {props.note}/5</h3>
                <div>
                    <NavLink onClick={''} to={`/${props.id}`}>
                        <button className='game_button'>Détails</button>
                    </NavLink>
                    <button className='game_sup' onClick={efface}>Supprime ce Jeu</button>
                </div>
            </div>
        </div>
    );
};

export default Game;