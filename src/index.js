import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import MyProfile from "./views/MyProfile/MyProfile";
import Team from "./views/Team/Team";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Route exact path="/" component={App} />
      <Route exact path="/my-profile" component={MyProfile} />
      <Route exact path="/team" component={Team} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
