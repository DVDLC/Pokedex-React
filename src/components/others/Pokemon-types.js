
const types = [
    'All pokemons',
    'Normal',
    'Fighting',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
    'Unknown',
    'Shadow'
]


function PokemonTypes( { typesOnClick, setTypesToSearch, setCurrentPage } ){

    const typeOnclick = ( type ) => {
        setTypesToSearch( type.toLowerCase() )
        setCurrentPage( 1 )
    }

    return(
        <div   
            style={ typesOnClick? { display: 'block' }: {display: 'none'} } 
            className="drop-down" >
            {
                types.map( type => (
                    <div
                        onClick={ () => typeOnclick( type )}
                        className="pokemon-type-option"
                        key={ type }
                    >{ type }</div>
                ))
            }
        </div>
    )
}

export default PokemonTypes