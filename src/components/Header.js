import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';


const Header = (props) => {
    const history = useHistory();
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