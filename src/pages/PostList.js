import React from 'react';
import Post from '../components/Post';
import { useSelector , useDispatch} from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import InfinityScroll from '../shared/InfinityScroll';
import { Grid } from '../elements';


const PostList =(props) =>{
    const post_list = useSelector((state)=> state.post.list);
    const dispatch = useDispatch();
    const user_info = useSelector((state)=> state.user.user);
    const is_loading = useSelector((state)=>state.post.is_loading);
    const paging = useSelector((state)=>state.post.paging);
    const {history} = props;





    React.useEffect(()=>{

        if(post_list.length < 2){
            dispatch(postActions.getPostFB());
        }        
    },[])

    //console.log("나타나는건가",post_list);//메인에서 빈 배열 나타남
    return(
        <Grid bg="#eff6ff" padding="3px 0">
        <InfinityScroll callNext={()=>{
            console.log("next");
            dispatch(postActions.getPostFB(paging.next))
        }}
            is_next ={paging.next ? true : false}
            loading ={is_loading}
        
        >

            {
                post_list.map((p,idx)=>{
                    if(p.user_info.user_id === user_info?.uid){
                        return (        
                            <Grid bg="#fff" margin="20px 0" key={p.id}  >
                                <Post {...p} is_me/>
                                
                            </Grid> 
                            
                        );
                    }else{
                        return ( 
                            <Grid bg="#fff"  margin="20px 0"  key={p.id} >
                                <Post {...p}/>
                            </Grid>    
                        );
                    }
                    
                   
                })
            }
            </InfinityScroll>
            
        </Grid>
    );
}

export default PostList;