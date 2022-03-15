import React from "react";

const DisplayPokemon = (props) => {
    const { pokemon } = props

    return (
        <div>
            {
                pokemon.map((p, i) => {
                    return (
                        <div key={i}>
                            <p>{p.name}</p>
                        </div>)
                })
            }
        </div>
    )
}
export default DisplayPokemon