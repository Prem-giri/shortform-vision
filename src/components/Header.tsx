import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="font-display font-bold text-xl lg:text-2xl bg-gradient-primary bg-clip-text text-transparent">
            visualsbyprem
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#work" className="text-foreground/80 hover:text-primary transition-colors text-sm lg:text-base font-medium">
              Work
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors text-sm lg:text-base font-medium">
              About
            </a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors text-sm lg:text-base font-medium">
              Services
            </a>
            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium px-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </nav>
          
          <Button variant="ghost" size="sm" className="md:hidden p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;