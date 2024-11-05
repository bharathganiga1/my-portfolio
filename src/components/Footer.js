
import React, { useEffect } from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {

    useEffect(() => { const handleScroll = () => { const footer = document.querySelector('.footer'); footer.style.top = `${window.innerHeight / 2 + window.scrollY-190}px`; }; window.addEventListener('scroll', handleScroll); handleScroll(); return () => { window.removeEventListener('scroll', handleScroll); }; }, []);

    return (
        <div className="footer">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/bharath9901/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/bharathganiga1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/__im_bharathh_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <div className="social-icon">
                <a href="mailto:bharathganiga2002@gmail.com"><FaEnvelope /></a>
            </div>
        </div>
    );
}

export default Footer;
