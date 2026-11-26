
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { brands } from "../data/brands";

export default function Brands() {
  return (
    <section className="brands-directory">
      <div className="directory-heading">
        <span>OUR BUSINESS NETWORK</span>

        <h1>Discover Our Brands</h1>

        <p>
          INTERLINK GROUP brings together specialized
          brands offering different services and solutions
          under one corporate structure.
        </p>
      </div>

      <div className="directory-grid">
        {brands.map((brand) => (
          <article
            className="directory-card"
            key={brand.id}
            style={{
              "--brand-primary": brand.colors.primary,
              "--brand-secondary": brand.colors.secondary
            }}
          >
            <div className="directory-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>

            <span>{brand.category}</span>

            <h2>{brand.name}</h2>

            <p>{brand.description}</p>

            <Link to={`/brands/${brand.slug}`}>
              Explore brand
              <ArrowUpRight size={18} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
