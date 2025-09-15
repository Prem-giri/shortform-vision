import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Short-Form Content",
      description: "Instagram Reels, YouTube Shorts, TikTok videos that grab attention and drive engagement.",
      icon: "📱",
      features: ["Quick cuts & transitions", "Trending audio sync", "Mobile-optimized formats", "High engagement rates"]
    },
    {
      title: "Documentary Editing", 
      description: "Compelling narrative storytelling through professional documentary post-production.",
      icon: "🎬",
      features: ["Narrative structure", "Interview editing", "B-roll integration", "Color grading"]
    },
    {
      title: "Presentation Videos",
      description: "Professional presentations and corporate videos that communicate your message clearly.",
      icon: "💼", 
      features: ["Motion graphics", "Screen recordings", "Voiceover sync", "Brand consistency"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized video editing services designed to elevate your content and maximize engagement
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 lg:p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 group hover:border-primary/30 hover:scale-105">
              <div className="text-3xl lg:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl lg:text-2xl font-display font-semibold mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
              <ul className="space-y-2 lg:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm lg:text-base">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;