import './home.css';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Counter from '../../Components/Counter';
import AccordionItem from '../../Components/AccordionItem';
import TestimonialsSection from '../../Components/Testimonials/testimonials';
import FooterSection from '../../Components/Footer/footer';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../../Components/HomeNavbar/homNav';

const Home = () => {
  const navigate = useNavigate();
  const faqData = [
    {
      id: 1,
      question: 'How often should I visit the dentist?',
      answer:
        'It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.',
    },
    {
      id: 2,
      question: 'What should I do in a dental emergency?',
      answer:
        'In a dental emergency, call our office immediately. If it is after hours, seek an emergency clinic or hospital if necessary.',
    },
    {
      id: 3,
      question: 'Do you offer services for kids?',
      answer:
        'Yes, we are a family-friendly clinic and provide comprehensive pediatric dental care, including checkups and preventative treatments.',
    },
    {
      id: 4,
      question: 'What are my options for replacing missing teeth?',
      answer:
        'We offer several options, including dental implants, bridges, and partial dentures. A consultation will determine the best solution for you.',
    },
    {
      id: 5,
      question: 'Is teeth whitening safe?',
      answer:
        'Professional teeth whitening performed by a dentist is safe and effective, minimizing risks compared to over-the-counter kits.',
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    // 1. Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    // Clean-up for Locomotive Scroll
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    // 2. Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add('animate');

            // Specific Staggered Logic for Doctor Cards
            if (target.classList.contains('Doctor-page_team-boxes')) {
              const cards = target.querySelectorAll('.Doctor-page_doctor-card');
              cards.forEach((card, index) => {
                card.classList.add('animate-stagger');
                card.style.transitionDelay = `${index * 150}ms`; // Increased delay for visual clarity
              });
            }
          } else {
            // Remove 'animate' class to reset the animation when scrolling away
            target.classList.remove('animate');

            // Resetting Staggered Cards
            if (target.classList.contains('Doctor-page_team-boxes')) {
              const cards = target.querySelectorAll('.Doctor-page_doctor-card');
              cards.forEach(card => {
                card.classList.remove('animate-stagger');
                card.style.transitionDelay = '0ms';
              });
            }
          }
        });
      },
      { threshold: 0.15 } // Adjusted threshold to 15% visibility for smoother triggering
    );

    // 3. Elements to Observe (A complete list of major sections)
    const elementsToObserve = [
      document.querySelector('.about-us-home-left'),
      document.querySelector('.right'),
      document.querySelector('.ourServices-page'),
      document.querySelector('.services-boxes'),
      document.querySelector('.patients-box-small'),
      document.querySelector('.left-our-dental-team'),
      document.querySelector('.right-our-dental-team'),
      document.querySelector('.Doctor-page_team-boxes'),
      // Also observing the title/subtitle section of the Doctor page
      document.querySelector('.Doctor-page_ourServices-section'),
    ].filter(el => el != null); // Filter out any null results

    // Start Observing
    elementsToObserve.forEach(el => observer.observe(el));

    // Clean-up on unmount
    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
    };
  }, []);
  useEffect(() => {
    const cards = document.querySelectorAll('.Doctor-page_doctor-card');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const index = [...cards].indexOf(card);

            // Apply staggered delay
            setTimeout(() => {
              card.classList.add('animate-stagger');
            }, index * 200);
          } else {
            // Reset when leaving viewport
            entry.target.classList.remove('animate-stagger');
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <div data-scroll-container ref={scrollRef}>
        <HomeNavbar />
        <div className="Home-page">
          <div className="overlay-image">
            <p>Family Dental Care</p>
            <h1>Elevating Smiles with Expert Care and a Gentle Touch</h1>
            <button>Book Appointment</button>
            <div className="rating">
              <p>Google Raiting</p>
              <p>5.0</p>
              <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
              <p>Based on 23k Reviews</p>
            </div>
          </div>
          <div className="image">
            <img
              src="/WhatsApp Image 2025-09-30 at 11.22.03_1bc278bc.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="details-home-page">
          <div className="phone detail-item-padded">
            <i className="fa-solid fa-phone"></i>
            <div className="phone-detail">
              <p className="detail-title">Need Dental Services?</p>
              <p className="detail-subtext">Call: +1 123 456 789</p>
            </div>
          </div>
          <div className="phone detail-item-padded">
            <i className="fa-solid fa-phone"></i>
            <div className="phone-detail">
              <p className="detail-title">Need Dental Services?</p>
              <p className="detail-subtext">Call: +1 123 456 789</p>
            </div>
          </div>
          <div className="phone detail-item-padded">
            <i className="fa-solid fa-phone"></i>
            <div className="phone-detail">
              <p className="detail-title">Need Dental Services?</p>
              <p className="detail-subtext">Call: +1 123 456 789</p>
            </div>
          </div>
        </div>
        <div className="about-us-home">
          <div className="about-us-home-left">
            <img style={{ marginTop: '220px' }} src="/p1.webp" alt="" />
            <img style={{ marginTop: '300px' }} src="/p2.webp" alt="" />
          </div>
          <div className="right">
            <p
              style={{
                fontSize: '22px',
                color: 'rgb(74,124,210)',
                fontWeight: '600',
              }}
            >
              About Us
            </p>
            <h1>Professionals and Personalized Dental Excellence</h1>
            <p className="right-main-p">
              We offer high-quality dental care tailored for the whole family.
              From routine checkups to advanced treatments, our compassionate
              team ensures your smile stays healthy and confident.
            </p>
            <div className="contents-aboutus">
              <h4>
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Personalized Treatment Plans
              </h4>
              <h4>
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                State-of-the-Art Technology
              </h4>
              <h4>
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Gentle Care for Kids and Adults
              </h4>
              <h4>
                <span>
                  <i style={{ color: '#4a7cd2' }} class="fa-solid fa-check"></i>
                </span>
                Flexible Appointment Scheduling
              </h4>
            </div>
            <button>Book Appointment</button>
          </div>
        </div>
        <div className="ourServices-page">
          {/* Replaced inline styles with classes */}
          <p className="pre-title text-primary">Our Services</p>
          <h1>Complete Care For Every Smile</h1>
          {/* Replaced inline styles with classes */}
          <p className="body-text services-intro-text">
            From routine cleanings to advanced restorations, we provide
            personalized dental solutions for patients of all ages.
          </p>
          <div className="services-boxes">
            {/* Note: All service boxes use the same class */}
            <div className="service-box">
              <img src="/tooth-1.png" alt="" />
              <h2>General Dentistry</h2>
              <p className="box-description">
                Complete oral care for every smile with cleanings, exams, and
                more.
              </p>
              <div className="hover-action">
                <button className="expand-btn">
                  <i className="fa-solid fa-plus"></i>
                  <span className="btn-text">Read more</span>
                </button>
              </div>
            </div>
            <div className="service-box">
              <img src="/tooth-1.png" alt="" />
              <h2>General Dentistry</h2>
              <p className="box-description">
                Complete oral care for every smile with cleanings, exams, and
                more.
              </p>
              <div className="hover-action">
                <button className="expand-btn">
                  <i className="fa-solid fa-plus"></i>
                  <span className="btn-text">Read more</span>
                </button>
              </div>
              {/* ... other three service boxes follow this structure ... */}
            </div>
            <div className="service-box">
              <img src="/tooth-1.png" alt="" />
              <h2>General Dentistry</h2>
              <p className="box-description">
                Complete oral care for every smile with cleanings, exams, and
                more.
              </p>
              <div className="hover-action">
                <button className="expand-btn">
                  <i className="fa-solid fa-plus"></i>
                  <span className="btn-text">Read more</span>
                </button>
              </div>
            </div>
            <div className="service-box">
              <img src="/tooth-1.png" alt="" />
              <h2>General Dentistry</h2>
              <p className="box-description">
                Complete oral care for every smile with cleanings, exams, and
                more.
              </p>
              <div className="hover-action">
                <button className="expand-btn">
                  <i className="fa-solid fa-plus"></i>
                  <span className="btn-text">Read more</span>
                </button>
              </div>
            </div>
          </div>
          <button className="view-btn">View All Services</button>
        </div>
        <div className="patients-box-small">
          <div className="first-patient-box">
            <Counter end={10000} />
            <p>Happy Patients</p>
          </div>{' '}
          <div className="first-patient-box">
            <Counter end={2500} />
            <p>Teeth Whitened</p>
          </div>{' '}
          <div className="first-patient-box">
            <Counter end={800} />
            <p>Dental Implants</p>
          </div>{' '}
          <div className="first-patient-box">
            <Counter end={15} />
            <p>Years of Exeperience</p>
          </div>
        </div>
        <div className="ourDental-team">
          <div className="left-our-dental-team">
            <p>Why Choose Our Dental Care</p>
            <h2>Exceptional Service With a Personal Touch</h2>
            <p
              style={{
                color: '#c9d0d7',
                lineHeight: '40px',
                fontSize: '20px',
                borderBottom: '1px solid gray',
                paddingBottom: '40px',
                width: '850px',
                fontWeight: '500',
              }}
            >
              Choosing the right dental provider matters. We combine expert
              care, advanced technology, and a warm atmosphere to ensure every
              visit is comfortable, efficient, and tailored to your unique
              needs.
            </p>
            <div className="steps-box-our-dental-team">
              <div className="steps-our-dental-team">
                <h4>Experienced Dental</h4>
                <p>
                  Skilled care backed by years of trusted dental experience.
                </p>
              </div>{' '}
              <div className="steps-our-dental-team">
                <h4>Advanced Technology</h4>
                <p>Modern tools ensure accurate and efficient treatments.</p>
              </div>{' '}
              <div className="steps-our-dental-team">
                <h4>Personalized Treatment</h4>
                <p>Custom care plans made to fit your smile and lifestyle.</p>
              </div>{' '}
              <div className="steps-our-dental-team">
                <h4>Family-Friendly</h4>
                <p>Welcoming space for kids, teens, adults, and seniors.</p>
              </div>
            </div>
          </div>
          <div class="right-our-dental-team">
            <div class="left-dental-pics">
              <img
                src="/s2.webp"
                alt="Patient receiving dental treatment"
                class="top-left-img"
                style={{ marginLeft: '90px', width: '300px' }}
              />
              <img
                src="/s3.webp"
                alt="Close-up of friendly dental team"
                class="bottom-left-img"
                style={{ marginTop: '25px' }}
              />
            </div>

            <img
              src="/p3.webp"
              alt="Happy patient giving a thumbs up"
              class="right-large-img"
            />
          </div>
        </div>
        <div className="Doctor-page_ourServices-section">
          <p
            style={{ fontSize: '20px', color: '#4a7cd2', fontWeight: '600' }}
            className="Doctor-page_heading-tag"
          >
            Meet Our Dental Team
          </p>
          <h1 className="Doctor-page_main-title">Committed to Your Smile</h1>
          <p
            style={{
              fontSize: '22px',
              width: '950px',
              textAlign: 'center',
              color: '#b3bdca',
              lineHeight: '40px',
            }}
            className="Doctor-page_subtitle"
          >
            Our experienced dental team is here to make every visit positive and
            personalized. With gentle hands and caring hearts.
          </p>
          <div className="Doctor-page_team-boxes">
            {/* Dr. Sarah Bennett: Lead Dentist */}
            <div className="Doctor-page_doctor-card">
              <img src="/1.webp" alt="Dr. Sarah Bennett, Lead Dentist" />
              <div className="Doctor-page_detail-box">
                <h4>Dr. Sarah Bennett</h4>
                <p>Lead Dentist</p>
              </div>
            </div>

            {/* Dr. Maya Lin: Cosmetic Dentist */}
            <div className="Doctor-page_doctor-card">
              <img src="/2.webp" alt="Dr. Maya Lin, Cosmetic Dentist" />
              <div className="Doctor-page_detail-box">
                <h4>Dr. Maya Lin</h4>
                <p>Cosmetic Dentist</p>
              </div>
            </div>

            {/* Dr. Michael Reyes: Pediatric Specialist */}
            <div className="Doctor-page_doctor-card">
              <img
                src="/3.webp"
                alt="Dr. Michael Reyes, Pediatric Specialist"
              />
              <div className="Doctor-page_detail-box">
                <h4>Dr. Michael Reyes</h4>
                <p>Pediatric Specialist</p>
              </div>
            </div>

            {/* Dr. James Carter: Dental Hygienist */}
            <div className="Doctor-page_doctor-card">
              <img src="/4.webp" alt="Dr. James Carter, Dental Hygienist" />
              <div className="Doctor-page_detail-box">
                <h4>Dr. James Carter</h4>
                <p>Dental Hygienist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="quesions-about-hospital">
          <div className="left-quesions-about-hospital">
            <p className="faq-pre-title text-primary">
              Everything You Need to Know
            </p>
            <h2 className="faq-main-title">Frequently Asked Questions</h2>
          </div>
          <div className="right-quesions-about-hospital">
            <div className="questions">
              {faqData.map(item => (
                <AccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
        <TestimonialsSection />
        <div className="Booking-div">
          <h3>Ready to book your dental care session?</h3>
          <button>Book Appointments</button>
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default Home;
