import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Portfolio = () => {
  const portfolioItems = [{
    category: "Short-Form",
    title: "Instagram Reel Campaign",
    description: "Viral marketing campaign that gained 2M+ views",
    thumbnail: "🎯",
    stats: "2M+ views"
  }, {
    category: "Documentary",
    title: "Corporate Story",
    description: "Brand documentary showcasing company culture",
    thumbnail: "🏢",
    stats: "Featured at film festival"
  }, {
    category: "Presentation",
    title: "Product Launch Video",
    description: "Professional product demonstration and features",
    thumbnail: "🚀",
    stats: "95% completion rate"
  }, {
    category: "Short-Form",
    title: "Travel Reel Series",
    description: "Cinematic travel content for tourism brand",
    thumbnail: "✈️",
    stats: "500K+ engagement"
  }, {
    category: "Documentary",
    title: "Artist Profile",
    description: "Creative documentary about local artist journey",
    thumbnail: "🎨",
    stats: "Award winning"
  }, {
    category: "Presentation",
    title: "Educational Series",
    description: "Multi-part educational content for online course",
    thumbnail: "📚",
    stats: "10K+ students"
  }];
  return <section id="work" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Featured Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects across different video formats and styles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => <Card key={index} className="group cursor-pointer bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden hover:border-primary/50">
              <div className="aspect-video bg-gradient-secondary flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                {item.thumbnail}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.stats}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Portfolio;