import './contact.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import FooterSection from '../../Components/Footer/footer';
const Contact = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

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
    // 3. Add scroll event listener
    window.addEventListener('scroll', checkScrollTop);

    // Intersection Observer for scroll animations
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

    const animatedElements = document.querySelectorAll('.Dentist-page-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      // Cleanup for both listeners
      window.removeEventListener('scroll', checkScrollTop);
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, [showScroll]); // Dependency on showScroll to ensure checkScrollTop works correctly

  return (
    <>
      <div className="Contact-page-navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/footer_logo_689996d86fda9.webp" alt="Logo" />
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

      {/* Contact Section */}
      <div className="Contact-page-service Contact-page-animate zoom-in">
        <h1>Contact Us</h1>
        <div className="Contact-page-paths">
          <p onClick={() => navigate('/')} style={{ color: '#9eaab9' }}>
            Home
          </p>
          <i className="fa-solid fa-angle-right"></i>
          <p>Contact</p>
        </div>
      </div>

      <div className="Contact-page-contents">
        <div className="left-contact-page">
          <p style={{ color: '#4a7cd2',fontSize:'20px' }}>Get In Touch</p>
          <h1>We are always ready to help you and answer your questions</h1>
          <p>
            Whether you have a question, a suggestion, or just want to say
            hello, this is the place to do it. Please fill out the form below
            with your details and message, and we'll get back to you as soon as
            possible.
          </p>
          <div className="address-contact-page">
            <div className="first">
              <h4>
                <span>
                  <i class="fa-solid fa-clock"></i>
                </span>
                We're Open
              </h4>
              <p>Monday - Friday 08.00 - 18.00</p>
            </div>{' '}
            <div className="first">
              <h4>
                {' '}
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Clinic Location
              </h4>
              <p>100 S Main St, New York, NY</p>
            </div>
            <div className="first">
              <h4>
                {' '}
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                Call Us Directly
              </h4>
              <p>+1 123 456 789</p>
            </div>
            <div className="first">
              <h4>
                {' '}
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                Send a Message
              </h4>
              <p>contact@dentiacare.com</p>
            </div>
          </div>
        </div>
        <div className="right-contact-page">
          <h3>Get In Touch</h3>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
          <textarea name="" id="" placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
      <FooterSection />
      <div
        className={`scroll-to-top ${showScroll ? 'show-scroll' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
};

export default Contact;
