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
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized video editing services tailored to your content needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-card transition-all duration-300 group hover:border-primary/50">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
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