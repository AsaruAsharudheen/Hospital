import React, { useState } from 'react';
import './homNav.css';
// Assuming 'navigate' is available (e.g., from 'react-router-dom')
import { useNavigate } from 'react-router-dom';


const HomeNavbar = () => {
  // Assume 'navigate' is passed as prop or imported
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation and close the menu
  const handleNavigation = path => {
    // navigate(path); // Uncomment this when integrated
    setMenuOpen(false);
  };

  return (
    <>
      {/* --- Main Navbar (Home Page - Dark Background) --- */}
      <div className="navbar">
        <div className="logo">
          <img src="/LogoforWebsite.png" alt="Logo" />
        </div>

        {/* Desktop Menu (Hidden on Mobile via CSS) */}
        <div className="menus-navbar">
          <p onClick={() => navigate('/')}>Home</p>
          <p onClick={() => navigate('/service')}>Services</p>
          <p onClick={() => navigate('/dentist')}>Dentists</p>
          <p onClick={() => navigate('/blog')}>Blog</p>
          <p onClick={() => navigate('/contact')}>Contact</p>
        </div>

        {/* Desktop Button Group (Button Hidden on Mobile via CSS) */}
        <div className="button-nav">
          <button>Book Appointments</button>
          {/* Mobile Toggle Icon */}
          <i
            className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>
      </div>

      {/* --- Mobile Menu Modal (Conditionally Rendered) --- */}
      {menuOpen && (
        <div className="mobile-menu-overlay-home">
          {' '}
          {/* Using a unique overlay class */}
          <div className="mobile-menu-home">
            {' '}
            {/* Using a unique menu class */}
            {/* Logo inside the modal (Optional) */}
            {/* <div className="mobile-menu-logo-home">
            
              <img src="/LogoforWebsite.png" alt="Logo" />
            </div> */}
            <p onClick={() => navigate('/')}>Home</p>
            <p onClick={() => navigate('/service')}>Services</p>
            <p onClick={() => navigate('/dentist')}>Dentists</p>
            <p onClick={() => navigate('/blog')}>Blog</p>
            <p onClick={() => navigate('/contact')}>Contact</p>
            <button className="mobile-book-btn-home">Book Appointments</button>
          </div>
        </div>
      )}
    </>
  );
};
export default HomeNavbar;









