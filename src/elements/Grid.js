import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const {is_flex,position, width, padding, margin, bg, children, maxWidth,_onClick} = props;
    const styles = {
        is_flex:is_flex,
        position:position,
        width:width,
        padding:padding,
        margin:margin,
        bg:bg,
        maxWidth:maxWidth,

    }
    return (
        <>
            <GridBox {...styles}  onClick={_onClick}>
            {/* //GridBox 안에 들어가는 {children}이라는 속성이 이 안에 들어가는 모든것들을 children으로 인식시킴 // Post.js 확인 */}
                {children}
            </GridBox>
        </>
    );
}

Grid.defaultProps ={
    position:false,
    children:null,
    is_flex:false,
    width:"100%",
    padding:false,
    margin:false,
    bg:false,
    maxWidth:false,
    _onClick:()=>{}
}

const GridBox = styled.div`
    position : ${(props)=> props.position ? `${props.position}`:""};
    width:${(props) =>props.width};
    height:100%;
    box-sizing:border-box;
    ${(props)=> props.padding ? `padding:${props.padding}` : ""};
    margin:${(props)=> props.margin ? `${props.margin}`:""};
    ${(props)=> props.bg ? `background:${props.bg}`:""};
    display:${(props)=> props.is_flex ? `${props.is_flex}`:""};
    max-width: ${(props)=> props.maxWidth ? `${props.maxWidth}`:""};

`;


export default Grid;