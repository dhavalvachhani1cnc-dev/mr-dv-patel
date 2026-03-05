import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Mail, Github, Globe, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's build something <span className="text-gradient">great</span> together
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Have a WordPress project in mind? Whether it's a custom theme, plugin, or full website build — 
            I'd love to hear about it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="mailto:hello@dhavalwp.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-border"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Linkedin, label: "LinkedIn", url: "https://in.linkedin.com/in/mrdvpatel" },
              { icon: Github, label: "GitHub", url: "https://github.com/mrdvpatel" },
              { icon: Globe, label: "WordPress.org", url: "https://profiles.wordpress.org/dvpatel/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
