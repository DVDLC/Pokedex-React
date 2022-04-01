import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { setColor } from "../functions/setColor"
import ProgressBar from "./PokemonProgresBar"

function Pokeinfo() {

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/',
        { id } = useParams(),
        [pokemon, setPokemon] = useState({})

    const checkParam = ( id ) => {
        if( isNaN( id ) ){
            return id = pokemon.id
        }else{
            return id
        }
    }
    let newID = checkParam( id )

    useEffect(() => {
        axios.get(`${baseUrl}${id}`)
            .then(res => setPokemon(res?.data))
    }, [ id ])

    return (
        <div className="container" >
            <div className="pokemon-card-container" >
                <div 
                    style={ { background: setColor( pokemon.types?.[0]?.type.name ) } }
                    className="poke-type-back" 
                ></div>
                <section className="section pokedex-pokemon-header" >
                    <div className="pokedex-pokemon-pagination">
                        <Link 
                            className="previous" 
                            to={ 
                                newID > 1?
                                `/pokemon/${+newID - 1}`:
                                '/pokemon/1'
                            }>
                            <i className="fa-solid fa-arrow-left-long"></i>
                        </Link>
                        <Link className="next" to={ `/pokemon/${+newID + 1}` }>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                    <div className="pokedex-pokeTitle" >
                        {pokemon.name}
                        <span className="poke-number" >N.º{pokemon.id}</span>
                        <img src={ pokemon.sprites?.other?.dream_world.front_default } alt="" />
                    </div>
                </section>
                <section className="pokedex-pokemon-details" >
                    <div className="column1" >
                        <div className="pokemon-details-right" >
                            <h3>Tipe/s</h3>
                            <span>
                                {
                                    pokemon.types?.length > 1 ?
                                        <div className="poke-types" >
                                            <div
                                                style={ { background: setColor( pokemon.types?.[0]?.type.name ) } }
                                            >{pokemon.types?.[0]?.type.name}</div>
                                            <div
                                                style={ { background: setColor( pokemon.types?.[1]?.type.name ) } }
                                            >{pokemon.types?.[1]?.type.name}</div>
                                        </div> :
                                        <div className="poke-type" >
                                            <div
                                                style={ { background: setColor( pokemon.types?.[0]?.type.name ) } }
                                            >{pokemon.types?.[0]?.type.name}</div>
                                        </div>
                                }
                            </span>
                        </div>
                        <div className="pokemon-details-right" >
                            <h3>Abilities</h3>
                            <span>
                                {
                                    pokemon.abilities?.length > 1 ?
                                        <div className="poke-abilities" >
                                            <div>
                                                {pokemon.abilities?.[0]?.ability.name}
                                            </div>
                                            <div>
                                                {pokemon.abilities?.[1]?.ability.name}
                                            </div>
                                        </div> :
                                        <div className="poke-abilitie" >
                                            <div>
                                                {pokemon.abilities?.[0]?.ability.name}
                                            </div>
                                        </div>
                                }
                            </span>
                        </div>
                    </div>
                </section>
                <ProgressBar 
                    hp={ pokemon.stats?.[0]?.base_stat }
                    attack={ pokemon.stats?.[1]?.base_stat }
                    defense={ pokemon.stats?.[2]?.base_stat }
                    speed={ pokemon.stats?.[pokemon.stats?.length - 1]?.base_stat }
                />                
                <section className="moves-wrapper" >
                    <ul className="moves-container" >
                        {
                            pokemon.moves?.map( idx => (
                                <li>{ idx.move?.name }</li>
                            ))
                        }
                    </ul>
                </section>
            </div>

        </div>
    )
}

export default Pokeinfo