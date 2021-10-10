import React, {useEffect} from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fontawesome.css';
import { useHistory } from 'react-router-dom';
import { AdminTable } from './adminTable';
import { AdminTables } from './adminTables';
import { AdminThemeForm } from './adminThemeForm';
import { AdminPreview } from './adminPreview';

export const AdminContent = ({handleCollapsedChange}:any) => {
    let history = useHistory();
    const pathName = history.location.pathname;
    console.log(pathName)

    useEffect(() => {   
        console.log("test");
    }, [pathName])

    return (
        <div className="w-full bg-primary">
            <div className="bg-secondary w-full h-14 mb-3 py-3 px-3">
                <button onClick={handleCollapsedChange}>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        size="2x" 
                        className="hover-orange"
                        color="#5A738E"/>
                </button>
            </div>
            <div className="w-full bg-secondary p-6">
                {/* <AdminTables pathName={pathName}/> */}
                <div className="flex flex-row bg-white">
                    <AdminThemeForm/>
                    <AdminPreview/>
                </div>
            </div>
        </div>
    )
}