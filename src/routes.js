import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {
    return  (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/Repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
} 