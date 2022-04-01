import { LOGIN_USER } from "../types";


export const login = ( user_name, avatar ) => ({ type: LOGIN_USER, payload:{ user_name, avatar } });
