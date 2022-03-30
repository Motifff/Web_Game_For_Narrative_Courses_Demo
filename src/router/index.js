import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import test from '../views/test'
import test1 from '../views/test1'


const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/test" component={test}/>
            <Route exact path="/test1" component={test1}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter