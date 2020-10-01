import React from 'react';
import './css/SidebarRow.css'
import HomeIcon from '@material-ui/icons/Home'

const SidebarRow = ({title, Icon, selected}) => {
    return (
        <div className={`sidebarRow ${selected && 'sidebarRow__selected'}`}>
            <Icon className={'sidebarRow__icon'} />
            <h3 className={'sidebarRow__title'}>{title}</h3>
        </div>
    );
};

export default SidebarRow;