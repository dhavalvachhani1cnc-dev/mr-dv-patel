import { motion } from "framer-motion";
import { GitPullRequest, Languages, Camera, Bug, BookOpen } from "lucide-react";

const contributions = [
  {
    icon: GitPullRequest,
    title: "WordPress Core",
    detail: "PRs to wordpress-develop, Core Trac tickets, admin CSS fixes",
  },
  {
    icon: Languages,
    title: "Translations",
    detail: "Gujarati & Hindi Translation Editor — 200+ strings reviewed and translated",
  },
  {
    icon: Bug,
    title: "Meta & Bug Reports",
    detail: "Meta Trac tickets for WordPress.org UI bugs — 404 scrollbar, mobile header issues",
  },
  {
    icon: Camera,
    title: "Photo Directory",
    detail: "19 photos contributed to WordPress Photo Directory — landscapes, food, landmarks",
  },
  {
    icon: BookOpen,
    title: "Community",
    detail: "WordCamp Ahmedabad 2023 volunteer, Meetup & WordCamp organizer training",
  },
];

const ContributionsSection = () => {
  return (
    <section id="contributions" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
              Open source contributions
            </h2>
            <p className="text-muted-foreground max-w-lg">
              I volunteer across several WordPress teams — Core, Meta, Polyglots, Photos, and Mobile. 
              Sponsored by Dallas Web Agency.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <item.icon className="w-4 h-4 text-primary mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;
