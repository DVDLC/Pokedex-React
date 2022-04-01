import Pokelogo from '../assets/images/Pokelogo.png'
function Header() {
    return (
        <header className='dashboard-header' >
            <div className="left-area">
                <img src={ Pokelogo } alt="pokelogo" />
            </div>
            <div className='background'></div>
            <div className='pokeball'></div>
        </header>
    )
}

export default Header