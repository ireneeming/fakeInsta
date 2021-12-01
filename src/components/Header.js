import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { getCookie, deleteCookie } from '../shared/Cookie';

import { actionCreators as userActions } from '../redux/modules/user';

import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
    const history = useHistory();
    // const [is_login, setIsLogin] = React.useState(false);
    const dispatch = useDispatch();
    const is_login = useSelector((state)=> state.user.is_login);

    
    if(is_login){
        return (
            <>
            <HeaderWrap>
                <Logo onClick = {()=>{history.push('/')}}></Logo>
                <HeaderBtnWrap>
                    <HeaderBtn onClick = {()=>{history.push('/register')}}>내 정보</HeaderBtn>
                    <HeaderBtn onClick = {()=>{history.push('/')}}>알림</HeaderBtn>
                    <HeaderBtn onClick = {()=>{dispatch(userActions.logOut({}));}}>로그아웃</HeaderBtn>
                </HeaderBtnWrap>
            </HeaderWrap>
    
            </>
        );
    }

    return (
        <>
        <HeaderWrap>
            <Logo onClick = {()=>{history.push('/')}}></Logo>
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
padding:16px;
box-sizing:border-box;
`;

const HeaderBtnWrap = styled.div`
*display:flex;
`;
const Logo = styled.div`
width:40px;
height:40px;
background:#bbb;
`;

const HeaderBtn = styled.div`
    display:inline-block;
    padding:10px;
    background:#bbb;
    color:#222;
    margin-left:10px;

}
`;


export default Header;