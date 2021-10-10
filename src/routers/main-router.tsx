import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Admin } from '../pages/admin';
import { BookingList } from '../pages/bookingList';

import { Main } from '../pages/main';

export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route path="/" exact component={Main}/>
                <Route path="/booking" component={BookingList}/>
            </Switch>
        </Router>
    )
}