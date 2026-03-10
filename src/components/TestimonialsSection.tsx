import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, BrightEdge Marketing",
    quote:
      "Dhaval turned our outdated site into something we're actually proud to share. His project management meant we launched two weeks ahead of schedule, which never happens for us.",
    rating: 5,
    project: "Corporate Redesign",
  },
  {
    name: "Rajesh Sharma",
    role: "Founder, PropConnect Realty",
    quote:
      "The real estate platform was a complex build — custom plugins, map integrations, agent dashboards. Dhaval handled all of it and kept the team coordinated throughout. 15K+ monthly users now.",
    rating: 5,
    project: "Real Estate Platform",
  },
  {
    name: "Emily Chen",
    role: "Director of Operations, LearnPath",
    quote:
      "We went through two other developers before finding Dhaval. He built our LMS properly — it handles thousands of students without breaking. Worth every penny.",
    rating: 5,
    project: "LMS Build",
  },
  {
    name: "Marcus Johnson",
    role: "CTO, Dallas Web Agency",
    quote:
      "We've worked with Dhaval on multiple projects now. Reliable, technically strong, and easy to communicate with. He's our go-to for anything WordPress.",
    rating: 4,
    project: "Ongoing Partnership",
  },
  {
    name: "Priya Desai",
    role: "Owner, SpiceRoute Restaurants",
    quote:
      "Online ordering revenue went up 52% after the new site launched. The multi-location setup works great and our staff picked it up quickly.",
    rating: 5,
    project: "Restaurant Platform",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card/40">
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
              What people say
            </h2>
            <p className="text-muted-foreground">
              Feedback from clients and collaborators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`p-6 rounded-xl bg-background border border-border ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3 h-3 ${
                            idx < t.rating
                              ? "fill-primary text-primary"
                              : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground">{t.project}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
