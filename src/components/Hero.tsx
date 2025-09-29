import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Professional video editing workspace showcasing creativity and expertise" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 lg:space-y-12">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Professional Video Editing
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-gradient">
                Crafting Visual
              </span>
              <br />
              <span className="text-foreground font-light">Excellence</span>
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-delay">
            Transform your vision into compelling stories with professional video editing 
            that captivates audiences and delivers measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center pt-4 animate-fade-in-delay">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover:shadow-elegant transition-all duration-300 text-lg px-10 py-6 font-medium rounded-lg"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 text-lg px-10 py-6 font-medium rounded-lg backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Project
            </Button>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-card/20 animate-float">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;