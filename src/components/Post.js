import React from 'react';
import { useDispatch } from 'react-redux';
import {Grid,Image,Text,Button} from '../elements/index';
import {history} from '../redux/configureStore';
import Layout from './Layout';
import { actionCreators as postActions } from '../redux/modules/post';
import Like from './Like';


const Post = (props) => {

    const {layout} = props;
    const dispatch = useDispatch();

    if(layout){
        console.log("오잉: ",layout);
    }
    
   
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
                        <Text align="right" margin="0 8px 0 0">{props.insert_dt}</Text>
                    </Grid>
                    {
                        props.is_me && 
                        <Button is_editBtn text="수정" _onClick={()=>{history.push(`/write/${props.id}`)}} />  
                    }
                    {

                        props.is_me && 
                        <Button is_editBtn text="삭제" _onClick={()=>{dispatch(postActions.deletePostFB(props.id))}} /> 
                    }
                </Grid>
                
                {
                    layout ==="center" && (
                        <>
                        <Grid padding="16px">
                            <Text>
                                {props.contents}
                            </Text>
                        </Grid>
                        <Grid>
                            <Image shape="rectangle" src={props.image_url} _onClick={()=>{history.push(`/post/${props.id}`); }}></Image>
                        </Grid>
                       
                        <Grid  padding="16px" is_flex="flex;align-items:center;">
                        
                            <Like></Like>
                            
                        
                            <Text bold margin="0 0 0 8px">
                                댓글 : {props.comment_cnt}개
                            </Text>
                        </Grid>
                        </>
                    )
                }
                
                {
                    layout ==="right" && (
                        <>
                        <Grid  is_flex="flex;flex-direction:row-reverse;">
                            <Grid width="50%" margin="0 0 0 0.5em">
                            <Image shape="rectangle" src={props.image_url} _onClick={()=>{history.push(`/post/${props.id}`); }}></Image>
                            </Grid>
                            <Text>
                                {props.contents}
                                
                            </Text>
                        </Grid>
                        <Grid  padding="16px" is_flex="flex;align-items:center;">
                        
                            <Like></Like>
                            
                        
                            <Text bold margin="0 0 0 8px">
                                댓글 : {props.comment_cnt}개
                            </Text>
                        </Grid>
                    </>
                    )
                }
                {
                    layout ==="left" && (
                        <>
                       
                        <Grid is_flex="flex;">
                            <Grid width="50%" margin="0 0.5em 0 0">
                            <Image shape="rectangle" src={props.image_url} _onClick={()=>{history.push(`/post/${props.id}`); }}></Image>
                            </Grid>
                            <Text>
                                {props.contents}
                                
                            </Text>
                        </Grid>
                        <Grid  padding="16px" is_flex="flex;align-items:center;">
                        
                        <Like liked></Like>
                        
                    
                        <Text bold margin="0 0 0 8px">
                            댓글 : {props.comment_cnt}개
                        </Text>
                    </Grid>
                        </>

                    )
                }
                
                
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
    insert_dt : '2021-11-29 17:00:00',
   
}

export default Post;