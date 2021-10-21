import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { AdminThemeList } from '../components/admin/adminThemeList';
import { CreateRoomEscape } from '../pages/createRoomEscape';
import { Admin } from '../pages/admin';
import { BookingList } from '../pages/bookingList';

import { Main } from '../pages/main';

export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/super/roomEcape/create" component={CreateRoomEscape}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/" exact component={Main}/>
                <Route path="/booking" component={BookingList}/>
            </Switch>
        </Router>
    )
}