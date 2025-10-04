import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 animate-gradient"></div>
      
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Professional video editing workspace showcasing creativity and expertise" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90"></div>
      </div>
      
      {/* Moving Particles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-accent/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 lg:space-y-12">
          <div className="animate-scale-in">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="text-sm font-medium text-primary bg-primary/10 px-6 py-3 rounded-full border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5">
                ✨ Professional Video Editing
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-gradient animate-slide-in-left">
                Crafting Visual
              </span>
              <br />
              <span className="text-foreground font-light animate-slide-in-right">Excellence</span>
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-delay backdrop-blur-sm">
            Transform your vision into compelling stories with professional video editing 
            that captivates audiences and delivers measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center pt-4 animate-fade-in-delay" style={{animationDelay: '0.5s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-lg px-10 py-6 font-medium rounded-lg hover:scale-105 backdrop-blur-sm"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🎬 View Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg px-10 py-6 font-medium rounded-lg backdrop-blur-md hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Start Project
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