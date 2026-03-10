import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const plugins = [
  {
    name: "Extension Info Exporter",
    description: "Export details about installed plugins and themes — handy for audits, documentation, and migrations.",
    installs: "100+",
    url: "https://wordpress.org/plugins/extension-info-exporter/",
    tags: ["Admin Tools", "Export"],
  },
  {
    name: "Dashboard Video Widget",
    description: "Embed video widgets in the WP admin dashboard. Great for onboarding tutorials or team communication.",
    installs: "10+",
    url: "https://wordpress.org/plugins/dashboard-video-widget/",
    tags: ["Dashboard", "Video"],
  },
  {
    name: "OptiFlow WebP Media",
    description: "Automatically converts and serves images as WebP. Helps with page speed and Core Web Vitals without manual work.",
    installs: "New",
    url: "https://wordpress.org/plugins/optiflow-webp-media/",
    tags: ["Performance", "Media"],
  },
  {
    name: "Image Preview for ACF Field",
    description: "Adds inline image previews in ACF fields so editors can actually see what they're selecting.",
    installs: "50+",
    url: "https://wordpress.org/plugins/image-preview-for-acf-field/",
    tags: ["ACF", "UX"],
    role: "Contributor",
  },
];

const PluginsSection = () => {
  return (
    <section id="plugins" className="py-24 md:py-32 bg-card/40">
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
              Plugins I've published
            </h2>
            <p className="text-muted-foreground">
              Open source tools on WordPress.org — built to solve problems I kept running into.
            </p>
          </motion.div>

          <div className="space-y-3">
            {plugins.map((plugin, i) => (
              <motion.a
                key={plugin.name}
                href={plugin.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/20 transition-colors block"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {plugin.name}
                    </h4>
                    {plugin.role && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium shrink-0">
                        {plugin.role}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{plugin.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex gap-1.5">
                    {plugin.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] rounded bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Download className="w-3 h-3" />
                    {plugin.installs}
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginsSection;
