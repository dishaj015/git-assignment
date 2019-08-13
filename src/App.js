import React from 'react';
import  Routes from './routes';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();
export default () => 
<Router history={history}>
<Routes/> 
</Router>
;
