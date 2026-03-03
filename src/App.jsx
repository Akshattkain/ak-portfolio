import { useState, useEffect, useRef } from 'react'
import './App.css'
import aksPhoto from '/aks.jpeg'

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const sections = containerRef.current.querySelectorAll('.section')
      const scrollPos = window.scrollY + window.innerHeight / 2
      
      sections.forEach((section, index) => {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(index)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index) => {
    const sections = containerRef.current.querySelectorAll('.section')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`} ref={containerRef}>
      {/* Cursor glow effect */}
      <div 
        className="cursor-glow"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
        }}
      />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">AKSHATT KAIN</div>
        <div className="nav-links">
          {['Home', 'Work', 'Skills', 'About', 'Contact'].map((item, i) => (
            <button 
              key={i}
              className={`nav-link ${activeSection === i ? 'active' : ''}`}
              onClick={() => scrollToSection(i)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="nav-cta">
          <a href="mailto:kain.a@northeastern.edu" className="btn-cta">Let's Talk</a>
        </div>
      </nav>

      {/* Section Indicators */}
      <div className="section-indicators">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            className={`indicator ${activeSection === i ? 'active' : ''}`}
            onClick={() => scrollToSection(i)}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="section hero">
        <div className="hero-bg">
          <div className="grid-lines" />
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
        </div>
        
        <div className="hero-content">
          <div className="hero-label">AI/ML ENGINEER</div>
          <h1 className="hero-title">
            <span className="line">Building Intelligence</span>
            <span className="line">That <span className="highlight">Performs</span></span>
          </h1>
          <p className="hero-subtitle">
            Healthcare ML · LLM Agents · Computer Vision
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">1,200+</span>
              <span className="stat-label">Patient Samples Analyzed</span>
            </div>
            <div className="stat">
              <span className="stat-value">24.6%</span>
              <span className="stat-label">Accuracy Improvement</span>
            </div>
            <div className="stat">
              <span className="stat-value">2.8×</span>
              <span className="stat-label">Memory Optimization</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Work Section */}
      <section className="section work">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Selected Work</h2>
        </div>

        <div className="projects-showcase">
          <ProjectCard
            number="01"
            title="LLM Agent RAG System"
            subtitle="Log Anomaly Detection"
            description="Built an LLM-powered agent with RAG pipeline. Found that retrieval quality matters more than model scale. 1B model matched 8B accuracy."
            tags={['LangChain', 'RAG', 'Transformers']}
            metrics={[
              { value: '2.8×', label: 'Less Memory' },
              { value: '2×', label: 'Faster' }
            ]}
            link="https://github.com/Akshattkain/Log-Anomaly-Detection-with-RAG"
          />

          <ProjectCard
            number="02"
            title="Alzheimer's Classification"
            subtitle="Explainable Healthcare ML"
            description="Gene expression analysis across 1,200+ patients. Discovered batch effects silently breaking models. Fixed them."
            tags={['XGBoost', 'SHAP', 'Healthcare']}
            metrics={[
              { value: '+24.6%', label: 'F1 Score' },
              { value: '5', label: 'Models Tested' }
            ]}
            link="https://github.com/Akshattkain/ML-Course-Project"
          />

          <ProjectCard
            number="03"
            title="Ocular Disease Detection"
            subtitle="Medical Computer Vision"
            description="CNN pipeline for retinal image classification. Fine-tuned 4 architectures. Deployed with Grad-CAM explainability."
            tags={['PyTorch', 'CNNs', 'Streamlit']}
            metrics={[
              { value: '84.8%', label: 'Accuracy' },
              { value: '0.91', label: 'ROC-AUC' }
            ]}
            link="https://github.com/Akshattkain/CS5100-Final-Project"
          />

          <ProjectCard
            number="04"
            title="SalarySense"
            subtitle="NLP Salary Prediction"
            description="Predict salaries from job descriptions. Outperformed baselines by 40%. Identified systematic prediction errors."
            tags={['NLP', 'TF-IDF', 'XGBoost']}
            metrics={[
              { value: '0.778', label: 'R² Score' },
              { value: '+40%', label: 'vs Baseline' }
            ]}
            link="https://github.com/Akshattkain"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="skills-grid">
          <SkillBlock
            title="Languages"
            items={['Python', 'SQL', 'Java', 'C++', 'JavaScript']}
            icon="⌨️"
          />
          <SkillBlock
            title="ML Frameworks"
            items={['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face']}
            icon="🧠"
          />
          <SkillBlock
            title="LLMs & NLP"
            items={['LangChain', 'RAG', 'Prompt Engineering', 'Transformers']}
            icon="💬"
          />
          <SkillBlock
            title="Infrastructure"
            items={['AWS', 'Docker', 'Git', 'FastAPI', 'Streamlit']}
            icon="☁️"
          />
        </div>

        <div className="skills-visual">
          <div className="orbit-container">
            <div className="orbit orbit-1">
              <div className="orbit-item item-1">PyTorch</div>
              <div className="orbit-item item-2">LangChain</div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-item item-3">RAG</div>
              <div className="orbit-item item-4">Agents</div>
            </div>
            <div className="orbit orbit-3">
              <div className="orbit-item item-5">CV</div>
              <div className="orbit-item item-6">Tensorflow</div>
            </div>
            <div className="center-text">AI/ML</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-photo">
              <img src={aksPhoto} alt="Akshatt Kain" />
              <div className="photo-glow" />
            </div>
            <p className="about-lead">
              I build ML systems that work on messy, real-world data.
            </p>
            <p>
              Most of my time goes into the parts of ML that don't make it into papers: 
              cleaning data, debugging why a model stopped working, and figuring out if a 
              pattern in the data is real or just an artifact.
            </p>
            <p>
              Before grad school, I led a 150+ member AI community at VIT, organizing workshops 
              and national hackathons. I like building things that matter.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-row">
              <span className="detail-label">Education</span>
              <span className="detail-value">MS in AI, Northeastern University</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Graduating</span>
              <span className="detail-value">May 2026</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location</span>
              <span className="detail-value">Boston, MA</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Work Authorization</span>
              <span className="detail-value">STEM OPT through 2029</span>
            </div>
            <div className="detail-row highlight-row">
              <span className="detail-label">Status</span>
              <span className="detail-value status">
                <span className="status-dot" />
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="contact-content">
          <h2 className="contact-title">Let's Build Something</h2>
          <p className="contact-subtitle">
            Looking for AI/ML engineering roles starting May 2026
          </p>
          
          <a href="mailto:kain.a@northeastern.edu" className="contact-email">
            kain.a@northeastern.edu
          </a>

          <div className="social-links">
            <a href="https://github.com/Akshattkain" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </span>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/akshatt-kain/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>Designed & Built by Akshatt Kain · 2026</p>
        </footer>
      </section>
    </div>
  )
}

function ProjectCard({ number, title, subtitle, description, tags, metrics, link }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-number">{number}</div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-metrics">
        {metrics.map((m, i) => (
          <div key={i} className="metric">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="project-arrow">→</div>
    </a>
  )
}

function SkillBlock({ title, items, icon }) {
  return (
    <div className="skill-block">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <div className="skill-items">
        {items.map((item, i) => (
          <span key={i} className="skill-item">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default App