import React from 'react';
import {Grid,Image,Text,Button} from '../elements/index';
import {history} from '../redux/configureStore';

const Post = (props) => {
    
   
    return(

        <>
            <Grid>
                <Grid  padding="16px" is_flex="flex; justify-content:space-between;align-items:center;">
                    <Grid is_flex="flex;align-items:center;">
                        <Image shape="circle" src={props.user_profile} /> 
                        <Text bold margin="0 0 0 10px" size="1em">
                            {props.user_info.user_name}
                        </Text>
                    </Grid>
                    <Grid>
                        <Text align="right" margin="0 8px 0 0">{props.insert_dt.slice(0,-8)}</Text>
                    </Grid>
                    {
                        props.is_me && 
                        <Button is_editBtn text="수정" _onClick={()=>{history.push(`/write/${props.id}`)}} /> 
                    }
                </Grid>
                <Grid padding="16px">
                   <Text>
                       {props.contents}
                   </Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.image_url}></Image>
                </Grid>
                <Grid  padding="16px">
                    <Text bold>
                       댓글 : {props.comment_cnt}개
                   </Text>
                </Grid>
                
            </Grid>
            
        </>
    );
}

//부모가 props를 주지 않아도 디폴트로 나타내는 값 미리 지정하기
Post.defaultProps = {
    user_info: {
        user_name:'minji',
        user_profile:'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    },
    image_url:'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    contents:'고먐미',
    comment_cnt : 10,
    insert_dt : '2021-11-29 17:00:00'
}

export default Post;