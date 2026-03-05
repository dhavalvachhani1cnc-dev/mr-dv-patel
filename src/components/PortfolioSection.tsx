import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectLms from "@/assets/project-lms.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";

const categories = ["All", "E-Commerce", "Corporate", "Platform", "Custom Theme"];

const projects = [
  {
    title: "Fashion Hub — WooCommerce Store",
    category: "E-Commerce",
    image: projectEcommerce,
    description:
      "A high-performance WooCommerce store with custom product filtering, multi-currency support, and integrated payment gateways. Built from scratch with a custom theme optimized for conversions.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "REST API", "Stripe"],
    results: [
      { label: "Page Speed", value: "95+" },
      { label: "Conversion Rate", value: "+42%" },
      { label: "Products", value: "500+" },
    ],
    role: "Lead Developer & Project Manager",
  },
  {
    title: "ConsultPro — Corporate Website",
    category: "Corporate",
    image: projectCorporate,
    description:
      "A sleek corporate website for a consulting firm featuring dynamic team profiles, case study archives, and a custom CRM integration for lead capture and automated follow-ups.",
    tech: ["WordPress", "Custom Theme", "ACF Pro", "JavaScript", "HubSpot API"],
    results: [
      { label: "Lead Generation", value: "+68%" },
      { label: "Bounce Rate", value: "-35%" },
      { label: "Load Time", value: "1.2s" },
    ],
    role: "Full-Stack Developer & PM",
  },
  {
    title: "PropConnect — Real Estate Platform",
    category: "Platform",
    image: projectRealestate,
    description:
      "A comprehensive real estate listing platform with advanced search filters, map integration, virtual tour embeds, and agent dashboards. Custom plugin handles property management workflows.",
    tech: ["WordPress", "Custom Plugin", "Google Maps API", "PHP", "jQuery", "MySQL"],
    results: [
      { label: "Listings", value: "2,000+" },
      { label: "Monthly Users", value: "15K+" },
      { label: "Agent Signups", value: "120+" },
    ],
    role: "Lead Developer & Project Manager",
  },
  {
    title: "LearnPath — Online Learning LMS",
    category: "Platform",
    image: projectLms,
    description:
      "A full-featured LMS built on WordPress with custom course management, progress tracking, quiz engine, certificate generation, and Zoom integration for live classes.",
    tech: ["WordPress", "LearnDash", "Custom Plugin", "REST API", "Zoom API", "PHP"],
    results: [
      { label: "Active Students", value: "3K+" },
      { label: "Courses", value: "150+" },
      { label: "Completion Rate", value: "78%" },
    ],
    role: "WordPress Developer & PM",
  },
  {
    title: "SpiceRoute — Restaurant & Ordering",
    category: "Custom Theme",
    image: projectRestaurant,
    description:
      "A custom WordPress theme for a restaurant chain with online ordering, table reservations, dynamic menu management, and multi-location support with location-based pricing.",
    tech: ["WordPress", "Custom Theme", "WooCommerce", "ACF", "Google Places API"],
    results: [
      { label: "Online Orders", value: "+85%" },
      { label: "Locations", value: "8" },
      { label: "Monthly Revenue", value: "+52%" },
    ],
    role: "Lead Developer",
  },
  {
    title: "MedCare — Healthcare Portal",
    category: "Corporate",
    image: projectHealthcare,
    description:
      "A HIPAA-aware healthcare website with appointment booking, doctor profiles, patient portal integration, and a custom plugin for managing medical resources and blog content.",
    tech: ["WordPress", "Custom Plugin", "PHP", "Calendly API", "ACF Pro", "SMTP"],
    results: [
      { label: "Appointments", value: "+120%" },
      { label: "Patient Signups", value: "800+" },
      { label: "Page Speed", value: "92" },
    ],
    role: "Developer & Project Manager",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Portfolio & Case Studies
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Projects that <span className="text-gradient">deliver results</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of WordPress projects I've developed and managed — from concept to launch.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover:glow-border flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-medium rounded-md bg-primary/90 text-primary-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-primary/80 font-medium mb-3">{project.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="text-center p-2 rounded-lg bg-surface">
                        <div className="text-sm font-bold text-primary">{r.value}</div>
                        <div className="text-[10px] text-muted-foreground">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-medium rounded bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
