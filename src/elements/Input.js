import React from 'react';
import styled from 'styled-components';
import { Text , Grid} from './index';

const Input = (props) => {
    const {label, placeholder,type,name,radio, _onChange,checked,multiLine,value,is_Submit,onSubmit} = props;

    if(multiLine){
        return (
            <Grid>
                <Text size="16px" margin="0">{label}</Text>
                <Textarea rows="10" type={type} placeholder={placeholder} onChange={_onChange} value={value}></Textarea>
    
                
            </Grid>
        );
    }

    
    
    

    return(
        <>
            <Grid>
                <Text size="16px" margin="0">{label}</Text>
                {is_Submit? ( <InputBox type={type} placeholder={placeholder} onChange={_onChange} value={value} onKeyPress={(e)=>{if(e.key==="Enter"){onSubmit(e);}}}/>):( <InputBox type={type} placeholder={placeholder} onChange={_onChange}/>)}
               
            </Grid>
          
        </>
    );
}


Input.defaultProps = {
    label : '',
    placeholder:'텍스트를 입력해주세요.',
    type:'text',
    value:'',
    name:'',
    is_Submit:false, 
    onSubmit:false,
    _onChange : () => {}
}

const InputBox = styled.input`
width:100%;

padding:16px 8px 14px 8px;

border:1px solid #000;
font-size:16px;
margin-bottom:10px;

box-sizing:border-box;

&:focus {
    border:3px solid #d92b7c;
    box-sizing:border-box;
}
`;

const Textarea = styled.textarea`
width:100%;

`;





export default Input;
