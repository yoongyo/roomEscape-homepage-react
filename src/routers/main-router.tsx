import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import { Main } from '../pages/main';

export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
}