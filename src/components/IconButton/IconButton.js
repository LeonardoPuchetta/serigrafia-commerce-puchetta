import React from 'react';
import './IconButton.css';

const IconButton = ({icon, tooltip, onClick,tooltipOn}) => {
    return (
        <button className="icon-button" onClick={onClick}>
            {icon}
         { tooltipOn? <span className="span-tooltip">{tooltip}</span> : <></>}  
        </button>
    );
}

export default IconButton