import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";

import firebase from "firebase/compat/app";

//const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators , 모듈먼저 만들기, 모듈이 있어야 export default  reducer 모아서 
// 미들웨어랑 엮어서 스토어 만들 때 필요해서 먼저 만들기

//Redux Action 사용한 방법
//const logIn = createAction(LOG_IN,(user)=>({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));
const getUser = createAction(GET_USER,(user)=>({user}));
const setUser = createAction(SET_USER,(user)=>({user}));

//initialState = defaultProps 같은 것 ㅎㅎ
const initialState = {
    user:null,
    is_login:false,
};


const user_initial =  {
    user_name : 'minzigom'
}

//로그인 했을 때 메인페이지로 이동 처리 부분
//middleware actions 페이지 넘기는것 처리
const loginAction = (user) => {
    return function (dispatch, getState, {history}){
        console.log(history);
        dispatch(setUser(user));

        history.push('/');
    }
}


const loginFB = (id, pwd) => {
    return function(dispatch, getState, {history}){
    //2. firebase docs 에서 '인증상태 지속성 > 인증 상태 지속성 수정' 내용 가져오기
    //firebase로 로그인 상태 유지하기
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res)=>{

        //1. firebase docs 에서 '비밀번호 인증 > 사용자 로그인에 이메일 주소와 비밀번호 사용' 내용 가져오기
        //firebase로 로그인 인증 가져오기
        auth.signInWithEmailAndPassword(id, pwd)
        .then((user) => {
            console.log(user);

            dispatch(setUser({
                user_name:user.user.displayName, 
                id:id, 
                user_profile:'',
                uid:user.user.uid,
            }));
            //로그인 후 메인으로 이동하기
            history.push('/');
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        });

    });

    


    };
}


//firebase랑 통신하는 미들웨어 만들기
const registerFB = (id, pwd, user_name) => {
    return function (dispatch, getState, {history}){
        //실제로 어떤 동작 할지 적기
        //firebase docs 에서 '비밀번호 기반 계정 만들기' 내용 가져오기
        auth.createUserWithEmailAndPassword(id,pwd)
        .then((user) => {
            // Signed in
            console.log(user)
            // ...

            auth.currentUser.updateProfile({
                displayName : user_name,
            }).then(()=>{
                dispatch(setUser({
                    user_name:user_name, 
                    id:id, 
                    user_profile:'',
                    uid:user.user.uid,
                }));

                history.push('/');

            }).catch((error)=>{
                console.log(error);
            });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
        });
    }
}

const loginCheckFB = () => {
    return function(dispatch, getState, {history}){
        auth.onAuthStateChanged((user)=>{
            if(user){
                dispatch(setUser({
                    user_name:user.displayName, 
                    id:user.email, 
                    user_profile:'',
                    uid:user.uid,
                }));
            }else{
                dispatch(logOut());
            }
        })
    }
}

const logoutFB = () => {
    return function(dispatch, getState, {history}){
        auth.signOut().then(()=>{
            dispatch(logOut());
            history.replace('/');
        })
    }
}

//handleAction 모듈 사용하여 reducer 만들기
export default handleActions(
    {
        //위에서 createAction 으로 작성하면 payload 단계 한번 더 거침. payload 에 우리가 보낸 데이터가 담긴다.
        //[LOG_IN] 로그인을 [SET_USER]로 변경 : 로그인을 해도 리덕스에 회원정보 들어가고, 회원가입해도 리덕스에 유저정보가 들어가야 하니까 이 작업 자체를 set_user 로 처리

        [SET_USER]: (state,action) => produce(state,(draft)=>{
            setCookie("is_login", "success");
            draft.user = action.payload.user;
            draft.is_login = true;
        }),
        [LOG_OUT]: (state, action) => produce(state,(draft)=>{
            deleteCookie("is_login");
            draft.user=null;
            draft.is_login= false;
        }),
        [GET_USER]: (state,action)=>produce(state,(draft)=>{}),
    },
    initialState
);

const actionCreators = {
    //logIn,
    getUser,
    logOut,
    //loginAction,
    registerFB,
    loginFB,
    loginCheckFB,
    logoutFB
};

export{actionCreators};