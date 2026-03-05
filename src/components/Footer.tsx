const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhaval Vachhani. Built with passion for WordPress.
        </span>
        <span className="text-xs text-muted-foreground">
          Sr. WordPress Developer · Ahmedabad, India
        </span>
      </div>
    </footer>
  );
};

export default Footer;
