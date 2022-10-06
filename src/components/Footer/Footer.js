import React from 'react';

import './Footer.css';


import {IoLogoLinkedin} from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoYoutube } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import {SiGooglemaps} from 'react-icons/si';
import { IconContext } from "react-icons";

import { iconCenterStyle , iconListStyle } from '../../utils/iconStyles';


export default function Footer() {

  return (
    <div className='footer-container'>
      
      <div className='footer-superior'>
          <div className='line-container'><div className='line'></div></div>
          <IconContext.Provider value={iconCenterStyle}>
                  <ul className='social-list-ul'>
                     
                      <li className='social-list-li'>
                        <a href='https://www.linkedin.com/in/leonardo-puchetta' target='_blank'  rel='noreferrer'>
                          <span><IoLogoLinkedin/></span>
                        </a>
                      </li>
                      <li className='social-list-li'>
                        <a href='https://www.instagram.com/' target='_blank'  rel='noreferrer'>
                          <span><IoLogoInstagram/></span>
                        </a>
                      </li>
                      <li className='social-list-li'>
                        <a  href='https://www.facebook.com/' target='_blank'  rel='noreferrer'>
                          <span><IoLogoFacebook/></span>
                        </a>
                      </li>
                      <li className='social-list-li'>
                        <a href='https://www.youtube.com/' target='_blank'  rel='noreferrer'>
                          <span><IoLogoYoutube/></span>
                        </a>
                      </li>
                  </ul>
          </IconContext.Provider>
          <div className='line-container'><div className='line'></div></div>
          
      </div>
      
      <div className='footer-inferior'>
            <div className='footer-inferior-left'>
                <div className='info-hour'>
                
                      <span>Lun. a Vie. 8:00 a 12:00 y 13:30 a 17:30 hr.</span>
                      <span>Sáb. 8:00 a 12:30 hr.</span>
                      <span>Feriados laborables: 8:00 a 12:30 hr. </span>
                      <span>Feriados no laborables: cerrado.</span>
                
                </div>
            </div>
            <div className='footer-inferior-center'>
            <IconContext.Provider value={iconListStyle}>
                <ul className='contact-list-ul'>
                  <li className='contact-list-li'>
                    <a href='https://www.google.com.uy/maps/place/Cam.+Gral.+Servando+G%C3%B3mez+2444,+12100+Montevideo,+Departamento+de+Montevideo/@-34.860815,-56.0648027,17z/data=!3m1!4b1!4m5!3m4!1s0x959f87ac17e1649d:0x908c2dbb7dc6ebdc!8m2!3d-34.8608194!4d-56.062614?hl=es-419'
                         target='_blank' className='anchor-list' rel='noreferrer'>
                    <span >
                    <SiGooglemaps />
                    </span>
                    <span className='contact-list-span-text'>
                    Cno. Servando Gómez 2444-2446,
                    13000,<br></br> Carrasco Norte, Montevideo, Uruguay
                    </span>
                    </a>
                  </li>
                  <li className='contact-list-li'>
                    <a href='https://web.whatsapp.com/' target='_blank' className='anchor-list'  rel='noreferrer'>
                    <span>
                    <IoLogoWhatsapp/>
                    </span>
                    <span className='contact-list-span-text'>
                    +598 091 359 563
                    </span>
                    </a>
                  </li>
                  <li className='contact-list-li'>
                    <a href='https://www.google.com/intl/es/gmail/about/' target='_blank' className='anchor-list'  rel='noreferrer'>
                    <span>
                    <IoMdMail/>
                    </span>
                    <span className='contact-list-span-text'>
                    leonardopuchetta21@gmail.com
                    </span>
                    </a>
                  </li>
                </ul>
              </IconContext.Provider>
            </div>
            <div className='footer-inferior-right'>Copyright © 2022 El Vivero – 
              Todos los derechos reservados.<br></br> Diseño y Desarrollo : Leonardo Puchetta
            </div>
        </div>
    </div>
  )
}
