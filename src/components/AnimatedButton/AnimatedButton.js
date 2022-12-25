import React,{useEffect,useState} from 'react';

import './AnimatedButton.css';


export default function AnimatedButton(props) {

    const {text,type,functionButton} = props;

    const [styleButton,setStyleButton] = useState({});

    const stylesObject = {
        
        'success' : {
            color : 'white',
            backgroundColor:'#2AE66E'
        },
        'delete':{
            color : 'red',
            backgroundColor:'white'
        },
        'default':{
            color : 'white',
            backgroundColor:'black'
        },
        'info':{
            color : 'white',
            backgroundColor:'#DFDF5A'
        },
        'add-count':{
            color : 'white',
            backgroundColor:'black',
            width : '15rem',
            margin: '0.5rem 0rem 0 0',
            
        },
        
    }
    
    useEffect(()=>{
        setStyleButton(stylesObject[type]);
        // let button = document.getElementsByClassName('btn-animated');
        // button.style.setProperty('--bg-pseudo' , 'hsl(100, 90%, 60%)' )

 
    },[type])
  
  return (
            <button className='btn-animated' style={styleButton} onClick={functionButton}>
                <span className='span-btn-animated'>
                  {text}
                </span>
            </button>
  )
}
