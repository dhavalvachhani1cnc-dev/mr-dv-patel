import { motion } from "framer-motion";
import { MapPin, Calendar, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,320px] gap-16 items-start">
          {/* Left — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              I've been working with WordPress since 2017 — and I still love it.
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Dhaval — a senior developer and project manager based in Ahmedabad, India. 
                I've spent the last 7+ years building custom themes, plugins, and platforms for 
                clients ranging from local businesses to international agencies.
              </p>
              <p>
                What keeps me going is the craft: writing clean PHP, building Gutenberg blocks 
                that editors actually enjoy using, and shipping projects that load fast and work 
                reliably. I manage projects too — timelines, teams, client comms — so nothing 
                falls through the cracks.
              </p>
              <p>
                Outside of client work, I contribute to WordPress Core, translate plugins into 
                Gujarati and Hindi, and volunteered at WordCamp Ahmedabad 2023. 
                The community shaped my career, so I try to give back where I can.
              </p>
            </div>

            {/* Skills — inline, casual */}
            <div className="mt-10">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Tools I work with daily
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP", "JavaScript", "MySQL", "REST API", "WooCommerce", 
                  "ACF Pro", "Gutenberg", "Git", "HTML/CSS", "Custom Themes", 
                  "Custom Plugins",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — quick facts sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { icon: MapPin, label: "Based in", value: "Ahmedabad, India" },
              { icon: Calendar, label: "WP member since", value: "September 2017" },
              { icon: Award, label: "Current role", value: "Sr. Developer & PM" },
              { icon: Users, label: "WordCamp", value: "Ahmedabad '23 Volunteer" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}

            {/* Badges */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                WordPress.org badges
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Plugin Developer",
                  "Translation Editor",
                  "Photo Contributor",
                  "Pattern Author",
                  "Core Contributor",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 text-[11px] font-medium rounded-md border border-primary/20 text-primary bg-primary/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
