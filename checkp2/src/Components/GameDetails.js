import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const GameDetails = () => {
    const [resultApi, setResultApi] = useState([]);
    const index = useParams();

    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${index.id}`)
            .then(response => setResultApi(response.data))
            .catch(error => console.log(error));

    }, [index]);

    return (
        <div>
            <Header />
            <div  className='gameDetails'>
                <div className='gameDetails_Div'>
                    <h2 className='gameDetails_title'>{resultApi.name}</h2>
                    <img className='gameDetails-img' src={resultApi.background_image} alt={resultApi.name} />
                    <h3 className='gameDetails-rating'>Note: {resultApi.rating}/5</h3>
                    <p className='gameDetails_text'>Type: Heroe, Aventure</p>
                    <p className='gameDetails_text'>Interdit aux -16 ans</p>
                    <NavLink onClick={''} to={`/`}>
                        <button>retour</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;