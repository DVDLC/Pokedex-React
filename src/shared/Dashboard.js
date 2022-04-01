import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './dashboard-header.css'
import Header from './Header'

function Dashboard() {

    const state = useSelector(state => state.user_profile)
    
    return (
        <div className='Dashboard-container' >
            <input type="checkbox" id='check' />
            <Header />
            <label htmlFor='check' className='sidebar-btn'></label>
            <div className="sidebar">

                <center>
                    <img
                        className='profile-image'
                        src={ state.user_avatar }
                        alt="poke avatar" />
                    <h4>{ state.user_nick }</h4>
                    <Link to='/login'>
                        <i className="fa-solid fa-house"></i>
                        <span>Login</span>
                    </Link>
                    <Link to='/'>
                        <i className="fa-solid fa-display"></i>
                        <span>Pokedex</span>
                    </Link>
                    <a href='https://github.com/DVDLC' target={'_blank'} rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                        <span>Github</span>
                    </a>
                    <Link to='#'>
                        <i className="fa-solid fa-gear"></i>
                        <span>Settings</span>
                    </Link>
                </center>
            </div>
        </div>

    )
}

export default Dashboard