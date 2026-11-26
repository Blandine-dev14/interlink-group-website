
import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

import {
  Menu, X, ArrowRight, ArrowUpRight, ArrowLeft,
  Phone, Mail, MapPin, Globe2, Code2, Wifi,
  Shirt, Newspaper, Camera, Plane, CheckCircle2,
  MessageCircle, Send, GraduationCap
} from "lucide-react";

import { brands } from "./data/brands";
import { company } from "./data/company";

import "./styles.css";

const PHONE_ONE = company.phoneNumbers[0];
const PHONE_TWO = company.phoneNumbers[1];
const EMAIL = company.email;

const services = [
  {
    icon: Wifi,
    title: "Internet Connectivity",
    text: "Connectivity solutions and support adapted to personal, professional and business requirements."
  },
  {
    icon: Code2,
    title: "Digital Development",
    text: "Web platforms and customized digital solutions that support business and institutional activities."
  },
  {
    icon: Shirt,
    title: "Corporate Branding",
    text: "Customized apparel and communication materials that strengthen identity and visibility."
  },
  {
    icon: Newspaper,
    title: "Media & Information",
    text: "Dissemination of useful information, local developments and community initiatives."
  },
  {
    icon: Camera,
    title: "Events & Photography",
    text: "Event promotion, organization support and professional visual coverage."
  },
  {
    icon: Plane,
    title: "Travel & Mobility",
    text: "Language learning, visa guidance and support for travel-related preparation."
  }
];

function whatsappLink(brand, number = PHONE_ONE) {
  const message = brand
    ? `Hello INTERLINK GROUP, I am interested in ${brand.name}. I would like to receive more information about its services.`
    : "Hello INTERLINK GROUP, I would like to receive more information about your services.";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLink({ number, brand, children, className = "btn btn-primary" }) {
  return (
    <a
      className={className}
      href={whatsappLink(brand, number)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={17} />
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Our Brands", "/brands"],
    ["Contact", "/contact"]
  ];

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link className="brand-lockup" to="/">
          <img
            src="/images/interlink-logo.jpg"
            alt="INTERLINK GROUP"
          />
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            className="nav-cta"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function BrandCard({ brand, index }) {
  return (
    <article className="brand-card">
      <div
        className="brand-image"
        style={{ backgroundImage: `url(${brand.image})` }}
      >
        <span className="brand-number">0{index + 1}</span>
      </div>

      <div className="brand-content">
        <div className="brand-logo-wrap">
          <img src={brand.logo} alt={brand.name} />
        </div>

        <p className="brand-tagline">{brand.tagline}</p>
        <p>{brand.description}</p>

        <ul>
          {brand.services.map(service => (
            <li key={service}>
              <CheckCircle2 size={15} />
              {service}
            </li>
          ))}
        </ul>

        <Link
          className="text-link"
          to={`/brands/${brand.slug}`}
        >
          Explore this brand <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General enquiry",
    message: ""
  });

  const submitForm = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="hero-kicker">
            <span /> A MULTI-SECTOR COMPANY IN CAMEROON
          </span>

          <h1>
            Connecting people.
            <br />
            <em>Technology.</em>
            <br />
            Opportunities.
          </h1>

          <p>
            Integrated solutions in connectivity, digital innovation,
            corporate branding, media, events and international mobility.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="btn btn-orange">
              Explore our services <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="btn btn-outline">
              Discover INTERLINK
            </Link>
          </div>

          <div className="hero-location">
            <MapPin size={16} />
            Tonga, Cameroon
            <span />
            Let's build the future we would love to have.
          </div>
        </div>

        <div className="hero-bottom">
          <span>INTERLINK GROUP</span>
          <span>INNOVATION · CONNECTION · OPPORTUNITY</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>ONE GROUP</span>
          <b />
          <span>FIVE SPECIALIZED BRANDS</span>
          <b />
          <span>INTEGRATED SOLUTIONS</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
              alt="Modern corporate architecture"
            />

            <div className="about-stamp">
              <strong>INTERLINK</strong>
              <span>GROUP</span>
              <small>TONGA · CAMEROON</small>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              A connected ecosystem of ideas, services and opportunities.
            </h2>

            <p>
              INTERLINK GROUP is a diversified company based in Tonga,
              Cameroon, operating across information and communication
              technology, internet connectivity, digital solutions,
              corporate branding, media, event promotion and travel services.
            </p>

            <p>
              Through its specialized brands, the Group provides practical,
              accessible and tailored solutions to individuals, businesses
              and institutions. Its multidisciplinary approach brings
              complementary expertise together under one corporate identity.
            </p>

            <Link to="/brands" className="text-link">
              Explore our business divisions <ArrowRight size={17} />
            </Link>

            <div className="mission-vision">
              <div>
                <span>OUR MISSION</span>
                <p>
                  Connect people and organizations to useful solutions,
                  services and opportunities.
                </p>
              </div>

              <div>
                <span>OUR VISION</span>
                <p>
                  Become a reputable and competitive multi-sector enterprise
                  in Cameroon and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Solutions for a changing world"
            text="From digital technology to mobility, our activities respond to different needs through specialized expertise."
          />

          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={25} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>

                <Link
                  to="/contact"
                  aria-label={`Enquire about ${title}`}
                >
                  <ArrowUpRight size={19} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section brands-section" id="brands">
        <div className="container">
          <SectionHeading
            eyebrow="OUR BUSINESS ECOSYSTEM"
            title="Five brands. One shared ambition."
            text="Each specialized division has its own identity and expertise, working within the wider INTERLINK GROUP ecosystem."
          />

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                index={index}
              />
            ))}
          </div>

          <div className="directory-more">
            <Link to="/brands" className="btn btn-primary">
              Explore all our brands <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="connect-banner">
        <div className="container connect-inner">
          <div>
            <span className="eyebrow">CONNECTIVITY & TECHNOLOGY</span>
            <h2>Building access to the digital world.</h2>
            <p>
              INTERLINK GROUP supports connectivity and digital accessibility
              through internet connectivity solutions and assistance adapted
              to individual and business requirements.
            </p>
          </div>

          <div className="connect-icon">
            <Globe2 size={74} />
          </div>
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="container impact-grid">
          <div>
            <SectionHeading
              eyebrow="OUR CONTRIBUTION"
              title="Investing in people and professional growth"
              text="We recognize the importance of practical experience in preparing the next generation of professionals."
            />

            <p className="impact-description">
              In 2026, INTERLINK GROUP welcomed more than 20 students
              from the Institut Africain d'Informatique (IAI) for
              professional internship placements, supporting the
              transition from academic learning to professional practice.
            </p>
          </div>

          <div className="impact-points">
            {[
              "Practical professional exposure",
              "Skills development",
              "Youth empowerment",
              "Institutional engagement"
            ].map((item, index) => (
              <div className="impact-point" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <CheckCircle2 size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="Our values"
            light
          />

          <div className="values-grid">
            {[
              "Professionalism",
              "Innovation",
              "Diversification",
              "Human capital development",
              "Customer orientation",
              "Continuous improvement"
            ].map((value, index) => (
              <div key={value}>
                <span>0{index + 1}</span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        form={form}
        setForm={setForm}
        submitForm={submitForm}
      />
    </main>
  );
}

function Brands() {
  return (
    <main className="directory-page">
      <section className="directory-hero">
        <div className="container">
          <span className="eyebrow">OUR BUSINESS ECOSYSTEM</span>
          <h1>Discover our specialized brands.</h1>
          <p>
            Five specialized brands, each with its own identity,
            expertise and services, united under INTERLINK GROUP.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container brands-grid">
          {brands.map((brand, index) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function BrandPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const brand = brands.find(item => item.slug === slug);

  if (!brand) {
    return (
      <div className="not-found">
        <h1>Brand not found</h1>
        <Link to="/brands">Explore our brands</Link>
      </div>
    );
  }

  return (
    <main
      className="brand-page"
      style={{
        "--brand-primary": brand.primary,
        "--brand-secondary": brand.secondary,
        "--brand-accent": brand.accent,
        "--brand-background": brand.id === "info"
          ? "#f8f8f8"
          : "#f5f8fc"
      }}
    >
      <div className="brand-topbar">
        <button onClick={() => navigate(-1)} className="back-link">
          <ArrowLeft size={17} />
          Back
        </button>

        <Link to="/" className="parent-link">
          <img
            src="/images/interlink-logo.jpg"
            alt="INTERLINK GROUP"
          />
          <span>AN INTERLINK GROUP BRAND</span>
        </Link>
      </div>

      <section className="brand-hero">
        <div className="brand-hero-content">
          <span className="brand-category">
            {brand.category}
          </span>

          <h1>{brand.name}</h1>

          <h2>{brand.tagline}</h2>

          <p>{brand.description}</p>

          <WhatsAppLink brand={brand} className="btn brand-whatsapp">
            Contact this brand on WhatsApp
          </WhatsAppLink>
        </div>

        <div className="brand-logo-container">
          <img src={brand.logo} alt={`${brand.name} logo`} />
        </div>
      </section>

      <section className="brand-feature-image">
        <img src={brand.image} alt={brand.name} />
      </section>

      <section className="section brand-services">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE OFFER"
            title={`Discover ${brand.name} services`}
            text={`Explore the services offered by ${brand.name}, a specialized brand of INTERLINK GROUP.`}
          />

          <div className="brand-services-grid">
            {brand.services.map((service, index) => (
              <article className="brand-service-card" key={service}>
                <span className="service-number">0{index + 1}</span>
                <CheckCircle2 size={26} />
                <h3>{service}</h3>

                <a
                  href={whatsappLink(brand)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Make an enquiry <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-contact">
        <div className="container">
          <span>AN INTERLINK GROUP BRAND</span>
          <h2>How can we help you?</h2>
          <p>
            Contact {brand.name} through INTERLINK GROUP
            for more information and assistance.
          </p>

          <div className="brand-contact-actions">
            <WhatsAppLink brand={brand}>
              WhatsApp
            </WhatsAppLink>

            <a className="btn btn-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent(brand.name + " enquiry")}`}>
              <Mail size={18} /> Email us
            </a>
          </div>

          <p className="parent-company-note">
            {brand.name} operates as part of INTERLINK GROUP,
            Tonga, Cameroon.
          </p>
        </div>
      </section>
    </main>
  );
}

function ContactSection({ form, setForm, submitForm }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">LET'S TALK</span>

          <h2>Let's build something meaningful together.</h2>

          <p>
            Tell us what you need. Our team is ready to help
            you find the right service or connect you with
            the appropriate division.
          </p>

          <div className="contact-detail">
            <span><Phone size={19} /></span>
            <div>
              <small>CALL US</small>
              <a href={`tel:+${PHONE_ONE}`}>+237 651 11 55 72</a>
              <a href={`tel:+${PHONE_TWO}`}>+237 657 53 74 00</a>
            </div>
          </div>

          <div className="contact-detail">
            <span><Mail size={19} /></span>
            <div>
              <small>EMAIL US</small>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className="contact-detail">
            <span><MapPin size={19} /></span>
            <div>
              <small>VISIT US</small>
              <p>Tonga, Cameroon</p>
            </div>
          </div>

          <div className="whatsapp-row">
            <WhatsAppLink number={PHONE_ONE}>
              WhatsApp 1
            </WhatsAppLink>

            <WhatsAppLink
              number={PHONE_TWO}
              className="btn btn-whatsapp"
            >
              WhatsApp 2
            </WhatsAppLink>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <h3>Send us a message</h3>

          <p>
            Complete the form and your email application
            will open with your message prepared.
          </p>

          <label>
            Full name
            <input
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
            />
          </label>

          <div className="form-row">
            <label>
              Email address
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Phone number
              <input
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="+237 ..."
              />
            </label>
          </div>

          <label>
            Service of interest
            <select
              value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
            >
              {[
                "General enquiry",
                "Internet Connectivity",
                "Digital Development",
                "Corporate Branding",
                "Media and Communication",
                "Event Promotion and Photography",
                "Travel and Visa Assistance",
                "Language Training",
                "Other"
              ].map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            Message
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help you?"
            />
          </label>

          <button className="btn btn-orange form-submit" type="submit">
            Prepare email <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

function About() {
  return (
    <main className="simple-page">
      <div className="container">
        <SectionHeading
          eyebrow="ABOUT INTERLINK GROUP"
          title="A diversified company bringing complementary services together."
          text="Based in Tonga, Cameroon, INTERLINK GROUP operates through specialized brands across technology, connectivity, communication, events and travel-related activities."
        />

        <div className="about-extra-grid">
          <article>
            <h2>Our Mission</h2>
            <p>Connect people and organizations to useful solutions, services and opportunities.</p>
          </article>
          <article>
            <h2>Our Vision</h2>
            <p>Become a reputable and competitive multi-sector enterprise in Cameroon and beyond.</p>
          </article>
        </div>

        <Link to="/brands" className="btn btn-primary">
          Discover our brands <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}

function Services() {
  return (
    <main className="simple-page">
      <div className="container">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Integrated solutions for different needs."
          text="Discover the areas of activity covered by INTERLINK GROUP and its specialized brands."
        />

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="/brands">Explore related brands <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General enquiry",
    message: ""
  });

  const submitForm = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="simple-page">
      <ContactSection
        form={form}
        setForm={setForm}
        submitForm={submitForm}
      />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-about">
          <img src="/images/interlink-logo.jpg" alt="INTERLINK GROUP" />
          <p>
            Connecting people, technology and opportunities through
            integrated services and specialized brands.
          </p>
          <span>{company.slogan}</span>
        </div>

        <div>
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/brands">Our Brands</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>OUR BRANDS</h4>
          {brands.map(brand => (
            <Link key={brand.id} to={`/brands/${brand.slug}`}>
              {brand.name}
            </Link>
          ))}
        </div>

        <div>
          <h4>CONTACT</h4>
          <a href={`tel:+${PHONE_ONE}`}>+237 651 11 55 72</a>
          <a href={`tel:+${PHONE_TWO}`}>+237 657 53 74 00</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>Tonga, Cameroon</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {company.year} INTERLINK GROUP. All rights reserved.</span>
        <span>INNOVATION · CONNECTION · OPPORTUNITY</span>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </main>
  );
}

function AppLayout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:slug" element={<BrandPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <a
        className="floating-whatsapp"
        href={whatsappLink(null)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with INTERLINK GROUP on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
