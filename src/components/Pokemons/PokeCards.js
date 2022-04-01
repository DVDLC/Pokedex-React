import Pokecard from "./Pokecard";
import Pagination from "../others/Pagination";
import { useEffect, useState } from "react";

function PokeCards({ pokemons, loading, typesToSearch, currentPage, setCurrentPage }) {

    
    const [currentPokemons, setCurrentPokemons] = useState({})

    const pokemonsPerPage = 6

    // Change page

    const paginate = pageNumber => setCurrentPage(pageNumber)

    // Get current pokemon
    const idxLastPokemon = currentPage * pokemonsPerPage,
        idxFirstPokemon = idxLastPokemon - pokemonsPerPage

    // verify currentPokemons 

    useEffect(() => {
        setCurrentPokemons(() => {
            if (typesToSearch === 'all pokemons') {
                return {
                    total: pokemons,
                    current: pokemons.slice(idxFirstPokemon, idxLastPokemon)
                }
            } else {
                // TODO
                let filter = pokemons.filter(pokemon => pokemon?.types[0].type.name === typesToSearch )
                return{
                    total: filter,
                    current: filter.slice(idxFirstPokemon, idxLastPokemon)
                }
            }
        })
    }, [ typesToSearch, currentPage, idxFirstPokemon, idxLastPokemon, pokemons]) 

 
    if (loading) {
        return (
            <div className="spinner" ></div>
        )
    } else {
        return (
            <>
                <div className="cards-wrapper">
                    {
                        currentPokemons?.current?.map( pokemon => (
                            <Pokecard key={pokemon.id} pokemon={pokemon} />
                        ))
                    }
                </div>
                <Pagination 
                    pokemonPerPage={pokemonsPerPage} 
                    totalPokemons={ currentPokemons?.total?.length} 
                    paginate={paginate} 
                />
            </>
        )
    }
}

export default PokeCards