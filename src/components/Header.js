import React from 'react';
import styled from 'styled-components';
import { getCookie, deleteCookie } from '../shared/Cookie';

import { actionCreators as userActions } from '../redux/modules/user';

import { useSelector, useDispatch } from 'react-redux';

import { history } from '../redux/configureStore';
import { apiKey } from '../shared/firebase';

import Write from "../components/Write";
import { Button, Grid } from '../elements';
const Header = (props) => {
   
    // const [is_login, setIsLogin] = React.useState(false);
    const dispatch = useDispatch();
    const is_login = useSelector((state)=> state.user.is_login);

    //세션 키 가져오기
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    //세션 키 잘 가져오는지 확인하기
    //console.log(_session_key)
    //console.log(sessionStorage.getItem(_session_key));

    const is_session = sessionStorage.getItem(_session_key)? true:false;

    console.log(is_session)
    
    if(is_login && is_session){
        return (
            <>
            <HeaderWrap>
                <Logo onClick = {()=>{history.push('/')}}>루와, 일루와</Logo>
                <HeaderBtnWrap>
                    <HeaderBtn onClick = {()=>{}}>내 정보</HeaderBtn>
                    <HeaderBtn onClick = {()=>{history.push('/noti')}}>알림</HeaderBtn>
                    
                    <HeaderBtn onClick = {()=>{dispatch(userActions.logoutFB({}));}}>로그아웃</HeaderBtn>
                </HeaderBtnWrap>  
            </HeaderWrap>
            
    
            </>
        );
    }

    return (
        <>
        <HeaderWrap>
            <Logo onClick = {()=>{history.push('/')}}>루와, 일루와</Logo>
            <HeaderBtnWrap>
                <HeaderBtn onClick = {()=>{history.push('/register')}}>회원가입</HeaderBtn>
                <HeaderBtn onClick = {()=>{history.push('/login')}}>로그인</HeaderBtn>
            </HeaderBtnWrap>
        </HeaderWrap>

        </>
    );
}

const HeaderWrap = styled.div`
width: 100%;
min-width:250px;
position:relative;
display:flex;
justify-content:space-between;
padding:1em;
box-sizing:border-box;
`;

const HeaderBtnWrap = styled.div`
*display:flex;
`;
const Logo = styled.div`

height:40px;

font-size:1.5em;
font-weight:bold;
`;

const HeaderBtn = styled.div`
    display:inline-block;
    padding:10px;
    background:#bbb;
    color:#222;
    margin-left:10px;
    font-size:0.8em;

}
`;


export default Header;