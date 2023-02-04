import React,{useEffect,useState} from 'react';

import './AnimatedButton.css';


export default function AnimatedButton(props) {

    const {text,type,functionButton} = props;

    const [styleButton,setStyleButton] = useState({});

    const stylesObject = {
        
        'success' : {
            color : 'white',
            backgroundColor:'#2AE66E',
            
        },
        'delete':{
            color : 'white',
            backgroundColor:'red'
        },
        'default':{
            color : 'white',
            backgroundColor:'black',
            
        },
        'info':{
            color : 'white',
            backgroundColor:'#DFDF5A'
        },
        'add-count':{
            color : 'white',
            backgroundColor:'black',
            width : '100%',
            margin: '0.1rem',

        },
        'category':{
            color : 'black',
            backgroundColor:'#F3F17D'
        }
        
    }
    
    useEffect(()=>{
        setStyleButton(stylesObject[type]);
      
    },[type])
  
  return (
            <button className='btn-animated' style={styleButton} onClick={functionButton}>
                <span className='span-btn-animated'>
                  {text}
                </span>
            </button>
  )
}
