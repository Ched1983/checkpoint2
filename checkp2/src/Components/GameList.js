import React, { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';
import Header from './Header';

const GameList = () => {
    const [resultApi, setResultApi] = useState([]);

    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
            .then(response => setResultApi(response.data))
            .catch(error => console.log(error));

    }, []);
    const [filtre, setFiltre] = useState(false)
    const filtered = ()=>{
        setFiltre(!filtre)
    }
    return (
        <div>
            <Header />
            <button onClick={filtered}>{filtre? 'Tous les jeux' : 'Filtre note > 4,5'}</button>
            {resultApi
                .filter((gameFiltre)=>filtre? gameFiltre.rating >= 4.5 : gameFiltre )
                .map(result => {
                    return <Game key={result.id} id={result.id} name={result.name} image={result.background_image} note={result.rating} />
                })
            }
        </div>
    )
}
export default GameList;