import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const {is_flex, width, padding, margin, bg, children} = props;
    const styles = {
        is_flex:is_flex,
        width:width,
        padding:padding,
        margin:margin,
        bg:bg
    }
    return (
        <>
            <GridBox {...styles} >
            {/* //GridBox 안에 들어가는 {children}이라는 속성이 이 안에 들어가는 모든것들을 children으로 인식시킴 // Post.js 확인 */}
                {children}
            </GridBox>
        </>
    );
}

Grid.defaultProps ={
    children:null,
    is_flex:false,
    width:"100%",
    padding:false,
    margin:false,
    bg:false,
}

const GridBox = styled.div`
    width:${(props) =>props.width};
    height:100%;
    box-sizing:border-box;
    ${(props)=> props.padding ? `padding:${props.padding}` : ""};
    ${(props)=> props.margin ? `margin:${props.margin}`:""}
    ${(props)=> props.bg ? `background:${props.bg}`:""}
    ${(props)=> props.is_flex ? `display:flex; align-items:center;justify-content:space-between`:""}
    display:${(props)=> props.is_flex ? `${props.is_flex}`:""};

`;


export default Grid;