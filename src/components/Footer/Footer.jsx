import React from 'react';
import './Footer.css';
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <div className="footer-About">
            <div className="footer-About-item">
              <AiOutlinePhone className="footer-About-icon" />
              <span>+34 925 178 639</span>
            </div>
            <div className="footer-About-item">
              <AiOutlineMail className="footer-About-icon" />
              <span>info@vistainteriors.es</span>
            </div>
            <div className="footer-About-item">
              <AiOutlineHome className="footer-About-icon" />
              <span>
                Carretera Villacañas, S/N, 45840 La Puebla de Almoradiel, Spain
              </span>

            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social">
            <a href="#" className="footer-social-link">
              <FaFacebookF className="footer-social-icon" />
            </a>
            <a href="#" className="footer-social-link">
              <FaTwitter className="footer-social-icon" />
            </a>
            <a href="#" className="footer-social-link">
              <FaInstagram className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
