import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../redux/actions/user.actions"
import { useState } from 'react'
import bullbasor from '../../assets/images/avatars/bullbasaur.png'
import charmander from '../../assets/images/avatars/charmander.png'
import eevee from '../../assets/images/avatars/eevee.png'
import pikachu from '../../assets/images/avatars/pikachu.png'
import squirtle from '../../assets/images/avatars/squirtle.png'
import zubat from '../../assets/images/avatars/zubat.png'


function Login(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ userAvatar, setUserAvata ] = useState(null)
    const [ userName, setUserName ] = useState(null)
    const avatars = [ 
            bullbasor, 
            charmander, 
            eevee, 
            pikachu, 
            squirtle, 
            zubat 
    ]

    const handlelogin = ( e ) => {
        e.preventDefault()
        dispatch( login( userName, userAvatar ))
        navigate('/')
    }

    return(
        <div className="pokeForm" >
            <img src={ require("../../assets/images/Pokelogo.png") } alt="" />
            <form onSubmit={ handlelogin }>
                <input 
                    type="text"
                    onChange={ e  => setUserName( e.target.value )}
                    placeholder="Your trainer name" />
                <h3>Choose your avatar</h3>
                <div className="avatar-wrapp">
                   {
                       avatars.map( avatar => (
                           <button
                                disabled={ userAvatar? true: false }
                                onClick={() => setUserAvata( avatar )} >
                               <img src={ avatar } alt="poke-avatar"/>
                            </button>
                       ))
                   }
                </div>
                <button
                    className='btn-form' 
                >Let's go!</button>
            </form>
        </div>
    )
}

export default Login