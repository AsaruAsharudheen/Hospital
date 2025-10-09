import { useEffect } from 'react';
import FooterSection from '../../Components/Footer/footer';
import './service.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Service = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to check scroll position and update state
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      // Show the button after scrolling down 400px
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll('.service-page-animate');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, [showScroll]);

  return (
    <>
      {/* Navbar */}
      <div className="Contact-page-navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/logo-black.webp" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="Contact-page-menus-navbar">
          <p onClick={() => navigate('/')}>Home</p>
          <p onClick={() => navigate('/service')}>Services</p>
          <p onClick={() => navigate('/dentist')}>Dentists</p>
          <p>Blog</p>
          <p onClick={() => navigate('/contact')}>Contact</p>
        </div>

        {/* Desktop Button */}
        <div className="Contact-page-button-nav">
          <button>Book Appointments</button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <span className="close-icon" onClick={() => setMenuOpen(false)}>
              &times;
            </span>
            <p onClick={() => navigate('/')}>Home</p>
            <p onClick={() => navigate('/service')}>Services</p>
            <p onClick={() => navigate('/dentist')}>Dentists</p>
            <p>Blog</p>
            <p onClick={() => navigate('/contact')}>Contact</p>
            <button>Book Appointments</button>
          </div>
        </div>
      )}

      {/* Page Title */}
      <div className="service-page service-page-animate zoom-in">
        <h1>Our Services</h1>
        <div className="paths">
          <p
            onClick={() => {
              navigate('/');
            }}
            style={{ color: '#9eaab9' }}
          >
            Home
          </p>
          <i className="fa-solid fa-greater-than"></i>
          <p>Our Service</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="service-page-service-boxes">
        <div className="first-service-page-box service-page-animate fade-up">
          <img src="/tooth-1.png" alt="" />
          <h4>Restorative Dentistry</h4>
          <p>Repair and restore your teeth for lasting comfort and function.</p>
          <div className="hover-action">
            <button className="expand-btn">
              <i className="fa-solid fa-plus"></i>
              <span className="btn-text">Read more</span>
            </button>
          </div>
        </div>

        <div className="first-service-page-box service-page-animate fade-up">
          <img src="/tooth-1.png" alt="" />
          <h4>Cosmetic Dentistry</h4>
          <p>Enhance your smile with whitening, veneers, and more.</p>
          <div className="hover-action">
            <button className="expand-btn">
              <i className="fa-solid fa-plus"></i>
              <span className="btn-text">Read more</span>
            </button>
          </div>
        </div>

        <div className="first-service-page-image service-page-animate fade-right">
          <img src="/p1.webp" alt="" />
        </div>

        <div className="first-service-page-box service-page-animate fade-up">
          <img src="/tooth-1.png" alt="" />
          <h4>Preventive Care</h4>
          <p>Protect your teeth and gums with regular checkups.</p>
          <div className="hover-action">
            <button className="expand-btn">
              <i className="fa-solid fa-plus"></i>
              <span className="btn-text">Read more</span>
            </button>
          </div>
        </div>

        <div className="first-service-page-box service-page-animate fade-up">
          <img src="/tooth-1.png" alt="" />
          <h4>Pediatric Dentistry</h4>
          <p>Gentle care tailored for kids and growing smiles.</p>
          <div className="hover-action">
            <button className="expand-btn">
              <i className="fa-solid fa-plus"></i>
              <span className="btn-text">Read more</span>
            </button>
          </div>
        </div>

        <div className="first-service-page-image service-page-animate fade-left">
          <img src="/p1.webp" alt="" />
        </div>

        <div className="first-service-page-box service-page-animate fade-up">
          <img src="/tooth-1.png" alt="" />
          <h4>Orthodontics</h4>
          <p>Straighten your teeth with modern braces and aligners.</p>
          <div className="hover-action">
            <button className="expand-btn">
              <i className="fa-solid fa-plus"></i>
              <span className="btn-text">Read more</span>
            </button>
          </div>
        </div>

        <div className="first-service-page-box service-page-animate fade-up">
          <img src="/tooth-1.png" alt="" />
          <h4>Oral Surgery</h4>
          <p>Expert surgical solutions for complex dental needs.</p>
          <div className="hover-action">
            <button className="expand-btn">
              <i className="fa-solid fa-plus"></i>
              <span className="btn-text">Read more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
      {showScroll && (
        <div
          className={`scroll-to-top ${showScroll ? 'show-scroll' : ''}`}
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default Service;
