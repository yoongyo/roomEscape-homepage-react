import React, {useState} from 'react';
import { AdminContent } from '../components/admin/adminContent';
import { AdminNav } from '../components/admin/adminNav'


export const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="flex flex-row">
            <AdminNav collapsed={collapsed}/>
            <AdminContent handleCollapsedChange={handleCollapsedChange}/>
        </div>
    )
}