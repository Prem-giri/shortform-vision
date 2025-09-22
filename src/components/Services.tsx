import { Card } from "@/components/ui/card";
import { Smartphone, Clapperboard, Monitor, Star, Award, Shield } from "lucide-react";
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
  return <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              Professional Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 lg:mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Video</span>
            <br />
            <span className="text-foreground">Editing Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Transform your raw footage into compelling stories with our specialized editing expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="group relative p-8 lg:p-10 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-700 hover:border-primary/40 hover:-translate-y-2 animate-fade-in overflow-hidden">
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Trust Badge */}
                <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                  {service.badge}
                </div>
                
                {/* Icon Container with Creative Design */}
                <div className="relative z-10 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 border-2 border-primary/20 rounded-3xl group-hover:border-primary/40 transition-colors duration-500"></div>
                    {/* Pulse Effect */}
                    <div className="absolute -inset-1 bg-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 lg:mb-5 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base lg:text-lg font-light">
                    {service.description}
                  </p>
                  
                  {/* Trust Indicator */}
                  <div className="flex items-center mb-6 text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg">
                    <service.trustIndicator.icon className="w-4 h-4 mr-2" />
                    {service.trustIndicator.text}
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-base lg:text-lg group-hover:translate-x-1 transition-transform duration-300" style={{
                    transitionDelay: `${featureIndex * 50}ms`
                  }}>
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-foreground/90 font-medium">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary group-hover:w-full transition-all duration-700"></div>
              </Card>;
        })}
        </div>
        
        {/* Call to Action */}
        
      </div>
    </section>;
};
export default Services;