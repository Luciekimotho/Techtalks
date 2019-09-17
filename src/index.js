import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog'
import App from './App'
import ToDo from './ToDo'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/css/blk-design-system-react.css";
import "./assets/demo/demo.css";

ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route
        path="/home"
        render={props => <App {...props} />}
      />

      <Route 
        path="/blog" 
        render={props => <Blog {...props} />} 
      />
       
     <Route
        path="/to-do"
        render={props => <ToDo {...props} />}
      />
       {/*  <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      /> */}
      <Redirect from="/" to="/blog" />
    </Switch>
  </BrowserRouter>,
    
    document.getElementById('root')
    );