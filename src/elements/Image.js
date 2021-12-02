import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const{shape,src,size} = props;
    const styles = {   
        src:src,
        size : size,
    }

    if(shape === 'circle'){
       return(
        <ImageCircle {...styles}></ImageCircle>
       );
    }
    if(shape === "rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        );
    }
    return (
        <>

        </>
    );
}

Image.defaultProps = {
    shape:"circle",
    src:'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    size:36,

}

const AspectOutter = styled.div`
    width:100%;
    min-width:250px;

`;

const AspectInner = styled.div`
    position:relative;
    padding-top: 75%;
    overflow:hidden;
    background-image: url("https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-size:cover;
    `;


const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url('${(props)=> props.src}');
    background-size:cover;
    margin: 4px;
`;

export default Image;