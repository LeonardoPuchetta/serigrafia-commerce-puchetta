import React from 'react';
import Item from '../Item';

import './ItemList.css';

export default function ItemList(props) {

    //recibimos array con la info de items 
const {items} = props;


  return (
    <>
    <div className='item-list'>
            {
                    items.map((item) => {
                    return  (<Item key={item.id} item={item}/>)
                        })
            }
           
    </div>
    </>
    
  )
}
