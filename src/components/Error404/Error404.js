
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const Error404 = () => {
    return (
        <div style={styles.container}>
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
        color: '#a4b0be',
    },
    text: {
        fontSize: '20px',
        color: '#a4b0be',
        marginTop: '16px',
    },
};

export default Error404;
