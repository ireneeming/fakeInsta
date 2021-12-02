import React from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "../shared/Cookie";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";




const PostWrite = (props) => {
    const {history} = props;
    const dispatch = useDispatch();
    const is_login = useSelector((state)=>state.user.is_login);
    const preview = useSelector((state)=> state.image.preview);
    const post_list = useSelector((state)=>state.post.list);

    const post_id = props.match.params.id;
    
    const is_edit = post_id ? true:false;
    
    let _post = is_edit ? post_list.find((p)=>p.id === post_id) : null;
    console.log(_post);
    
    React.useEffect(()=>{
      if(is_edit && !_post){
        console.log('post정보가 없어요');
        history.goBack();
        return;
      }
      if(is_edit){
        dispatch(imageActions.setPreview(_post.image_url));
      }

    },[]);

    const [contents, setContents] = React.useState(_post? _post.contents: "");

    const addPost = () => {
      console.log("게시글작성버튼누름")
      dispatch(postActions.addPostFB(contents));
    }

    const editPost = () => {
      dispatch(postActions.editPostFB(post_id,{contents: contents}));
    }

    const changeContents = (e) => {
    setContents(e.target.value);
}
    console.log(contents)
    if(!is_login){
      return(
        <Grid padding="16px">
          <Text size="32px" bold >로그인 후 글쓰기가 가능합니다.</Text>
          <Button text="로그인하러가기" _onClick={()=>{history.replace('/login')}}/>
        </Grid>
      );
    }
    return (
      <>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            {is_edit? "게시글 수정" : "게시글 작성"}
          </Text>
          <Upload/>
        </Grid>

        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>

          <Image shape="rectangle" src={preview ? preview :"https://via.placeholder.com/400x300"}/>
         
                
        </Grid>

        <Grid padding="16px">
          <Input value={contents} _onChange={changeContents} label="게시글 내용" placeholder="게시글 작성" multiLine />
        </Grid>

        <Grid padding="16px">
          
          {is_edit? (<Button text="게시글 수정" _onClick={editPost}></Button>) : (<Button text="게시글 작성" _onClick={addPost}></Button>)}
        </Grid>
      </>
    );
}

export default PostWrite;