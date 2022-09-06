import React from 'react';
import Item from '../Item';

export default function ItemList(props) {

    //recibimos array con la info de items 
const {items} = props;

  return (
    <>
            {
                    items.map((item) => {
                    return  (<Item key={item.id} item={item}/>)
                        })
            }
    </>
    
  )
}
