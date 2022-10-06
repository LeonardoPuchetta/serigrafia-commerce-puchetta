import React from 'react';
import Card from 'react-bootstrap/Card';
import AnimatedButton from '../AnimatedButton';

import { Link } from 'react-router-dom';

import './Item.css'

export default function Item(props) {

    const {item} = props;

    const imageStyle = {
      width : '14rem',
      height: '14rem'

    }

  return (
    <>
    <div className='item'>
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src={item.imageUrl} style={imageStyle} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             <strong> $ {item.price} </strong>
            </Card.Text>
            <Link to={`/item/${item.id}`}>
              <AnimatedButton text={'Ver detalle'} type={'default'}/>
            </Link>
          </Card.Body>
        </Card>
    </div>
        
    </>
  )
}
