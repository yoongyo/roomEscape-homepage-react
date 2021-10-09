import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link, RouteComponentProps } from "react-router-dom";



export const AdminTables = ({pathName}:any) => {
    return (
        <div className="h-11 bg-white">
            <p>{pathName}</p>    
        </div>
    )
}