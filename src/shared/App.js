import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import styled from "styled-components";
import PostList from "../pages/PostList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Header from '../components/Header';

import Postview from "../pages/PostDetail";
import Permit from "./Permit";

import { Button, Grid } from "../elements";

import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/configureStore';

import {actionCreators as userActions} from '../redux/modules/user';
import {useDispatch} from 'react-redux';
import {apiKey} from './firebase';
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Notification from "../pages/Notification";


function App() {

  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true:false;

  React.useEffect(()=>{
    
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }

  },[]);


  return (
      <>
      <Grid width="700px" margin="0 auto" position="relative">
        <Header ></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component ={PostList}/>
          <Route path="/register" exact component ={Register}/>
          <Route path="/login" exact component ={Login}/>  
          <Route path="/detail/:id" exact component ={PostDetail}/>  
          <Route path="/write" exact component ={PostWrite}/>
          {/* 수정페이지      */}      
          <Route path="/write/:id" exact component ={PostWrite}/> 
          {/* /수정페이지      */}
          <Route path="/noti" exact component ={Notification}/>      
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_addBtn text='+' _onClick={()=>{history.push('/write');}}/>  
      </Permit>
</>
  );
}

export default App;