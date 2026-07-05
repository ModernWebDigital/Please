import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="nav-logo">Modern Web Digital</div>
        <ul className="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-overlay-bottom" />
        <div className="hero-content">
          <div className="hero-badge">Premium Web Design &amp; Management</div>
          <h1 className="hero-title">
            Your Vision.<br />
            <span>Our Expertise.</span><br />
            One Powerful Website.
          </h1>
          <p className="hero-sub">
            You focus on running your business — we handle everything it takes to build, launch, and manage a world-class website that turns visitors into customers.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Start Your Project</a>
            <a href="#how-it-works" className="btn-secondary">See How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Custom Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Management</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Fast</div>
              <div className="stat-label">Launch Timeline</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Technical Stress</div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="section-inner">
          <div className="section-tag">The Process</div>
          <h2 className="section-title">Simple for You.<br />Powerful for Your Business.</h2>
          <p className="section-desc">
            We&apos;ve eliminated the complexity. You share your vision and ideas — we take care of every technical detail, backend system, and ongoing update so your site always performs at its best.
          </p>

          <div className="how-layout">
            <div className="how-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260626_213738_db0924e5-b0c3-4e92-98ec-82a8a2dc41eb.png"
                alt="Modern Web Digital collaboration"
              />
              <div className="how-glow" />
            </div>

            <div>
              <div className="roles-grid">
                <div className="role-card you">
                  <div className="role-header">
                    <div className="role-icon client">💡</div>
                    <div className="role-label client">Your Role</div>
                  </div>
                  <div className="role-title">Share Your Vision</div>
                  <ul className="role-list">
                    <li>Tell us what your business does</li>
                    <li>Describe your ideal website look &amp; feel</li>
                    <li>Request features or changes anytime</li>
                    <li>Approve designs before we build</li>
                  </ul>
                </div>
                <div className="role-card me">
                  <div className="role-header">
                    <div className="role-icon dev">⚡</div>
                    <div className="role-label dev">Our Role</div>
                  </div>
                  <div className="role-title">Build &amp; Manage Everything</div>
                  <ul className="role-list">
                    <li>Custom design &amp; development</li>
                    <li>Hosting, security &amp; backend systems</li>
                    <li>Speed optimization &amp; SEO setup</li>
                    <li>Ongoing updates &amp; maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="process-steps">
                <div className="step">
                  <div className="step-num">1</div>
                  <div className="step-text">
                    <h4>Discovery Call</h4>
                    <p>We learn about your business, goals, and what you want your website to accomplish for your customers.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div className="step-text">
                    <h4>Design &amp; Development</h4>
                    <p>We build your fully custom website — handling all the technical complexity behind the scenes.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div className="step-text">
                    <h4>Review &amp; Launch</h4>
                    <p>You review the site, request any tweaks, and we launch it live when you&apos;re completely satisfied.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <div className="step-text">
                    <h4>Ongoing Management</h4>
                    <p>Need a change? Just tell us. We handle every update, addition, and improvement going forward.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* SERVICES */}
      <section id="services">
        <div className="section-inner">
          <div className="services-header">
            <div>
              <div className="section-tag">What We Offer</div>
              <h2 className="section-title">Everything Your Website Needs — Handled.</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                From design to deployment to daily management, we provide a complete end-to-end service so you never have to worry about the technical side of your online presence.
              </p>
            </div>
            <div className="services-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260627_003110_caed5b7a-6e9f-4cfa-994c-8246e0f49db0.png"
                alt="Web development technology"
              />
              <div className="services-image-overlay" />
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Custom Website Design</h3>
              <p>Fully bespoke designs tailored to your brand identity — no templates, no cookie-cutter layouts. Every pixel is crafted to reflect your business uniquely.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Backend Systems &amp; Tech Stack</h3>
              <p>We manage all the complex infrastructure — servers, databases, APIs, security, and integrations — so your site runs flawlessly without you lifting a finger.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Performance Optimization</h3>
              <p>Fast-loading sites rank better and convert more. We optimize every element for speed, Core Web Vitals, and a seamless experience on any device.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Security &amp; Hosting Management</h3>
              <p>SSL certificates, regular backups, uptime monitoring, and threat protection — we keep your site safe and online 24/7 without you worrying about downtime.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>SEO &amp; Visibility Setup</h3>
              <p>We build your site with search engines in mind from day one — proper structure, meta data, page speed, and local SEO fundamentals baked right in.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Ongoing Updates &amp; Changes</h3>
              <p>Your business evolves — your website should too. Request any change, addition, or new feature anytime and we&apos;ll handle it quickly and professionally.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>eCommerce Integration</h3>
              <p>Want to sell products or services online? We set up complete shopping systems, payment processing, and order management seamlessly within your site.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Lead Capture &amp; Forms</h3>
              <p>Custom contact forms, booking systems, and lead capture tools designed to convert your site visitors into real paying customers for your business.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile-First Development</h3>
              <p>Every website we build is fully responsive and looks stunning on phones, tablets, and desktops — because most of your customers are browsing on mobile.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner">
          <div className="contact-layout">
            <div>
              <div className="section-tag">Get Started</div>
              <h2 className="section-title">Ready to Build Something Remarkable?</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 0 }}>
                Tell us about your business and what you&apos;re looking for. We&apos;ll take it from there — handling every technical detail while you focus on what you do best. There&apos;s no commitment required to reach out.
              </p>

              <div className="contact-perks">
                <div className="perk">
                  <div className="perk-icon">✅</div>
                  <div className="perk-text">
                    <h4>No Technical Knowledge Required</h4>
                    <p>You describe your vision in plain language — we translate it into a professional, high-performing website.</p>
                  </div>
                </div>
                <div className="perk">
                  <div className="perk-icon">🎯</div>
                  <div className="perk-text">
                    <h4>Built Around Your Business Goals</h4>
                    <p>Every design decision is made with your customers&apos; experience and your business growth in mind.</p>
                  </div>
                </div>
                <div className="perk">
                  <div className="perk-icon">🤝</div>
                  <div className="perk-text">
                    <h4>A True Long-Term Partner</h4>
                    <p>We&apos;re not a one-and-done agency. We stay by your side to manage, grow, and evolve your website as your business does.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-title">Let&apos;s Talk About Your Website</div>
              <div className="form-sub">Fill out the form below and we&apos;ll be in touch within 24 hours.</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">Modern Web Digital</div>
          <p className="footer-copy">© 2026 Modern Web Digital. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
