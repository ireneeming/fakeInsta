import React from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import styled from 'styled-components';
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "../shared/Cookie";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import Layout from "../components/Layout";

 
const PostWrite = (props) => {
  const {history} = props;
  const dispatch = useDispatch();

  const is_login = useSelector((state)=>state.user.is_login);
  const preview = useSelector((state)=> state.image.preview);
  const post_list = useSelector((state)=>state.post.list);
    

  const post_id = props.match.params.id;
  const is_edit = post_id ? true:false;
  
  let _post = is_edit ? post_list.find((p)=>p.id === post_id) : null;

  const [contents, setContents] = React.useState(_post? _post.contents: "");
  const [layout, setLayout] = React.useState(_post? _post.layout: "center");

 
  
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

    
      
    const menuArr = [
      { name: 'Left',value:'left',layout:'left'},
      { name: 'Center',value:'center',layout:'center'},
      { name: 'Right',value:'right',layout:'right' },
    ];

      // const selectMenuHandler= (index) => {
      //   console.log("눌렀어!!!!!!!!!!!!!!!!!",index )
      //   setLayout(index);
       
      // }




    const addPost = () => {
      console.log("게시글작성버튼누름")
      console.log()
      if(!contents){
        window.alert("게시글을 넣어주세요");
       

        
      }else if(!preview){
        window.alert("이미지를 넣어주세요")
      }else{
        dispatch(postActions.addPostFB(contents, layout));
      }
      
    }

    const editPost = () => {
      dispatch(postActions.editPostFB(post_id,{contents: contents, layout}));
    }

    const changeContents = (e) => {
    setContents(e.target.value);
}

  const is_checked = (e) => {
    if(e){
      setLayout(e)
      console.log("checked 눌림")
    }
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

        <Grid is_flex="flex;">
          {/* 레이아웃 선택 부분 */}
            {menuArr.map((ele, index)=>{
            return (
              
              <Label>
                <Radio 
                
                value={layout === menuArr[index].value ? "submenu focused" : "submenu"}
                // onClick={()=> {selectMenuHandler(index);}}
                onChange={()=>{is_checked(menuArr[index].value)}}
                type="radio" name="layout"/><span> {ele.name}</span></Label>
            
              )
          })}
        

     
            
        </Grid>
        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>
          <Grid>
              <Layout layout ={layout}/>
          </Grid>

         
        </Grid>

        <Grid padding="16px">
          <Input value={contents} _onChange={changeContents} label="게시글 내용" placeholder="게시글 작성" multiLine />
        </Grid>

        <Grid padding="16px">
          
          {is_edit? (<Button text="게시글 수정"  _onClick={editPost}></Button>) : (<Button text="게시글 작성"  _onClick={addPost}></Button>)}
        </Grid>
      </>
    );
}
const Radio = styled.input`
display:none;


&[type="radio"]+span{
    display:block;
    padding:10px;
    cursor:pointer;
    border:1px solid #bbb;
    margin-left:-1px;
    font-weight:600;
}

&[type="radio"]:checked+span{
    background:#2a9257;
    color:#fff;
}

`;
const Label = styled.label`
width:100%;
text-align:center;
font-size:1em;
`;
const TabMenu = styled.ul`
width:100%;
padding:0;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width:100%;
    padding: 0;
    cursor: pointer;
  }
`;

export default PostWrite;