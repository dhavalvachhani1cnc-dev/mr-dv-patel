import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const plugins = [
  {
    name: "Extension Info Exporter",
    description: "Export detailed information about installed plugins and themes. Useful for site audits, documentation, and migration planning.",
    installs: "100+",
    url: "https://wordpress.org/plugins/extension-info-exporter/",
    tags: ["Admin Tools", "Site Management", "Export"],
  },
  {
    name: "Dashboard Video Widget",
    description: "Add custom video widgets to the WordPress admin dashboard — perfect for onboarding tutorials, team communications, and client training.",
    installs: "10+",
    url: "https://wordpress.org/plugins/dashboard-video-widget/",
    tags: ["Dashboard", "Video", "Admin UX"],
  },
  {
    name: "OptiFlow WebP Media",
    description: "Automatically convert and serve images in WebP format for faster page loads and better Core Web Vitals scores.",
    installs: "New",
    url: "https://wordpress.org/plugins/optiflow-webp-media/",
    tags: ["Performance", "Media", "WebP"],
  },
  {
    name: "Image Preview for ACF Field",
    description: "Adds visual image previews directly in ACF fields for a better editorial experience when managing media-rich content.",
    installs: "50+",
    url: "https://wordpress.org/plugins/image-preview-for-acf-field/",
    tags: ["ACF", "Media", "UX"],
    role: "Contributor",
  },
];

const PluginsSection = () => {
  return (
    <section id="plugins" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">WordPress Plugins</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Open source <span className="text-gradient">plugins</span> I've built
          </h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Published on WordPress.org — solving real problems for the WordPress community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plugins.map((plugin, i) => (
            <motion.a
              key={plugin.name}
              href={plugin.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-border block"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {plugin.name}
                  </h4>
                  {plugin.role && (
                    <span className="text-xs text-primary font-medium">{plugin.role}</span>
                  )}
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{plugin.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {plugin.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Download className="w-3 h-3" />
                  {plugin.installs}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PluginsSection;
