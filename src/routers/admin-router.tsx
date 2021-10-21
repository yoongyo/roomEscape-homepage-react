import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { AdminHome } from '../components/admin/adminHome';
import { AdminPopup } from '../components/admin/adminPopup';
import { AdminPrice } from '../components/admin/adminPrice';
import { AdminRoomEscape } from '../components/admin/AdminRoomEscape';
import { AdminThemeForm } from '../components/admin/adminThemeForm';
import { AdminThemeList } from '../components/admin/adminThemeList';


export const AdminRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/themes" exact component={AdminThemeList}/>
                <Route path="/admin/theme/create" exact component={AdminThemeForm}/>
                <Route path="/admin" exact component={AdminHome}/>
                <Route path="/admin/roomEscape" component={AdminRoomEscape}/>
                <Route path="/admin/price" component={AdminPrice}/>
                <Route path="/admin/popup" component={AdminPopup}/>
            </Switch>
        </Router>
    )
}