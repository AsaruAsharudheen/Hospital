import './dentist.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // 1. Import useState
import FooterSection from '../../Components/Footer/footer';

const Dentist = () => {
  const navigate = useNavigate();
  // 2. State to control the visibility of the scroll-to-top button
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
        <div className="Contact-page-logo">
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

      <div className="Dentist-page-service Dentist-page-animate zoom-in">
        <h1>Our Dentists</h1>
        <div className="Dentist-page-paths">
          <p onClick={() => navigate('/')} style={{ color: '#9eaab9' }}>
            Home
          </p>
          <i className="fa-solid fa-greater-than"></i>
          <p>Our Dentist</p>
        </div>
      </div>
      <div className="cards-dentist-page">
        <div className="first-card-dentist-page">
          <div className="left-card-dentist-page">
            <img src="/dentist1.webp" alt="" />
          </div>
          <div className="right-card-dentist-page">
            <div className="dentist-name">
              <h4 style={{ fontSize: '30px', fontWeight: '500' }}>
                Dr. Sarah Bennett
              </h4>
              <p style={{ color: '#4a7cd2', fontSize: '22px' }}>Lead Dentist</p>
            </div>
            <div className="dentist-qualification">
              <h4>Qualification</h4>
              <p>
                Doctor of Dental Surgery (DDS), New York University College of
                Dentistry
              </p>
            </div>
            <div className="dentist-certification">
              <h4>Certification</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Certified in Invisalign Provider
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Advanced Cardiac Life Support (ACLS)
              </p>
            </div>
            <div className="dentist-awards">
              <h4>Awards</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                “Top Dentist in Manhattan” – New York Dental Journal (2022)
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                American Academy of Cosmetic Dentistry Excellence Award (2021)
              </p>
            </div>
            <div className="Media-logos-dentist">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="first-card-dentist-page">
          <div className="left-card-dentist-page">
            <img src="/dentist2.webp" alt="" />
          </div>
          <div className="right-card-dentist-page">
            <div className="dentist-name">
              <h4 style={{ fontSize: '30px', fontWeight: '500' }}>
                Dr. Maya Lin
              </h4>
              <p style={{ color: '#4a7cd2', fontSize: '22px' }}>
                Cosmetic Dentist
              </p>
            </div>
            <div className="dentist-qualification">
              <h4>Qualification</h4>
              <p>
                Doctor of Medicine in Dentistry (DMD), University of
                Pennsylvania School of Dental Medicine
              </p>
            </div>
            <div className="dentist-certification">
              <h4>Certification</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Board Certified by the American Board of Periodontology
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Sedation Dentistry Certified
              </p>
            </div>
            <div className="dentist-awards">
              <h4>Awards</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Best Periodontist – Pennsylvania Dental Association (2023)
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Clinical Research Award – American Dental Association (2020)
              </p>
            </div>
            <div className="Media-logos-dentist">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>{' '}
        <div className="first-card-dentist-page">
          <div className="left-card-dentist-page">
            <img src="/Dentist3.webp" alt="" />
          </div>
          <div className="right-card-dentist-page">
            <div className="dentist-name">
              <h4 style={{ fontSize: '30px', fontWeight: '500' }}>
                Dr. Michael Reyes
              </h4>
              <p style={{ color: '#4a7cd2', fontSize: '22px' }}>
                Pediatric Specialist
              </p>
            </div>
            <div className="dentist-qualification">
              <h4>Qualification</h4>
              <p>
                Bachelor of Dental Surgery (BDS), University of Mumbai; Master
                of Dental Surgery (MDS) in Orthodontics
              </p>
            </div>
            <div className="dentist-certification">
              <h4>Certification</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Invisalign Platinum Provider
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Certified in Digital Smile Design
              </p>
            </div>
            <div className="dentist-awards">
              <h4>Awards</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                National Orthodontics Innovation Award (India, 2021)
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Excellence in Dental Practice – Indian Dental Association (2022)
              </p>
            </div>
            <div className="Media-logos-dentist">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>{' '}
        <div className="first-card-dentist-page">
          <div className="left-card-dentist-page">
            <img src="/Dentist4.webp" alt="" />
          </div>
          <div className="right-card-dentist-page">
            <div className="dentist-name">
              <h4 style={{ fontSize: '30px', fontWeight: '500' }}>
                Dr. James Carter
              </h4>
              <p style={{ color: '#4a7cd2', fontSize: '22px' }}>
                Dental Hygienist
              </p>
            </div>
            <div className="dentist-qualification">
              <h4>Qualification</h4>
              <p>DDS, University of Michigan; MS in Prosthodontics</p>
            </div>
            <div className="dentist-certification">
              <h4>Certification</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Board Certified Prosthodontist
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Laser Dentistry Certified (ALD)
              </p>
            </div>
            <div className="dentist-awards">
              <h4>Awards</h4>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                American College of Prosthodontists Educator of the Year (2020)
              </p>
              <p style={{ display: 'flex', gap: '10px' }}>
                {' '}
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                International Smile Makeover Award (2023)
              </p>
            </div>
            <div className="Media-logos-dentist">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
      {/* 4. Scroll-to-Top Button */}
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

export default Dentist;
