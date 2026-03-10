import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectLms from "@/assets/project-lms.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";

const categories = ["All", "E-Commerce", "Corporate", "Platform", "Custom Theme"];

const projects = [
  {
    title: "Fashion Hub",
    subtitle: "WooCommerce Store",
    category: "E-Commerce",
    image: projectEcommerce,
    description:
      "A WooCommerce store with custom product filtering, multi-currency support, and Stripe integration. Built a custom theme from scratch focused on conversion optimization.",
    tech: ["WordPress", "WooCommerce", "PHP", "REST API", "Stripe"],
    result: "95+ PageSpeed, +42% conversion rate",
    role: "Lead Developer & PM",
  },
  {
    title: "ConsultPro",
    subtitle: "Corporate Website",
    category: "Corporate",
    image: projectCorporate,
    description:
      "Corporate site for a consulting firm. Dynamic team profiles, case studies, and a HubSpot CRM integration for lead capture with automated follow-ups.",
    tech: ["WordPress", "ACF Pro", "JavaScript", "HubSpot API"],
    result: "+68% lead generation, 1.2s load time",
    role: "Full-Stack Developer & PM",
  },
  {
    title: "PropConnect",
    subtitle: "Real Estate Platform",
    category: "Platform",
    image: projectRealestate,
    description:
      "Listing platform with advanced search, Google Maps integration, virtual tours, and agent dashboards. Custom plugin manages the entire property workflow.",
    tech: ["WordPress", "Custom Plugin", "Google Maps API", "MySQL"],
    result: "2,000+ listings, 15K monthly users",
    role: "Lead Developer & PM",
  },
  {
    title: "LearnPath",
    subtitle: "Online LMS",
    category: "Platform",
    image: projectLms,
    description:
      "Full LMS with course management, progress tracking, quizzes, certificate generation, and Zoom integration for live sessions.",
    tech: ["WordPress", "LearnDash", "REST API", "Zoom API"],
    result: "3K+ students, 78% completion rate",
    role: "Developer & PM",
  },
  {
    title: "SpiceRoute",
    subtitle: "Restaurant & Ordering",
    category: "Custom Theme",
    image: projectRestaurant,
    description:
      "Custom theme for a restaurant chain — online ordering, table reservations, dynamic menus, and location-based pricing across 8 locations.",
    tech: ["WordPress", "WooCommerce", "ACF", "Google Places API"],
    result: "+85% online orders, +52% revenue",
    role: "Lead Developer",
  },
  {
    title: "MedCare",
    subtitle: "Healthcare Portal",
    category: "Corporate",
    image: projectHealthcare,
    description:
      "Healthcare site with appointment booking, doctor profiles, patient portal, and a custom plugin for managing medical resources.",
    tech: ["WordPress", "Custom Plugin", "Calendly API", "ACF Pro"],
    result: "+120% appointments, 800+ signups",
    role: "Developer & PM",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                Selected work
              </h2>
              <p className="text-muted-foreground">
                A few projects I've built and managed — from concept to production.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/20 transition-colors"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <p className="text-xs font-medium text-primary mb-3">
                      {project.result}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] rounded bg-secondary text-secondary-foreground"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-0.5 text-[10px] rounded bg-secondary text-secondary-foreground">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground">{project.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
