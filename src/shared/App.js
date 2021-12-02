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
          
          <Permit>            
             
             <Route path="/detail/:id" exact component ={PostDetail}/>  
             <Route path="/write" exact component ={PostWrite}/>      
          </Permit>
        </ConnectedRouter>
      </Grid>
</>
  );
}

export default App;