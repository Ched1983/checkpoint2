import React, { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

const GameList = () => {
    const [resultApi, setResultApi] = useState([]);

    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
            .then(response => setResultApi(response.data))
            .catch(error => console.log(error));

    }, []);
    return (
        <div>
            {resultApi
                .map(result => {
                    return <Game key={result.id} name={result.name} image={result.background_image} note={result.rating} />

                })
            }
        </div>
    )
}
export default GameList;