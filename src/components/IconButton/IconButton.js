import React from 'react';
import './IconButton.css';

const IconButton = ({icon, tooltip, onClick,tooltipOn,classIcon,classTooltip}) => {
    
    return (
        <button className={classIcon} onClick={onClick}>
            {icon}
         { tooltipOn? <span className={classTooltip}>{tooltip}</span> : <></>}  
        </button>
    );
}

export default IconButton