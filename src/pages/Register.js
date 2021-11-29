import React from 'react';
import Header from '../components/Header';

import { Grid,Input,Text,Button } from '../elements/index';


const Register = (props) => {
    return(
        <>
         <Header></Header>
        <Grid padding="16px">
            <Text size="32px" bold>회원가입</Text>
            <Input label="아이디" placeholder="아이디를 입력하세요" _onChange={()=>{console.log("입력!");}}/>
            <Input label="닉네임" placeholder="닉네임을 입력하세요" _onChange={()=>{console.log("입력!");}} />
            <Input label="비밀번호" placeholder="비밀번호를 입력하세요" _onChange={()=>{console.log("입력!");}}/>
            <Input label="비밀번호 확인" placeholder="비밀번호 일치확인" _onChange={()=>{console.log("입력!");}}/>

            
            <Button text="회원가입" _onClick={()=>{
                console.log('회원가입버튼 눌렀!');
            }}></Button>
        </Grid>
        </>
    );
}


export default Register;
