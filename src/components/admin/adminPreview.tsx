import React from 'react';
import { Theme } from '../theme/theme';


export const AdminPreview = ({value}:any) => {
    return (
        <div className="p-10">
            <Theme value={value}/>
        </div>
    )
}