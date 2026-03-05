import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, BrightEdge Marketing",
    quote:
      "Dhaval transformed our outdated WordPress site into a high-converting machine. His attention to detail and project management skills kept everything on track — we launched two weeks early.",
    rating: 5,
    project: "Corporate Website Redesign",
  },
  {
    name: "Rajesh Sharma",
    role: "Founder, PropConnect Realty",
    quote:
      "Building our real estate platform was a complex challenge. Dhaval handled the custom plugin development, API integrations, and team coordination flawlessly. The platform now serves 15K+ monthly users.",
    rating: 5,
    project: "Real Estate Platform",
  },
  {
    name: "Emily Chen",
    role: "Director of Operations, LearnPath",
    quote:
      "We needed an LMS that could scale. Dhaval built a custom solution on WordPress that handles thousands of students, live classes, and certificates — all running smoothly. Highly recommend.",
    rating: 5,
    project: "LMS Development",
  },
  {
    name: "Marcus Johnson",
    role: "CTO, Dallas Web Agency",
    quote:
      "Dhaval is one of the most reliable WordPress developers I've worked with. His core contributions, plugin expertise, and ability to manage multiple projects simultaneously are exceptional.",
    rating: 5,
    project: "Ongoing Partnership",
  },
  {
    name: "Priya Desai",
    role: "Owner, SpiceRoute Restaurants",
    quote:
      "Our online ordering system increased revenue by 52%. Dhaval understood our multi-location needs perfectly and delivered a WordPress solution that our staff actually enjoys using.",
    rating: 5,
    project: "Restaurant & Ordering System",
  },
  {
    name: "David Kowalski",
    role: "Marketing Lead, HealthFirst Clinic",
    quote:
      "From appointment booking to patient portals, Dhaval built everything we needed. He communicated clearly, met every deadline, and the final product exceeded our expectations.",
    rating: 5,
    project: "Healthcare Portal",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            What clients <span className="text-gradient">say about me</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real feedback from clients and collaborators I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Quote text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-3.5 h-3.5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>

              {/* Project tag */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-[10px] font-medium text-primary/70 uppercase tracking-wider">
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
