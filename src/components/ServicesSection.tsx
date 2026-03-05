import { motion } from "framer-motion";
import { Code2, Palette, Puzzle, Zap, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Theme Development",
    description: "Pixel-perfect, responsive WordPress themes built from scratch — optimized for speed, SEO, and your brand identity.",
  },
  {
    icon: Puzzle,
    title: "Plugin Development",
    description: "Custom WordPress plugins that extend functionality, automate workflows, and integrate with third-party APIs seamlessly.",
  },
  {
    icon: Code2,
    title: "WordPress Customization",
    description: "Deep customization of existing themes and plugins — from layout tweaks to complex functional overhauls.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed audits, caching strategies, database optimization, and Core Web Vitals improvements for lightning-fast sites.",
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Connect WordPress with payment gateways, CRMs, email platforms, and any third-party service via REST or custom APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description: "Ongoing updates, security hardening, backups, and monitoring to keep your WordPress site running flawlessly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            What I can <span className="text-gradient">build</span> for you
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">{service.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
