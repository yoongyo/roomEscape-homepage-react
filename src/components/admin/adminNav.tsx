import React, {useState} from 'react';
import {ProSidebar, Menu, SubMenu, MenuItem, SidebarContent} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../../styles/sidebar/custom.scss';


export const AdminNav = ({collapsed}:any) => {

    return (
        <div className="min-h-screen">
            <ProSidebar width="230px" collapsed={collapsed}>
                <Menu iconShape="square">
                    <SubMenu title="DB 관리">
                        <MenuItem>                            
                            <Link to="/admin/theme">테마</Link>
                        </MenuItem>
                        <MenuItem>                            
                            <Link to="/admin/booking">예약</Link>
                        </MenuItem>
                        <MenuItem>                            
                            <Link to="/admin/board">게시판</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem>
                            <Link to="/">메인 페이지로</Link>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}