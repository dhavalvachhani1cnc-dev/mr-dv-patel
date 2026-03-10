import { motion } from "framer-motion";
import { Code2, Palette, Puzzle, Zap, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Your design, built pixel-perfect in WordPress. Responsive, fast, and easy for your team to update.",
  },
  {
    icon: Puzzle,
    title: "Plugin Development",
    description: "Need functionality WordPress doesn't have? I build custom plugins that do exactly what you need — nothing more, nothing less.",
  },
  {
    icon: Code2,
    title: "WordPress Customization",
    description: "Tweaking an existing theme or overhauling a plugin. I dig into the code and make it work the way you actually want.",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Slow sites lose visitors. I run audits, fix Core Web Vitals, and get your load times under 2 seconds.",
  },
  {
    icon: Globe,
    title: "API Integrations",
    description: "Connecting WordPress to payment processors, CRMs, or any third-party service your business depends on.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    description: "Updates, security patches, backups, and monitoring. I keep sites running so you don't have to worry about it.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              How I can help
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Most of my work falls into one of these areas. If your project doesn't fit neatly into a box, that's fine — let's talk about it.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 bg-background hover:bg-card transition-colors"
              >
                <service.icon className="w-5 h-5 text-primary mb-4" />
                <h4 className="text-sm font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
