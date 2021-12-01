import React from 'react';
import {Grid,Image,Text} from '../elements/index';

const Post = (props) => {
    
   
    return(

        <>
            <Grid>
                <Grid  padding="16px" is_flex="flex; justify-content:space-between;">
                    <Image shape="circle" src={props.image_url} /> 
                    <Text bold>
                        {props.user_info.user_name}
                    </Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                   <Text>
                       {props.contents}
                   </Text>
                </Grid>
                <Grid>
                    <Image shape="ractangle" src={props.r}></Image>
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