import { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Resume download handler - update the path to your actual resume file
  const handleResumeDownload = () => {
    // Option 1: If resume is in public folder, use this:
    const link = document.createElement('a');
    link.href = '/AkshattKain_Resume.pdf'; // Place your PDF in the public folder
    link.download = 'AkshattKain_Resume.pdf';
    link.click();
    
    // Option 2: If using external URL (Google Drive, Dropbox, etc.):
    // window.open('YOUR_RESUME_URL', '_blank');
  };

  return (
    <div style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      background: 'linear-gradient(180deg, #faf9f7 0%, #f5f3f0 50%, #faf9f7 100%)',
      color: '#2a2a2a',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Subtle Texture Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.02,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        zIndex: 1000
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrollY > 50 ? 'rgba(250, 249, 247, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: scrollY > 50 ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent'
      }}>
        <div style={{
          fontSize: '14px',
          letterSpacing: '3px',
          fontWeight: 300,
          color: '#8b7355',
          fontFamily: "'Inter', -apple-system, sans-serif"
        }}>
          AKSHATT KAIN
        </div>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                fontSize: '12px',
                letterSpacing: '2px',
                cursor: 'pointer',
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: 400,
                transition: 'color 0.3s ease',
                padding: '8px 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8b7355'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              {item.toUpperCase()}
            </button>
          ))}
          {/* Resume Download Button in Nav */}
          <button
            onClick={handleResumeDownload}
            style={{
              background: 'none',
              border: '1px solid #8b7355',
              color: '#8b7355',
              fontSize: '11px',
              letterSpacing: '2px',
              cursor: 'pointer',
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 400,
              transition: 'all 0.3s ease',
              padding: '10px 20px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#8b7355';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.color = '#8b7355';
            }}
          >
            RESUME ↓
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 48px 80px'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 115, 85, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(70, 100, 130, 0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />

        <div style={{
          maxWidth: '1300px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'center',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {/* Photo Section */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
          }}>
            {/* Decorative frame behind photo */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-45%)',
              width: '340px',
              height: '420px',
              border: '1px solid rgba(139, 115, 85, 0.2)',
              zIndex: 0
            }} />
            
            {/* Photo container */}
            <div style={{
              position: 'relative',
              width: '320px',
              height: '400px',
              background: 'linear-gradient(145deg, #e8e4df 0%, #d4cfc8 100%)',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: '0 25px 80px rgba(0,0,0,0.12)'
            }}>
              { <img 
                src="./aks.jpeg" 
                alt="Akshatt Kain"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              /> }
              
              {/* Placeholder - remove this when you add your photo */}
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8b7355',
                fontFamily: "'Inter', -apple-system, sans-serif"
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span style={{ 
                  marginTop: '16px', 
                  fontSize: '11px', 
                  letterSpacing: '2px',
                  opacity: 0.7
                }}>
                  YOUR PHOTO
                </span>
                <span style={{ 
                  marginTop: '8px', 
                  fontSize: '10px', 
                  letterSpacing: '1px',
                  opacity: 0.5,
                  textAlign: 'center',
                  padding: '0 20px'
                }}>
                  Add image to public folder
                </span>
              </div>
            </div>

            {/* Accent decoration */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '15%',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(139, 115, 85, 0.15) 0%, rgba(139, 115, 85, 0.05) 100%)',
              zIndex: 0
            }} />
          </div>

          {/* Text Content */}
          <div>
            <p style={{
              fontSize: '12px',
              letterSpacing: '4px',
              color: '#8b7355',
              marginBottom: '24px',
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 400
            }}>
              APPLIED AI ENGINEER & RESEARCHER
            </p>
            <h1 style={{
              fontSize: 'clamp(42px, 6vw, 80px)',
              fontWeight: 300,
              lineHeight: 1.1,
              margin: '0 0 32px 0',
              letterSpacing: '-2px',
              color: '#1a1a1a'
            }}>
              Building Intelligent
              <br />
              <span style={{ 
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #8b7355 0%, #a89070 50%, #8b7355 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Systems
              </span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '500px',
              margin: '0 0 40px 0',
              lineHeight: 1.9,
              fontWeight: 300
            }}>
              Crafting interpretable machine learning and GenAI systems 
              for healthcare and resource-constrained deployments
            </p>
            
            {/* Quick stats */}
            <div style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '40px',
              paddingBottom: '32px',
              borderBottom: '1px solid rgba(0,0,0,0.08)'
            }}>
              <div>
                <div style={{ 
                  fontSize: '28px', 
                  color: '#8b7355',
                  fontWeight: 300,
                  marginBottom: '4px'
                }}>NEU</div>
                <div style={{ 
                  fontSize: '10px', 
                  letterSpacing: '2px', 
                  color: '#888',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>MS IN AI</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '28px', 
                  color: '#8b7355',
                  fontWeight: 300,
                  marginBottom: '4px'
                }}>4+</div>
                <div style={{ 
                  fontSize: '10px', 
                  letterSpacing: '2px', 
                  color: '#888',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>PROJECTS</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '28px', 
                  color: '#8b7355',
                  fontWeight: 300,
                  marginBottom: '4px'
                }}>150+</div>
                <div style={{ 
                  fontSize: '10px', 
                  letterSpacing: '2px', 
                  color: '#888',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>STUDENTS LED</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollToSection('projects')}
                style={{
                  background: '#8b7355',
                  border: 'none',
                  color: '#fff',
                  padding: '16px 40px',
                  fontSize: '12px',
                  letterSpacing: '3px',
                  cursor: 'pointer',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#6d5a43';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#8b7355';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                VIEW PROJECTS
              </button>
              <button
                onClick={handleResumeDownload}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(139, 115, 85, 0.4)',
                  color: '#8b7355',
                  padding: '16px 40px',
                  fontSize: '12px',
                  letterSpacing: '3px',
                  cursor: 'pointer',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(139, 115, 85, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                }}
              >
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: 0.5
        }}>
          <span style={{ 
            fontSize: '10px', 
            letterSpacing: '2px',
            fontFamily: "'Inter', -apple-system, sans-serif",
            color: '#888'
          }}>SCROLL</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, #8b7355 0%, transparent 100%)',
            animation: 'scrollPulse 2s ease-in-out infinite'
          }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 48px',
        position: 'relative',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <p style={{
              fontSize: '12px',
              letterSpacing: '4px',
              color: '#8b7355',
              marginBottom: '24px',
              fontFamily: "'Inter', -apple-system, sans-serif"
            }}>
              ABOUT
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 300,
              lineHeight: 1.2,
              margin: '0 0 24px 0',
              color: '#1a1a1a'
            }}>
              Bridging Research
              <br />
              <span style={{ fontStyle: 'italic', color: '#8b7355' }}>& Application</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: '18px',
              lineHeight: 2,
              color: '#555',
              marginBottom: '32px',
              fontWeight: 300
            }}>
              Currently pursuing a Master of Science in Artificial Intelligence at 
              Northeastern University's Khoury College of Computer Sciences. My work 
              focuses on building interpretable ML systems that can be deployed in 
              real-world settings—particularly in healthcare where transparency isn't 
              just preferred, it's essential.
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: 2,
              color: '#555',
              fontWeight: 300
            }}>
              With experience spanning tree-based models, deep learning, and RAG systems, 
              I prioritize data quality, evaluation rigor, and deployment-aware design. 
              Previously led 150+ students in AI education initiatives at VIT India.
            </p>
            <div style={{
              display: 'flex',
              gap: '48px',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(0,0,0,0.08)'
            }}>
              <div>
                <div style={{ 
                  fontSize: '36px', 
                  color: '#8b7355',
                  fontWeight: 300,
                  marginBottom: '8px'
                }}>MS</div>
                <div style={{ 
                  fontSize: '11px', 
                  letterSpacing: '2px', 
                  color: '#888',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>AI @ NEU</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '36px', 
                  color: '#8b7355',
                  fontWeight: 300,
                  marginBottom: '8px'
                }}>BTech</div>
                <div style={{ 
                  fontSize: '11px', 
                  letterSpacing: '2px', 
                  color: '#888',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>CS @ VIT</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '36px', 
                  color: '#8b7355',
                  fontWeight: 300,
                  marginBottom: '8px'
                }}>150+</div>
                <div style={{ 
                  fontSize: '11px', 
                  letterSpacing: '2px', 
                  color: '#888',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>STUDENTS LED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        minHeight: '100vh',
        padding: '120px 48px',
        position: 'relative',
        background: '#faf9f7'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '12px',
              letterSpacing: '4px',
              color: '#8b7355',
              marginBottom: '24px',
              fontFamily: "'Inter', -apple-system, sans-serif"
            }}>
              SELECTED WORK
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 300,
              margin: 0,
              color: '#1a1a1a'
            }}>
              Featured <span style={{ fontStyle: 'italic', color: '#8b7355' }}>Projects</span>
            </h2>
          </div>

          {/* Project 1: Alzheimer's */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            marginBottom: '2px',
            minHeight: '600px',
            boxShadow: '0 4px 60px rgba(0,0,0,0.06)'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Neural Network Visualization */}
              <svg style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                opacity: 0.1
              }}>
                <defs>
                  <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c9a87c" />
                    <stop offset="100%" stopColor="#648cb4" />
                  </linearGradient>
                </defs>
                {/* Network nodes */}
                {[...Array(5)].map((_, i) => (
                  <g key={`layer1-${i}`}>
                    <circle cx="80" cy={80 + i * 60} r="8" fill="url(#nodeGrad)" />
                    <circle cx="200" cy={100 + i * 50} r="8" fill="url(#nodeGrad)" />
                    <circle cx="320" cy={120 + i * 40} r="8" fill="url(#nodeGrad)" />
                  </g>
                ))}
                {/* Connections */}
                {[...Array(5)].map((_, i) => (
                  [...Array(5)].map((_, j) => (
                    <line 
                      key={`line-${i}-${j}`}
                      x1="80" y1={80 + i * 60} 
                      x2="200" y2={100 + j * 50}
                      stroke="url(#nodeGrad)" 
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))
                ))}
              </svg>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '3px',
                  color: '#c9a87c',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  display: 'block',
                  marginBottom: '24px'
                }}>
                  01 — HEALTHCARE ML
                </span>
                <h3 style={{
                  fontSize: '36px',
                  fontWeight: 300,
                  margin: '0 0 24px 0',
                  lineHeight: 1.3,
                  color: '#fff'
                }}>
                  Explainable ML for
                  <br />
                  <span style={{ fontStyle: 'italic', color: '#c9a87c' }}>
                    Alzheimer's Disease
                  </span>
                  <br />
                  Stage Classification
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.9,
                  marginBottom: '32px'
                }}>
                  Built an interpretable multiclass classifier distinguishing Control, 
                  MCI, and Alzheimer's Disease using blood gene expression data from 
                  1,209 samples across multiple public datasets.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {['XGBoost', 'SHAP', 'ComBat', 'Gene Expression'].map((tag) => (
                    <span key={tag} style={{
                      padding: '8px 16px',
                      border: '1px solid rgba(201, 168, 124, 0.3)',
                      fontSize: '10px',
                      letterSpacing: '1px',
                      color: '#c9a87c',
                      fontFamily: "'Inter', -apple-system, sans-serif"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{
              background: '#fff',
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '64px',
                    fontWeight: 200,
                    color: '#8b7355'
                  }}>+24.6%</span>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  letterSpacing: '1px',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>
                  Improvement in macro-F1 after ComBat batch correction
                </p>
              </div>
              <div style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                paddingTop: '32px'
              }}>
                <h4 style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#888',
                  marginBottom: '24px',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>
                  KEY ACHIEVEMENTS
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Corrected severe cross-dataset batch effects preventing dataset-leakage-driven learning',
                    'Benchmarked 5 models—XGBoost achieved best: 68.6% accuracy, 0.685 macro-F1',
                    'SHAP-based explainability for transparent clinical decision support',
                    'Gene-count ablation studies for non-invasive deployment'
                  ].map((item, i) => (
                    <li key={i} style={{
                      fontSize: '14px',
                      color: '#555',
                      lineHeight: 1.8,
                      paddingLeft: '20px',
                      position: 'relative',
                      marginBottom: '12px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#8b7355'
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Project 2: RAG */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            minHeight: '600px',
            boxShadow: '0 4px 60px rgba(0,0,0,0.06)'
          }}>
            <div style={{
              background: '#fff',
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              order: 1
            }}>
              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '64px',
                    fontWeight: 200,
                    color: '#466482'
                  }}>2.8×</span>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  letterSpacing: '1px',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>
                  Less memory with equivalent F1 performance
                </p>
              </div>
              <div style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                paddingTop: '32px'
              }}>
                <h4 style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#888',
                  marginBottom: '24px',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>
                  KEY FINDINGS
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    '1B model + RAG matched 8B model F1 (0.261) on balanced datasets',
                    '2× faster inference with smaller model + retrieval augmentation',
                    'Identified class imbalance (99.55% normal) as fundamental failure mode',
                    'Established deployment efficiency frontier for production GenAI'
                  ].map((item, i) => (
                    <li key={i} style={{
                      fontSize: '14px',
                      color: '#555',
                      lineHeight: 1.8,
                      paddingLeft: '20px',
                      position: 'relative',
                      marginBottom: '12px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#466482'
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #1e3a4c 0%, #162a38 100%)',
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              order: 2
            }}>
              {/* Document/Log Visualization */}
              <svg style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
                opacity: 0.15
              }}>
                {[...Array(8)].map((_, i) => (
                  <g key={i}>
                    <rect 
                      x={40 + (i % 3) * 100} 
                      y={50 + Math.floor(i / 3) * 100}
                      width="80" 
                      height="60" 
                      fill="none" 
                      stroke="#648cb4"
                      strokeWidth="1"
                      rx="4"
                    />
                    <line 
                      x1={50 + (i % 3) * 100} 
                      y1={70 + Math.floor(i / 3) * 100}
                      x2={100 + (i % 3) * 100}
                      y2={70 + Math.floor(i / 3) * 100}
                      stroke="#648cb4"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                    <line 
                      x1={50 + (i % 3) * 100} 
                      y1={85 + Math.floor(i / 3) * 100}
                      x2={90 + (i % 3) * 100}
                      y2={85 + Math.floor(i / 3) * 100}
                      stroke="#648cb4"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </g>
                ))}
              </svg>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '3px',
                  color: '#7ba3c4',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  display: 'block',
                  marginBottom: '24px'
                }}>
                  02 — GENAI SYSTEMS
                </span>
                <h3 style={{
                  fontSize: '36px',
                  fontWeight: 300,
                  margin: '0 0 24px 0',
                  lineHeight: 1.3,
                  color: '#fff'
                }}>
                  Log Anomaly Detection
                  <br />
                  using <span style={{ fontStyle: 'italic', color: '#7ba3c4' }}>
                    Retrieval-Augmented
                  </span>
                  <br />
                  Generation
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.9,
                  marginBottom: '32px'
                }}>
                  Evaluated small (1B, 3B) and large (8B) language models with and 
                  without RAG for log anomaly detection across HDFS, BGL, and 
                  Zookeeper production datasets.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {['RAG', 'LLMs', 'Anomaly Detection', 'MLOps'].map((tag) => (
                    <span key={tag} style={{
                      padding: '8px 16px',
                      border: '1px solid rgba(123, 163, 196, 0.3)',
                      fontSize: '10px',
                      letterSpacing: '1px',
                      color: '#7ba3c4',
                      fontFamily: "'Inter', -apple-system, sans-serif"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        minHeight: '80vh',
        padding: '120px 48px',
        background: '#fff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '12px',
              letterSpacing: '4px',
              color: '#8b7355',
              marginBottom: '24px',
              fontFamily: "'Inter', -apple-system, sans-serif"
            }}>
              EXPERTISE
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 300,
              margin: 0,
              color: '#1a1a1a'
            }}>
              Technical <span style={{ fontStyle: 'italic', color: '#8b7355' }}>Stack</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {[
              {
                title: 'Languages',
                items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL']
              },
              {
                title: 'ML / DL',
                items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'SHAP']
              },
              {
                title: 'NLP',
                items: ['Transformers', 'TF-IDF', 'RAG', 'Few-Shot Learning']
              },
              {
                title: 'Infrastructure',
                items: ['Docker', 'AWS (EC2, S3)', 'Git', 'MongoDB', 'MySQL']
              }
            ].map((category, idx) => (
              <div key={idx} style={{
                padding: '40px',
                background: '#faf9f7',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#faf9f7';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <h3 style={{
                  fontSize: '11px',
                  letterSpacing: '3px',
                  color: '#8b7355',
                  marginBottom: '24px',
                  fontFamily: "'Inter', -apple-system, sans-serif"
                }}>
                  {category.title.toUpperCase()}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{
                      fontSize: '15px',
                      color: '#555',
                      marginBottom: '12px',
                      paddingBottom: '12px',
                      borderBottom: '1px solid rgba(0,0,0,0.06)'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        minHeight: '60vh',
        padding: '120px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: '#faf9f7'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 115, 85, 0.3) 50%, transparent 100%)'
        }} />
        
        <div style={{ textAlign: 'center', maxWidth: '700px' }}>
          <p style={{
            fontSize: '12px',
            letterSpacing: '4px',
            color: '#8b7355',
            marginBottom: '24px',
            fontFamily: "'Inter', -apple-system, sans-serif"
          }}>
            GET IN TOUCH
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 300,
            margin: '0 0 32px 0',
            lineHeight: 1.3,
            color: '#1a1a1a'
          }}>
            Let's Build Something
            <br />
            <span style={{ fontStyle: 'italic', color: '#8b7355' }}>Meaningful</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '48px',
            lineHeight: 1.8
          }}>
            Currently open to research collaborations and full-time opportunities
            in applied AI and machine learning engineering.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            marginBottom: '48px'
          }}>
            <a 
              href="mailto:kain.a@northeastern.edu"
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '14px',
                letterSpacing: '1px',
                transition: 'color 0.3s ease',
                fontFamily: "'Inter', -apple-system, sans-serif"
              }}
              onMouseEnter={(e) => e.target.style.color = '#8b7355'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              kain.a@northeastern.edu
            </a>
            <span style={{ color: '#ccc' }}>|</span>
            <a 
              href="https://linkedin.com/in/akshatt-kain"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '14px',
                letterSpacing: '1px',
                transition: 'color 0.3s ease',
                fontFamily: "'Inter', -apple-system, sans-serif"
              }}
              onMouseEnter={(e) => e.target.style.color = '#8b7355'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              LinkedIn
            </a>
            <span style={{ color: '#ccc' }}>|</span>
            <span style={{
              color: '#666',
              fontSize: '14px',
              letterSpacing: '1px',
              fontFamily: "'Inter', -apple-system, sans-serif"
            }}>
              Brookline, MA
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="mailto:kain.a@northeastern.edu"
              style={{
                display: 'inline-block',
                background: '#8b7355',
                color: '#fff',
                padding: '18px 56px',
                fontSize: '12px',
                letterSpacing: '3px',
                textDecoration: 'none',
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: 500,
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#6d5a43';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#8b7355';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              SAY HELLO
            </a>
            <button
              onClick={handleResumeDownload}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                border: '1px solid #8b7355',
                color: '#8b7355',
                padding: '18px 56px',
                fontSize: '12px',
                letterSpacing: '3px',
                textDecoration: 'none',
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#8b7355';
                e.target.style.color = '#fff';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#8b7355';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff'
      }}>
        <span style={{
          fontSize: '12px',
          color: '#999',
          letterSpacing: '2px',
          fontFamily: "'Inter', -apple-system, sans-serif"
        }}>
          © 2025 AKSHATT KAIN
        </span>
        <span style={{
          fontSize: '12px',
          color: '#999',
          letterSpacing: '2px',
          fontFamily: "'Inter', -apple-system, sans-serif"
        }}>
          BUILT WITH PASSION
        </span>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; height: 60px; }
          50% { opacity: 1; height: 80px; }
        }
        
        ::selection {
          background: rgba(139, 115, 85, 0.3);
          color: #1a1a1a;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;