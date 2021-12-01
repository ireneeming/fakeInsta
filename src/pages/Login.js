import React from 'react';
import Header from '../components/Header';
import { Grid,Input,Text ,Button} from '../elements/index';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import { useDispatch } from 'react-redux';
import {actionCreators as userActions} from '../redux/modules/user'; 

const Login = (props) => {
    const dispatch = useDispatch();

    const login = () => {
        // setCookie("user_id", "luwa", 3);
        // setCookie("user_pwd", "1234", 3);
        dispatch(userActions.loginAction({user_name:'Perl'}));


    }
   
    return(
        <>
           
            <Grid padding="16px">
                <Text size="32px" bold>로그인</Text>
                <Input label="아이디" placeholder="아이디를 입력하세요" _onChange={()=>{console.log("입력!");}}/>
                
                <Input label="비밀번호" placeholder="비밀번호를 입력하세요" _onChange={()=>{console.log("입력!");}}/>
                
                <Button text="로그인" _onClick={()=>{
                console.log('로그인버튼 눌렀!');
                login();
            }}></Button>
            </Grid>
            
        </>
    );
}

export default Login;
