import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const {text, _onClick} = props;
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

const BtnSubmit = styled.div`
line-height:50px; 
padding:5px 10px;
font-size:20px;
color:#fff;
background:#000;
box-sizing:border-box;
text-align:center;


cursor:pointer;



`;


export default Button;
