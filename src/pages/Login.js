import React from 'react';
import Header from '../components/Header';
import { Grid,Input,Text ,Button} from '../elements/index';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import { useDispatch } from 'react-redux';
import {actionCreators as userActions} from '../redux/modules/user'; 

const Login = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const login = () => {
        // setCookie("user_id", "luwa", 3);
        // setCookie("user_pwd", "1234", 3);

        if(id==='' || pwd ===''){
            window.alert("아이디 혹은 비밀번호를 입력해주세요.");
            return;
        }
        dispatch(userActions.loginFB(id, pwd)); 


    }
   
    return(
        <>
            <Grid padding="16px">
                <Text size="32px" bold>로그인</Text>
                <Input label="아이디" placeholder="아이디를 입력하세요" _onChange={(e)=>{setId(e.target.value);}}/>
                
                <Input type="password" label="비밀번호" placeholder="비밀번호를 입력하세요" _onChange={(e)=>{setPwd(e.target.value);}}/>
                
                <Button text="로그인" _onClick={()=>{
                console.log('로그인버튼 눌렀!');
                login();
            }}></Button>
            </Grid>
        </>
    );
}

export default Login;
