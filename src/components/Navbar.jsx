import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import SignUp from './SignUp';

const Navbar1 = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav style={{ backgroundColor: 'white', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: 0 }}>
        <li>
          <button
            onClick={() => handleLinkClick('home')}
            style={{ textDecoration: 'none', backgroundColor: activeSection === 'home' ? 'blue' : 'transparent', color: activeSection === 'home' ? 'white' : 'black', padding: '1rem', border: 'none' }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick('about')}
            style={{ textDecoration: 'none', backgroundColor: activeSection === 'about' ? 'blue' : 'transparent', color: activeSection === 'about' ? 'white' : 'black', padding: '1rem', border: 'none' }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick('SignUp')}
            style={{ textDecoration: 'none', backgroundColor: activeSection === 'services' ? 'blue' : 'transparent', color: activeSection === 'services' ? 'white' : 'yellow', padding: '1rem', border: 'none' }}
          >
            SignUp
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick('contact')}
            style={{ textDecoration: 'none', backgroundColor: activeSection === 'contact' ? 'blue' : 'transparent', color: activeSection === 'contact' ? 'white' : 'yellow', padding: '1rem', border: 'none' }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar1;
