import { motion } from "framer-motion";
import { GitPullRequest, Languages, Camera, Bug, BookOpen } from "lucide-react";

const contributions = [
  {
    icon: GitPullRequest,
    title: "WordPress Core",
    description: "Submitted PRs to wordpress-develop, reported UI bugs in Core Trac, and fixed spacing issues in admin dashboard widgets.",
    highlights: ["Core Trac tickets", "Pull requests to wordpress-develop", "Admin CSS fixes"],
  },
  {
    icon: Languages,
    title: "Translation Editor",
    description: "Active Gujarati and Hindi Translation Editor — reviewed and translated 200+ strings for plugins including Classic Widgets, Openverse, and more.",
    highlights: ["Gujarati PTE", "Hindi PTE", "200+ translations"],
  },
  {
    icon: Bug,
    title: "Meta & Bug Reports",
    description: "Filed multiple Meta Trac tickets identifying UI bugs on WordPress.org — from broken video links to mobile header issues.",
    highlights: ["Meta Trac tickets", "404 page scrollbar fix", "Mobile header bug"],
  },
  {
    icon: Camera,
    title: "Photo Directory",
    description: "Contributed 19 high-quality photos to the WordPress Photo Directory — landscapes, food photography, and landmark shots from India.",
    highlights: ["19 photos contributed", "Openverse Contributor badge"],
  },
  {
    icon: BookOpen,
    title: "Community & Events",
    description: "Volunteered at WordCamp Ahmedabad 2023. Completed WordPress Meetup Organizer and WordCamp Organizer training courses.",
    highlights: ["WordCamp volunteer", "Organizer training", "Community mentor"],
  },
];

const ContributionsSection = () => {
  return (
    <section id="contributions" className="py-24 md:py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Open Source</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Giving back to <span className="text-gradient">WordPress</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Contributing to Core, Meta, Polyglots, Photos, and Mobile teams — sponsored by Dallas Web Agency.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {contributions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span key={h} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;
