
import React, { useEffect } from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {

    useEffect(() => { const handleScroll = () => { 
                          const footer = document.querySelector('.footer'); 
                          footer.style.top = `${window.innerHeight / 2 + window.scrollY-190}px`; }; 
                          window.addEventListener('scroll', handleScroll); handleScroll(); 
                          return () => { 
                              window.removeEventListener('scroll', handleScroll); 
                            }; }, []);

    return (
        <ul class="footer">
          <li className='social-icon'>
          <a href="https://www.linkedin.com/in/bharath9901/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </li>
          <li className='social-icon'>
          <a href="https://github.com/bharathganiga1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </li>
          <li className='social-icon'>
            <a href="https://www.instagram.com/__im_bharathh_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </li>
          <li className='social-icon'>
            <a href="mailto:bharathganiga2002@gmail.com"><FaEnvelope /></a>
          </li>
        </ul>
    );
}

export default Footer;
