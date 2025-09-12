import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Video editing workspace" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Visual Stories
            </span>
            <br />
            <span className="text-foreground">That Captivate</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional video editor specializing in short-form content, documentaries, 
            and presentations that leave lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/919310665426?text=Hi%20Prem,%20I%20would%20like%20to%20discuss%20a%20video%20editing%20project', '_blank')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;