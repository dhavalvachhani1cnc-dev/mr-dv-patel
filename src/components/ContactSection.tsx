import { motion } from "framer-motion";
import { Mail, Github, Globe, ArrowUpRight } from "lucide-react";
import { Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether it's a custom theme, a plugin, or a full platform build — 
              I'd like to hear about it. Drop me an email and I'll get back to you 
              within a day or two.
            </p>

            <a
              href="mailto:hello@dhavalwp.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mb-12"
            >
              <Mail className="w-4 h-4" />
              hello@dhavalwp.com
            </a>

            <div className="flex items-center gap-5 pt-8 border-t border-border">
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
                  className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
