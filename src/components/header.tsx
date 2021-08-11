import React from 'react';
import { DrawerNavigation } from './drawerNavigation';



export const Header = () => {
    return (
        <div className="border-b border-gray-200 p-5 mb-8">
            <div className="absolute">
                <DrawerNavigation/>
            </div>
            <div className="text-center sm:max-w-3xl sm:mx-auto sm:text-left">
                <h1>무비이스케이프</h1>
                {/* <Link className="text-xl sm:text-2xl font-bold box-content" to="/">MOVE <small style={{color: '#c0c0c0', 'fontWeight': 500}}>게시판</small></Link> */}
            </div>
        </div>
    )
}