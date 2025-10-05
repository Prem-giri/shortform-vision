import { Card } from "@/components/ui/card";
import { Smartphone, Clapperboard, Monitor, Star, Award, Shield } from "lucide-react";
import Section3DBackground from "./Section3DBackground";
const Services = () => {
  const services = [{
    title: "Short-Form Content",
    description: "Instagram Reels, YouTube Shorts, TikTok videos that grab attention and drive engagement.",
    icon: Smartphone,
    badge: "2M+ Views Generated",
    features: ["Quick cuts & transitions", "Trending audio sync", "Mobile-optimized formats", "High engagement rates"],
    trustIndicator: {
      icon: Star,
      text: "98% Client Satisfaction"
    }
  }, {
    title: "Documentary Editing",
    description: "Compelling narrative storytelling through professional documentary post-production.",
    icon: Clapperboard,
    badge: "Award-Winning Quality",
    features: ["Narrative structure", "Interview editing", "B-roll integration", "Color grading"],
    trustIndicator: {
      icon: Award,
      text: "Film Festival Featured"
    }
  }, {
    title: "Presentation Videos",
    description: "Professional presentations and corporate videos that communicate your message clearly.",
    icon: Monitor,
    badge: "Corporate Trusted",
    features: ["Motion graphics", "Screen recordings", "Voiceover sync", "Brand consistency"],
    trustIndicator: {
      icon: Shield,
      text: "100% Professional"
    }
  }];
  return <section id="services" className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* 3D Background */}
      <Section3DBackground />
      
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/20">
              Professional Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight px-4">
            <span className="text-gradient">Expert Video</span>
            <br />
            <span className="text-foreground font-light">Editing Solutions</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-4">
            Elevate your content with professional editing that tells your story beautifully
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="group relative p-6 sm:p-8 lg:p-10 bg-card/60 backdrop-blur-sm border-border/30 hover:shadow-elegant hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 hover-lift animate-fade-in overflow-hidden">
                {/* Subtle Card Enhancement */}
                <div className="absolute inset-0 bg-gradient-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Trust Badge */}
                <div className="absolute top-6 right-6 bg-primary/10 text-primary text-xs font-medium px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
                  {service.badge}
                </div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-5 group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg font-light">
                    {service.description}
                  </p>
                  
                  {/* Trust Indicator */}
                  <div className="flex items-center mb-6 text-sm font-medium text-primary bg-primary/8 px-4 py-3 rounded-xl border border-primary/15">
                    <service.trustIndicator.icon className="w-4 h-4 mr-2" />
                    {service.trustIndicator.text}
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-foreground/70 uppercase tracking-wide">
                      Specializations
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-base group-hover:translate-x-1 transition-transform duration-300" style={{
                    transitionDelay: `${featureIndex * 50}ms`
                  }}>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-foreground/85 font-light">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
                
                {/* Subtle Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
              </Card>;
        })}
        </div>
        
        {/* Call to Action */}
        
      </div>
    </section>;
};
export default Services;