import React, { useState } from 'react'
import DisplayPokemon from './DisplayPokemon'

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState()

    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            console.log(jsonResponse)
            setPokemon(jsonResponse.results)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={fetchPokemon}>Fetch That Pokemon</button>

            {
                pokemon?
                <DisplayPokemon pokemon = {pokemon} />:
                <h1>Fetch a Pokemon by clicking the button</h1>
            }
        </div>

    )
}

export default FetchPokemon