import { Link } from "react-router-dom";
import { setColor } from "../functions/setColor";

function Pokecard({ pokemon }) {
    return (
        <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.id}`}>
            <div
                className="poke-card"
                style={{
                    background: setColor(pokemon.types?.[0]?.type.name)
                }}
            >
                <div className="card-content" >
                    <div
                        className="card-header"
                        style={{ background: setColor(pokemon.types?.[0]?.type.name) }}
                    ></div>
                    <div className="card-body">
                        <figure className="poke-img">
                            <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                        </figure>
                        <hgroup>
                            <h4>{pokemon.name}</h4>
                            <h5>
                                {
                                    pokemon.types?.length > 1 ?
                                        `${pokemon.types?.[0]?.type.name}/${pokemon.types?.[1]?.type.name}` :
                                        `${pokemon.types?.[0]?.type.name}`
                                }
                            </h5>
                        </hgroup>
                        <hr className="pokemon-card-info-hr" />
                        <div className="poke-stats" >
                            <div>
                                <h4>HP</h4><p>{pokemon.stats?.[0]?.base_stat}</p>
                            </div>
                            <div>
                                <h4>Attack</h4><p>{pokemon.stats?.[1]?.base_stat}</p>
                            </div>
                            <div>
                                <h4>Defense</h4><p>{pokemon.stats?.[2]?.base_stat}</p>
                            </div>
                            <div>
                                <h4>Speed</h4><p>{pokemon.stats?.[pokemon.stats?.length - 1]?.base_stat}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Pokecard