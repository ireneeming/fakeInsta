import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const {text, _onClick,is_addBtn} = props;

    if(is_addBtn){
        return(
            <AddButton onClick={_onClick}>
                {text} 
            </AddButton>
        );
    }

    return(
        <BtnSubmit onClick={_onClick}>
            {text} 
        </BtnSubmit>
    );
}

Button.defaultProps={
    text:'텍스트',
    _onClick:()=>{}
}

const BtnSubmit = styled.button`
line-height:50px; 
padding:5px 10px;
font-size:20px;
color:#fff;
width:100%;
background:#000;
box-sizing:border-box;
text-align:center;
cursor:pointer;
`;

const AddButton = styled.button`
position:fixed;
right:16px;

bottom:50px;
z-index:999;
width:50px; 
height:50px; 
border-radius:50%;
font-size:30px;
color:#fff;
background:#000;
box-sizing:border-box;
text-align:center;
cursor:pointer;
font-weight:700;

`;


export default Button;
