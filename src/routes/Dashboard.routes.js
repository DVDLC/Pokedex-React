import {
    Routes,
    Route
} from 'react-router-dom'
import Pokedex from '../components/Pokemons/Pokedex'
import Pokeinfo from '../components/Pokemons/Pokeinfo'
import Dashboard from '../shared/Dashboard'

function DashboardRoutes(){
    return(
        <>
            <Dashboard />
            <Routes>
                <Route path='/' element={ <Pokedex /> }/>
                <Route path='pokemon/:id' element={ <Pokeinfo /> }/>
            </Routes>
        </>
    )
}

export default DashboardRoutes