import React from 'react';
import Post from '../components/Post';
import { useSelector , useDispatch} from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList =() =>{
    const post_list = useSelector((state)=> state.post.list);
    const dispatch = useDispatch();
    const user_info = useSelector((state)=> state.user.user);

    React.useEffect(()=>{

        if(post_list.length===0){
            dispatch(postActions.getPostFB());
        }


        
    },[])

    console.log("나타나는건가",post_list);//메인에서 빈 배열 나타남
    return(
        <>
            {
                post_list.map((p,idx)=>{
                    if(p.user_info.user_id === user_info?.uid){
                        return <Post key={p.id} {...p} is_me/>
                    }else{
                        return <Post key={p.id} {...p}/>
                    }
                    
                })
            }
        </>
    );
}

export default PostList;