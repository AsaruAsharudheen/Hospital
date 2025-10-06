import React, { useState, useRef } from 'react';
import './style.css';

// --- 1. Testimonial Data Array (Used for Mapping) ---
const testimonialData = [
  {
    id: 1,
    name: 'Bryan G.',
    img: '/client4.webp',
    comment:
      'From the moment I walked in, I felt at ease. The staff made me feel like family, and the care I received was exceptional. I’m so happy with my smile—thank you for everything!',
  },
  {
    id: 2,
    name: 'Michael S.',
    img: '/client3.webp',
    comment:
      "I've always been nervous about dental visits, but the staff made me feel completely comfortable. Their gentle care and attention to detail truly stand out.",
  },
    {
    id: 1,
    name: 'Bryan G.',
    img: '/client4.webp',
    comment:
      'From the moment I walked in, I felt at ease. The staff made me feel like family, and the care I received was exceptional. I’m so happy with my smile—thank you for everything!',
  },
  {
    id: 3,
    name: 'Robert L.',
    img: '/client 2.webp',
    comment:
      'My family and I have been coming here for years. The service is exceptional, and the team always goes the extra mile to make sure we’re happy and well taken care of.',
  },
    {
    id: 1,
    name: 'Bryan G.',
    img: '/client4.webp',
    comment:
      'From the moment I walked in, I felt at ease. The staff made me feel like family, and the care I received was exceptional. I’m so happy with my smile—thank you for everything!',
  },
  {
    id: 4,
    name: 'Jane H.',
    img: '/client.webp',
    comment:
      'I came in for a consultation and left with a huge boost of confidence. The results are amazing, and the entire team played a huge role in the experience.',
  },
  {
    id: 5,
    name: 'Alex T.',
    img: '/client.webp',
    comment:
      'Highly recommend! Professional, friendly, and they truly prioritize patient comfort and health. Best dental office I’ve ever visited.',
  },
    {
    id: 1,
    name: 'Bryan G.',
    img: '/client4.webp',
    comment:
      'From the moment I walked in, I felt at ease. The staff made me feel like family, and the care I received was exceptional. I’m so happy with my smile—thank you for everything!',
  },
  {
    id: 6,
    name: 'Sarah K.',
    img: '/client.webp',
    comment:
      'The atmosphere is calm and welcoming. The procedure was quick and painless. I won’t go anywhere else now.',
  },
    {
    id: 1,
    name: 'Bryan G.',
    img: '/client4.webp',
    comment:
      'From the moment I walked in, I felt at ease. The staff made me feel like family, and the care I received was exceptional. I’m so happy with my smile—thank you for everything!',
  },
];

const TestimonialsSection = () => {
  // 2. State to track which card is currently active/visible
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Ref to target the scrollable container in the DOM
  const clientBoxesRef = useRef(null);

  // 4. Function to scroll the container on dot click
  const handleDotClick = index => {
    setActiveIndex(index);

    if (clientBoxesRef.current) {
      const container = clientBoxesRef.current;

      // These values MUST match the CSS for accurate scrolling
      const CARD_WIDTH = 350; // CSS: flex: 0 0 350px
      const CARD_GAP = 30; // CSS: margin-right: 30px

      const scrollPosition = index * (CARD_WIDTH + CARD_GAP);

      // Scroll the container smoothly to the calculated position
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="Testimonials-page">
      {/* --- Section Header --- */}
      <p style={{ fontSize: '20px', color: '#4a7cd2', fontWeight: '600' }}>
        Testimonials
      </p>
      <h1>Our Happy Customers</h1>
      <p
        style={{
          fontSize: '22px',
          width: '950px',
          textAlign: 'center',
          color: '#b3bdca',
          lineHeight: '40px',
        }}
      >
        Join thousands of happy patients who trust us for gentle, expert care
        and beautiful smiles. Your perfect dental experience starts here!
      </p>

      {/* --- 5. Testimonial Boxes Container (Scrollable) --- */}
      {/* Attach the ref here */}
      <div className="Client-Boxes" ref={clientBoxesRef}>
        {testimonialData.map((client, index) => (
          <div className="first-client-box" key={client.id}>
            <div
              className="quote-icon"
              style={{
                fontSize: '40px',
                color: '#4a7cd2',
                marginBottom: '20px',
              }}
            >
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <img src={client.img} alt={client.name} />
            <h4>{client.name}</h4>
            <p className="customer-title">Customer</p>
            <p className="comments">{client.comment}</p>
          </div>
        ))}
      </div>

      {/* --- 6. Carousel Dots Controller --- */}
      <div
        className="carousel-dots"
        style={{ textAlign: 'center', padding: '20px 0 80px' }}
      >
        {testimonialData.map((_, index) => (
          <span
            key={index}
            // Use template literals to conditionally apply 'active' class
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            // Attach the click handler to move the carousel
            onClick={() => handleDotClick(index)}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              // The primary active/inactive colors are best handled by CSS classes,
              // but we'll keep them here for immediate testing visibility:
              backgroundColor: index === activeIndex ? '#4a7cd2' : '#d0d0d0',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
