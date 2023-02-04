import React from 'react';
import './About.css';

const About = () => {
    return (
        <div  className='container-about container'>
            <div  className='container-about-image'>
                <img 
                    src="https://sites.google.com/site/peras012333/_/rsrc/1478735460959/home/vivero-el-saman/IMG_20161020_145445.jpg"
                    alt="Imagen del vivero" 
                    className='about-image'
                />
            </div>
            <div  className='container-about-info'>
                
                <p><strong>"Suculenta"</strong> somos un vivero dedicado a ofrecer plantas de alta calidad y un servicio excepcional a nuestros clientes. Contamos con una amplia variedad de plantas, desde cactus y suculentas hasta árboles frutales y plantas decorativas. También ofrecemos servicios de paisajismo y mantenimiento de jardines.</p>
                <p>Nuestros jardineros son expertos en plantas y están dispuestos a ayudar a nuestros clientes a encontrar las plantas adecuadas para sus jardines y hogares, y proporcionar información sobre el cuidado y mantenimiento adecuado.</p>
                <p>En nuestra tienda en línea, podrá encontrar una gran variedad de plantas, y podrá comprar con confianza sabiendo que todas nuestras plantas son de alta calidad y son seleccionadas cuidadosamente para garantizar su éxito en su hogar.</p>
                <p>Visítenos en nuestra tienda física o en línea para ver nuestra selección completa de plantas y obtener asesoramiento experto.</p>
            </div>
        </div>
    );
};


export default About;