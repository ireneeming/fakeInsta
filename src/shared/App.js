import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import PostList from "../pages/PostList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Header from '../components/Header';
import { Grid } from "../elements";

import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/configureStore';


function App() {


  return (
      <>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component ={PostList}/>
          <Route path="/register" exact component ={Register}/>
          <Route path="/login" exact component ={Login}/>   
        </ConnectedRouter>
      </Grid>
</>
  );
}

export default App;