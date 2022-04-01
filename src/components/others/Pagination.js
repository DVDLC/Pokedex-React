import { useState } from "react"

function Pagination( { pokemonPerPage, totalPokemons, paginate } ){
    
    const [ currentNum, setCurrentNum ] = useState(0)
    
    let pageNumbers = []
    for( let i = 1; i <= Math.ceil( totalPokemons / pokemonPerPage ); i ++ ){
        pageNumbers.push( i )
    }

    console.log( pageNumbers[pageNumbers.length - 1] )

    let newPageNumbers = pageNumbers.slice( 0 + currentNum , 5 + currentNum )

    const clickActiveButton = ( page , e ) => {
        paginate( page )
        e.target.parentElement.childNodes.forEach( element => element.classList.remove('active-page') )
        e.target.classList.add( 'active-page' )
    }

    return(
        <nav className='pagination-wrapp' >
            <button
                style={{ 
                    backgroundColor: '#CE2211', 
                    color: '#fff', 
                    display: currentNum <= 0? 'none': 'block'
                }}
                onClick={() => setCurrentNum(currentNum - 5)}
            ><i class="fa-solid fa-angles-left"></i></button>
            {
                newPageNumbers.map(page => (    
                    page === 1?   
                        <button
                            className="active-page"
                            id='page'
                            onClick={ e => clickActiveButton( page, e ) }
                            key={page}
                        >
                            {page}
                        </button>
                    :
                        <button   
                            id='page'
                            onClick={ e => clickActiveButton( page, e ) }
                            key={page}
                            >
                            {page}
                        </button>
                ))
            }
            <button
                style={{
                    backgroundColor: '#CE2211', 
                    color: '#fff',  
                    display: currentNum > pageNumbers[ pageNumbers.length - 1  ] ? 'none': 'block'
                }}
                onClick={() => setCurrentNum( currentNum + 5 ) }   
            ><i class="fa-solid fa-angles-right"></i></button>
        </nav>
    )
}

export default Pagination