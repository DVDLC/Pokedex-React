import { combineReducers } from "redux";
import userReducer from "./user.reducer";


const reducer = combineReducers({
    user_profile: userReducer
})

export default reducer