import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {bold,color,size,margin, children,align,word} = props;
  
    const styles={
        bold:bold,
        color:color,
        size:size,
        margin:margin,
        align:align, 
       
        word:word,
    }
    return(
        <P {...styles}>
            {children}
        </P>
    );
}

Text.defaultProps = {
   bold:false,
   color:"#222831",
   size:'1em',
   margin:false,
   align:false,
   
   word:false,

}

const P = styled.p`
color:${(props)=> props.color};
font-size: ${(props)=> props.size};
font-weight:${(props)=> props.bold? "600" : "400"};
margin: ${(props)=>props.margin? `${props.margin}` : ""};
text-align:${(props)=>props.align? `${props.align}` : ""};

word:${(props)=>props.word? `${props.word}` : ""};
`;
export default Text;