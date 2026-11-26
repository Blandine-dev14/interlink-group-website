
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle
} from "lucide-react";

import { brands } from "../data/brands";
import { company } from "../data/company";

export default function BrandPage() {
  const { slug } = useParams();

  const brand = brands.find(
    (item) => item.slug === slug
  );

  if (!brand) {
    return (
      <div className="not-found">
        <h1>Brand not found</h1>
        <Link to="/brands">Explore our brands</Link>
      </div>
    );
  }

  const message = encodeURIComponent(
    `Hello INTERLINK GROUP, I am interested in ${brand.name}. I would like to receive more information about its services.`
  );

  const whatsappUrl =
    `https://wa.me/${company.whatsappNumbers[0]}?text=${message}`;

  return (
    <div
      className="brand-page"
      style={{
        "--brand-primary": brand.colors.primary,
        "--brand-secondary": brand.colors.secondary,
        "--brand-accent": brand.colors.accent,
        "--brand-background": brand.colors.background
      }}
    >
      <div className="brand-topbar">
        <Link to="/" className="back-link">
          <ArrowLeft size={17} />
          INTERLINK GROUP
        </Link>

        <span>AN INTERLINK GROUP BRAND</span>
      </div>

      <section className="brand-hero">
        <div className="brand-hero-content">
          <span className="brand-category">
            {brand.category}
          </span>

          <h1>{brand.name}</h1>

          <h2>{brand.tagline}</h2>

          <p>{brand.description}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="brand-contact-button"
          >
            <MessageCircle size={19} />
            Contact us on WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="brand-logo-container">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
          />
        </div>
      </section>

      <section className="brand-services">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Our Services</h2>
          <p>
            Explore the services offered by {brand.name}.
          </p>
        </div>

        <div className="brand-services-grid">
          {brand.services.map((service, index) => (
            <article
              className="brand-service-card"
              key={index}
            >
              <CheckCircle
                color={brand.colors.secondary}
                size={25}
              />

              <h3>{service}</h3>

              <a href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Make an enquiry <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-contact">
        <h2>Interested in our services?</h2>

        <p>
          Contact {brand.name} through INTERLINK GROUP.
          Our team will be happy to assist you.
        </p>

        <div className="brand-contact-actions">
          <a href={whatsappUrl}
             target="_blank"
             rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a href={`mailto:${company.email}`}>
            <Mail size={18} />
            Email
          </a>

          <a href={`tel:${company.phoneNumbers[0].replace(/\s/g, "")}`}>
            <Phone size={18} />
            Call us
          </a>
        </div>
      </section>

      <footer className="brand-footer">
        <p>
          {brand.name} is part of INTERLINK GROUP.
        </p>

        <Link to="/brands">
          Explore other brands
        </Link>
      </footer>
    </div>
  );
}
