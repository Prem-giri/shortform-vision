const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-gradient-to-t from-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-xl lg:text-2xl bg-gradient-primary bg-clip-text text-transparent">
              visualsbyprem
            </div>
            <p className="text-muted-foreground text-sm lg:text-base mt-1">
              Creating visual stories that captivate and inspire
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6">
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium">
              Work
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs lg:text-sm">
            © 2024 VisualsByPrem. All rights reserved. | Crafted with passion for visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;