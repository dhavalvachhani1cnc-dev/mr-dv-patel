import { motion } from "framer-motion";
import { MapPin, Calendar, Award, Users } from "lucide-react";

const badges = [
  "Plugin Developer",
  "Translation Editor",
  "Openverse Contributor",
  "Pattern Author",
  "Photo Contributor",
  "Translation Contributor",
];

const skills = [
  "WordPress Core", "PHP", "JavaScript", "HTML/CSS", "MySQL",
  "Theme Development", "Plugin Development", "REST API",
  "WooCommerce", "ACF", "Gutenberg Blocks", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Crafting WordPress <span className="text-gradient">experiences</span> that matter.
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm Dhaval Vachhani — a Senior WordPress Developer based in Ahmedabad, India, 
            with over 7 years of hands-on experience. I specialize in custom theme development, 
            plugin engineering, and optimizing WordPress at scale. My expertise spans PHP, JavaScript, 
            REST APIs, and third-party integrations, delivering solutions that are clean, performant, 
            and user-centric.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Beyond client work, I'm an active contributor to the WordPress open-source community — 
            volunteering at WordCamp Ahmedabad 2023, contributing to WordPress Core, and translating 
            plugins into Gujarati and Hindi. I believe in giving back to the ecosystem that shaped my career.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: MapPin, label: "Location", value: "Ahmedabad, IN" },
              { icon: Calendar, label: "Member Since", value: "Sept 2017" },
              { icon: Award, label: "Job Title", value: "Sr. WP Dev" },
              { icon: Users, label: "WordCamp", value: "Volunteer" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-surface border border-border">
                <item.icon className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <h4 className="text-sm font-semibold text-foreground mb-4">WordPress.org Badges</h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Skills */}
          <h4 className="text-sm font-semibold text-foreground mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
