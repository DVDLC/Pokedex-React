import userPNG from '../../assets/images/avatars/user.png'
import { LOGIN_USER } from '../types';


const userProfileInitialState = {
    user_nick: 'PokeUser',
    user_avatar: userPNG
}


export default function userReducer(state = userProfileInitialState, action) {
	switch( action.type ){
    case LOGIN_USER:
      if( !action.payload.user_name && !action.payload.avatar){
        return state
      } else if( action.payload.user_name && !action.payload.avatar){
        return {
          ...state,
          user_nick: action.payload.user_name
        }
      } else if( !action.payload.user_name && action.payload.avatar ){
        return {
          ...state,
          user_avatar: action.payload.avatar
        }
      } else{
        return {
          ...state,
          user_nick: action.payload.user_name,
          user_avatar: action.payload.avatar
        }
      }
    default:
	    return state;
  }
}

