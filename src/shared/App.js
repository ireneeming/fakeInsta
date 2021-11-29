import React from "react";
import './App.css';
import {BrowserRouter, Route,Switch} from "react-router-dom";

import PostList from "../pages/PostList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Header from '../components/Header';

function App() {


  return (
      <>
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component ={PostList}/>
          <Route path="/register" exact component ={Register}/>
          <Route path="/login" exact component ={Login}/>
        </Switch>
      </BrowserRouter>
</>
  );
}

export default App;