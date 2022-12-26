import React from 'react';
import './Loading.css';

import PlantIcon from './../../assets/plant.svg'

export default function Loading() {
  return (
    <div className='loading'>
         <div className='loader'> 
            <img src={PlantIcon}/>
         </div>
         
    </div>
  )
}