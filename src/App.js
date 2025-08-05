import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Phone, Mail, Clock, Users, Award, ChevronRight, Menu, X, Send, CheckCircle } from 'lucide-react';

// Firebase configuration (using your provided config)
const firebaseConfig = {
  apiKey: "AIzaSyBRvZF3Ck8uJIM48Qsu-oYTZ9uQrkfl4Mo",
  authDomain: "pawcare-1156f.firebaseapp.com",
  projectId: "pawcare-1156f",
  storageBucket: "pawcare-1156f.firebasestorage.app",
  messagingSenderId: "97627840611",
  appId: "1:97627840611:web:3b00ea31fcae3602ced856",
  measurementId: "G-SN7NN6SL27"
};

// Mock Firebase functions for demonstration
const mockAddDoc = async (collection, data) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Document added to', collection, ':', data);
  return { id: Date.now().toString() };
};

const PawCareWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    timeAvailable: '',
    previousExperience: '',
    motivation: '',
    emergencyContact: '',
    skills: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        skills: checked 
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await mockAddDoc('volunteers', {
        ...formData,
        submittedAt: new Date().toISOString()
      });
      setFormSubmitted(true);
      
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          timeAvailable: '',
          previousExperience: '',
          motivation: '',
          emergencyContact: '',
          skills: []
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (section) => {
    setCurrentSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'volunteer'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    // Base styles
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    // Navigation
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      zIndex: 50
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem'
    },
    navLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#374151',
      transition: 'color 0.2s',
      borderBottom: '2px solid transparent'
    },
    navLinkActive: {
      color: '#ea580c',
      borderBottomColor: '#ea580c'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#374151'
    },
    mobileMenu: {
      display: 'block',
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '0.5rem'
    },
    // Hero section
    hero: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
      paddingTop: '4rem'
    },
    heroContent: {
      textAlign: 'center',
      padding: '5rem 0'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '2rem',
      maxWidth: '48rem',
      margin: '0 auto 2rem'
    },
    // Buttons
    btnPrimary: {
      backgroundColor: '#ea580c',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    btnSecondary: {
      border: '2px solid #ea580c',
      color: '#ea580c',
      backgroundColor: 'transparent',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    // Grid
    grid: {
      display: 'grid',
      gap: '1.5rem'
    },
    gridCols1: {
      gridTemplateColumns: '1fr'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    // Cards
    card: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s'
    },
    cardImage: {
      width: '100%',
      height: '16rem',
      objectFit: 'cover',
      transition: 'transform 0.3s'
    },
    cardContent: {
      padding: '1.5rem'
    },
    // Form styles
    formContainer: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'border-color 0.2s, box-shadow 0.2s'
    },
    inputFocus: {
      borderColor: '#ea580c',
      boxShadow: '0 0 0 2px rgba(234, 88, 12, 0.2)'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      resize: 'vertical',
      minHeight: '6rem'
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      backgroundColor: 'white'
    },
    checkbox: {
      marginRight: '0.5rem'
    }
  };

  // Media queries for responsive design
  const mediaQueries = `
    @media (max-width: 768px) {
      .nav-links { display: none !important; }
      .mobile-menu-button { display: block !important; }
      .hero-title { font-size: 2rem !important; }
      .grid-responsive { grid-template-columns: 1fr !important; }
      .hero-buttons { flex-direction: column !important; }
    }
    
    .nav-link:hover { color: #ea580c; }
    .btn-primary:hover { background-color: #c2410c; }
    .btn-secondary:hover { background-color: #ea580c; color: white; }
    .card:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .card-image:hover { transform: scale(1.05); }
    .input:focus, .textarea:focus, .select:focus { 
      border-color: #ea580c; 
      box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.2);
      outline: none;
    }
  `;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <style>{mediaQueries}</style>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.navLogo}>
            <Heart style={{ height: '2rem', width: '2rem', color: '#ea580c' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>PawCare</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links" style={styles.navLinks}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'volunteer', label: 'Volunteer' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
                style={{
                  ...styles.navLink,
                  ...(currentSection === item.id ? styles.navLinkActive : {})
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button" style={styles.mobileMenuButton}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#374151', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {mobileMenuOpen ? <X style={{ height: '1.5rem', width: '1.5rem' }} /> : <Menu style={{ height: '1.5rem', width: '1.5rem' }} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'volunteer', label: 'Volunteer' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentSection === item.id ? '#ea580c' : '#374151',
                  backgroundColor: currentSection === item.id ? '#fff7ed' : 'transparent',
                  borderRadius: '0.5rem',
                  marginBottom: '0.25rem'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 className="hero-title" style={styles.heroTitle}>
              Saving Lives, One 
              <span style={{ color: '#ea580c' }}> Paw </span>
              at a Time
            </h1>
            <p style={styles.heroSubtitle}>
              Join PawCare in our mission to rescue, rehabilitate, and rehome stray cats and dogs. 
              Together, we can make a difference in their lives.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <button
                onClick={() => scrollToSection('volunteer')}
                className="btn-primary"
                style={styles.btnPrimary}
              >
                Become a Volunteer <ChevronRight style={{ height: '1.25rem', width: '1.25rem' }} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
                style={styles.btnSecondary}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols3, marginBottom: '3rem' }}>
            {[
              {
                url: "https://i.pinimg.com/1200x/70/e5/1b/70e51b3aef11e71f36031aa3624f5684.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Rescued puppy being cared for"
              },
              {
                url: "https://i.pinimg.com/736x/7e/0f/b6/7e0fb6ceea106d614bcd039b4c2e6cf6.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Cat being examined by veterinarian"
              },
              {
                url: "https://i.pinimg.com/1200x/29/5c/93/295c931e9fbee7dd2f0d5e8ae22ac8cb.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Happy rescued dogs"
              }
            ].map((image, index) => (
              <div key={index} style={styles.card} className="card">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="card-image"
                  style={styles.cardImage}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.3))' }}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols3, marginBottom: '10rem' }}>
            {[
              { icon: Heart, number: "2,500+", label: "Animals Rescued" },
              { icon: Users, number: "150+", label: "Active Volunteers" },
              { icon: Award, number: "95%", label: "Successful Adoptions" }
            ].map((stat, index) => (
              <div key={index} style={{ ...styles.card, textAlign: 'center', padding: '1.5rem' }}>
                <stat.icon style={{ height: '3rem', width: '3rem', color: '#ea580c', margin: '0 auto 1rem' }} />
                <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ color: '#4b5563', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ minHeight: '100vh', backgroundColor: 'white', padding: '5rem 0' }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>About PawCare</h2>
            <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Founded in 2018, PawCare has been at the forefront of animal rescue and rehabilitation, 
              creating a world where every stray animal has a chance at a loving home.
            </p>
          </div>

          <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols2, alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <img
                src="https://i.pinimg.com/736x/ed/bf/b1/edbfb15481e83d22791730852ee9052c.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Volunteer caring for rescued animals"
                style={{ borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', width: '100%', height: '24rem', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '1.5rem' }}>
                To rescue, rehabilitate, and rehome stray cats and dogs while promoting responsible 
                pet ownership and reducing the stray animal population through education and community engagement.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "24/7 emergency rescue operations",
                  "Comprehensive medical care and rehabilitation",
                  "Foster and adoption programs",
                  "Community education and awareness campaigns",
                  "Spay/neuter initiatives"
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle style={{ height: '1.25rem', width: '1.25rem', color: '#10b981', marginRight: '0.75rem' }} />
                    <span style={{ color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols3 }}>
            {[
              {
                title: "Rescue Operations",
                description: "Our dedicated team responds to calls 24/7, rescuing animals from dangerous situations and providing immediate medical attention.",
                image: "https://i.pinimg.com/1200x/a7/42/a0/a742a054338541a150f1b7a87358265b.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Medical Care",
                description: "Every rescued animal receives comprehensive veterinary care, including vaccinations, treatments, and surgical procedures when needed.",
                image: "https://i.pinimg.com/1200x/26/1d/e2/261de29fad4b8d4005c0c70da790406c.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Adoption Program",
                description: "We carefully match rescued animals with loving families, ensuring each pet finds their perfect forever home through our adoption process.",
                image: "https://scontent.fdel11-4.fna.fbcdn.net/v/t39.30808-6/317347853_6390615134287139_1662923164665887033_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2285d6&_nc_ohc=Hm8ex4V_dCUQ7kNvwF6tAXk&_nc_oc=Adm-Vf3vWJu96z_pCYjTsQomVgeq2BtdeHxID-jFeDDlfvV6gaLDBISH4ajowsfrGh5BAPYzPp8tXYHuaXTuRihP&_nc_zt=23&_nc_ht=scontent.fdel11-4.fna&_nc_gid=YsKoZTmpev4ZRvkyyd4W4A&oh=00_AfWR3kWwAM_K5r_nx9H-ABLYWWxfKI4-GK59Y_t8E_kxJA&oe=689744BF&auto=format&fit=crop&w=600&q=80"
              }
            ].map((program, index) => (
              <div key={index} style={{ ...styles.card, backgroundColor: '#f9fafb' }} className="card">
                <img
                  src={program.image}
                  alt={program.title}
                  style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
                />
                <div style={styles.cardContent}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.75rem' }}>{program.title}</h4>
                  <p style={{ color: '#4b5563' }}>{program.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: '#fff7ed', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Contact Information</h3>
            <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols3 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin style={{ height: '1.25rem', width: '1.25rem', color: '#ea580c', marginRight: '0.5rem' }} />
                <span style={{ color: '#374151' }}>123 Rescue Street, Delhi, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone style={{ height: '1.25rem', width: '1.25rem', color: '#ea580c', marginRight: '0.5rem' }} />
                <span style={{ color: '#374151' }}>+91-9876543210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail style={{ height: '1.25rem', width: '1.25rem', color: '#ea580c', marginRight: '0.5rem' }} />
                <span style={{ color: '#374151' }}>info@pawcare.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Join Our Team</h2>
            <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>
              Make a difference in the lives of stray animals. Fill out the form below to become a PawCare volunteer.
            </p>
          </div>

          {formSubmitted ? (
            <div style={{ ...styles.formContainer, padding: '2rem', textAlign: 'center' }}>
              <CheckCircle style={{ height: '4rem', width: '4rem', color: '#10b981', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Thank You!</h3>
              <p style={{ color: '#4b5563' }}>
                Your volunteer application has been submitted successfully. We'll contact you soon!
              </p>
            </div>
          ) : (
            <div style={styles.formContainer}>
              <div style={{ padding: '2rem' }}>
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols2, marginBottom: '1.5rem' }}>
                    <div>
                      <label style={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input"
                        style={styles.input}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label style={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input"
                        style={styles.input}
                        placeholder="your.email@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols2, marginBottom: '1.5rem' }}>
                    <div>
                      <label style={styles.label}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input"
                        style={styles.input}
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label style={styles.label}>Time Available *</label>
                      <select
                        name="timeAvailable"
                        required
                        value={formData.timeAvailable}
                        onChange={handleInputChange}
                        className="select"
                        style={styles.select}
                      >
                        <option value="">Select availability</option>
                        <option value="2-5 hours/week">2-5 hours per week</option>
                        <option value="5-10 hours/week">5-10 hours per week</option>
                        <option value="10-20 hours/week">10-20 hours per week</option>
                        <option value="20+ hours/week">20+ hours per week</option>
                        <option value="weekends-only">Weekends only</option>
                        <option value="flexible">Flexible schedule</option>
                      </select>
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Address *</label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="textarea"
                      style={styles.textarea}
                      placeholder="Enter your complete address"
                      rows="3"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Previous Experience with Animals</label>
                    <textarea
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleInputChange}
                      className="textarea"
                      style={styles.textarea}
                      placeholder="Describe any previous experience with animal care, volunteering, or rescue work..."
                      rows="3"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Emergency Contact *</label>
                    <input
                      type="text"
                      name="emergencyContact"
                      required
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="input"
                      style={styles.input}
                      placeholder="Name and phone number of emergency contact"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Skills & Interests (Select all that apply)</label>
                    <div className="grid-responsive" style={{ ...styles.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                      {[
                        'Animal handling',
                        'Medical assistance',
                        'Photography',
                        'Social media',
                        'Event planning',
                        'Fundraising',
                        'Transportation',
                        'Foster care',
                        'Administrative work'
                      ].map((skill) => (
                        <label key={skill} style={{ display: 'flex', alignItems: 'center' }}>
                          <input
                            type="checkbox"
                            value={skill}
                            checked={formData.skills.includes(skill)}
                            onChange={handleInputChange}
                            style={styles.checkbox}
                          />
                          <span style={{ fontSize: '0.875rem', color: '#374151' }}>{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Why do you want to volunteer with PawCare? *</label>
                    <textarea
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className="textarea"
                      style={styles.textarea}
                      placeholder="Tell us about your motivation and what you hope to contribute..."
                      rows="4"
                    />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{
                        ...styles.btnPrimary,
                        backgroundColor: isSubmitting ? '#9ca3af' : '#ea580c',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'} 
                      <Send style={{ height: '1.25rem', width: '1.25rem' }} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 0' }}>
        <div style={styles.container}>
          <div className="grid-responsive" style={{ ...styles.grid, ...styles.gridCols3, marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Heart style={{ height: '2rem', width: '2rem', color: '#ea580c' }} />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PawCare</span>
              </div>
              <p style={{ color: '#d1d5db' }}>
                Dedicated to rescuing, rehabilitating, and rehoming stray cats and dogs.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  onClick={() => scrollToSection('home')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#d1d5db', 
                    cursor: 'pointer', 
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#d1d5db', 
                    cursor: 'pointer', 
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('volunteer')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#d1d5db', 
                    cursor: 'pointer', 
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Volunteer
                </button>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#d1d5db' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MapPin style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
                  123 Rescue Street, Delhi, India
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Phone style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
                  +91-9876543210
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Mail style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
                  info@pawcare.org
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', color: '#d1d5db' }}>
            <p>&copy; 2025 PawCare. All rights reserved. Made with ❤️ for stray animals.</p>
            <p>Sneha Das</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PawCareWebsite;
