import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

//action creators

const logIn = createAction(LOG_IN,(user)=>({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));
// const logIn = (user) => {
//     return{
//         type: LOG_IN,
//         user
//     }
// }

const reducer = handleActions({
    [LOG_IN]: (state, action) => {

    },
},{});