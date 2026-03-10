const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Dhaval Vachhani</span>
        <span>WordPress Developer & Project Manager · Ahmedabad, India</span>
      </div>
    </footer>
  );
};

export default Footer;
