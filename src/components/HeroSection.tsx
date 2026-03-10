import { motion } from "framer-motion";
import { ArrowDown, Github, Globe, Code2, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Open to new projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            <span className="text-foreground">Dhaval Vachhani</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-6"
          >
            WordPress Developer & Project Manager
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-base text-muted-foreground/80 max-w-xl mb-10 leading-relaxed"
          >
            I build custom WordPress solutions — themes, plugins, and full platforms — 
            and manage projects from first conversation to final launch. 
            7+ years deep in the WordPress ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3 mb-20"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
            >
              See my work
            </a>
          </motion.div>

          {/* Stats — horizontal, understated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-10 text-sm"
          >
            {[
              { value: "7+", label: "years building with WordPress" },
              { value: "50+", label: "projects delivered" },
              { value: "4", label: "published plugins" },
              { value: "6+", label: "WP Core teams" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-lg font-semibold text-foreground">{stat.value}</span>
                <span className="text-muted-foreground ml-1.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
