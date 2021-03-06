import React from 'react';
import styled from 'styled-components';


const Button = (props) => {
    const {text, _onClick,_disabled,is_addBtn, is_editBtn} = props;

    if(is_addBtn){
        return(
            <AddButton onClick={_onClick}>
                {text} 
            </AddButton>
        );
    }

    if(is_editBtn){
        return(
            <EditButton onClick={_onClick} >
                {text} 
            </EditButton>
        );
    }

    return(
        <BtnSubmit onClick={_onClick} >
            {text} 
        </BtnSubmit>
    );
}

Button.defaultProps={
    text:'텍스트',
    _onClick:()=>{},
    _disabled:()=>{},
}

const BtnSubmit = styled.button`
line-height:50px; 
padding:5px 10px;
font-size:1.2em;
color:#fff;
width:100%;
background:#000;
box-sizing:border-box;
text-align:center;
cursor:pointer;
opacity:1;

&.disabled{
    opacity:0.5;
}
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

const EditButton = styled.div`

padding:5px 10px;
background: #808080;
color:#fff;
text-align:center;
word-break:keep-all;
`;


export default Button;
