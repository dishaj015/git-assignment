import React from 'react';
import {Route} from 'react-router-dom';
import history from '../js/history';
import { Router } from 'react-router';
import SearchComponent from '../view/home';
import RepoComponent from '../view/issueDetail';
const Routes = () => (
    <Router history={history}>
        <Route exact path="/" component={SearchComponent}></Route>
        <Route  path="/repo/details/:id" component={RepoComponent}></Route> 
    </Router>
    );

export default Routes;