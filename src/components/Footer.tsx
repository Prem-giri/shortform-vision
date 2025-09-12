const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-display font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              visualsbyprem
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              Creating visual stories that captivate
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors">
              Work
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 VisualsByPrem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;