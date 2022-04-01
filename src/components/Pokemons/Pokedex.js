import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import PokemonTypes from "../others/Pokemon-types";
import PokeCards from "./PokeCards";

function Pokedex() {

    const navigate = useNavigate()
    const [pokemons, setPokemons] = useState([]),
        [pokemonToSearch, setPokemonToSearch] = useState(null),
        [loading, setLoading] = useState(false),
        [checkUserInput, setCheckUserInput] = useState(true),
        [typesOnClick, setTypesOnClick] = useState(false),
        [typesToSearch, setTypesToSearch] = useState('all pokemons'),
        [currentPage, setCurrentPage] = useState(1)

    const limit = 1126
    const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await axios(
                {
                    url: baseUrl,
                    method: 'get',
                }
            );
            result.data.results.forEach(element => {
                axios.get(element.url)
                    .then(res => setPokemons(oldPokemon => [...oldPokemon, res.data]))
            });
            setLoading(false)
        };
        fetchData();
    }, [baseUrl])


    // Submit
    const submit = event => {
        event.preventDefault()
        pokemons.forEach(pokemon => {
            if (pokemon.name === pokemonToSearch.toLowerCase().trim()) {
                setCheckUserInput(true)
                navigate(`/pokemon/${pokemonToSearch.toLowerCase()}`)
            } else {
                setCheckUserInput(false)
            }
        })
    }

    return (
        <section className="section-container">
            <form onSubmit={submit}>
                <input
                    onChange={e => setPokemonToSearch(e.target.value)}
                    className="pokeInput"
                    type="text"
                    placeholder="pokemon/pokeID" />
                <button>Search</button>
                <div className="error-wrapper">
                    <small
                        style={checkUserInput ? { display: 'none' } : { display: 'flex' }}
                        className="error-message"
                    >Sorry :c That pokemon doesn't exists</small>
                </div>
                <div
                    onClick={() => setTypesOnClick(!typesOnClick)}
                    className="pokeType">
                    <div className="select-input" >pokemon types</div>
                    <i className="down-arrow  fa-solid fa-angle-down"></i>
                </div>
                <PokemonTypes 
                    typesOnClick={typesOnClick} 
                    setTypesToSearch={setTypesToSearch} 
                    setCurrentPage={ setCurrentPage }
                />
            </form>
            <PokeCards 
                pokemons={pokemons} 
                loading={loading} 
                typesToSearch={typesToSearch} 
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
            />
        </section>
    )
}

export default Pokedex
