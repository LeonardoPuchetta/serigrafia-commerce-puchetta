import React from 'react';
import ItemCount from '../ItemCount';

export default function ItemListContainer(props) {

const {gretting} = props;

const onAdd = (number) => {
    alert("Has agregado " + number + " productos al carrito.");
}

  return (
    <>
     
        <div>
            {gretting}
        </div>
        <ItemCount initial={5} stock={3} onAdd={onAdd}/>
    </>
  )
}
