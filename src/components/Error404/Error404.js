
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import './Error404.css'

const Error404 = () => {
    return (
        <div style={styles.container} className='container-error'>
            <FiAlertCircle size={100} style={styles.icon} />
            <p style={styles.text}>Lo siento, la página que estás buscando no se ha encontrado</p>
        </div>
    );
};   

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
    },
    icon: {
        color: '#3E7E73',
    },
    text: {
        fontSize: '20px',
        color: '#3E7E73',
        marginTop: '16px',
    },
};

export default Error404;
