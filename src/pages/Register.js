import React from 'react';
import { Grid,Input,Text,Button } from '../elements/index';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../shared/common';

const Register = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd_check, setPwdCheck] = React.useState('');
    
    const [user_name, setUserName] = React.useState(''); 

    const register = () => {

        
        if( id==='' || pwd === '' || user_name === ''){
            window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
            return;
        }
        if(!emailCheck(id)){
            window.alert("이메일 형식에 맞지 않습니다.");
        }
        if(pwd !== pwd_check){
            window.alert("비밀번호와 비밀번호 확인이 맞지 않습니다.");
            return;
        }
        dispatch(userActions.registerFB(id, pwd, user_name));
    }

    return(
        <>
         
        <Grid padding="16px">
            <Text size="32px" bold>회원가입</Text>
            <Input label="아이디" placeholder="아이디를 입력하세요" _onChange={(e)=>{setId(e.target.value);}}/>
            <Input label="닉네임" placeholder="닉네임을 입력하세요" _onChange={(e)=>{setUserName(e.target.value);}}/>
            <Input type="password" label="비밀번호" placeholder="비밀번호를 입력하세요" _onChange={(e)=>{setPwd(e.target.value);}}/>
            <Input type="password" label="비밀번호 확인" placeholder="비밀번호 일치확인" _onChange={(e)=>{setPwdCheck(e.target.value);}}/>

            
            <Button text="회원가입" _onClick={()=>{
                console.log('회원가입버튼 눌렀!');
                register();
            }}></Button>
        </Grid>
        </>
    );
}

Register.defaultProps = {};
export default Register;
