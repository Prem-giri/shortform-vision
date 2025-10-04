import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Play } from "lucide-react";
import { useState } from "react";

// Import portfolio images
import instagramReelImage from "@/assets/portfolio-instagram-reel.jpg";
import corporateStoryImage from "@/assets/portfolio-corporate-story.jpg";
import leadGenerationImage from "@/assets/portfolio-lead-generation.jpg";
import travelReelImage from "@/assets/portfolio-travel-reel.jpg";
import documentaryEditsImage from "@/assets/portfolio-documentary-edits.jpg";
import educationalSeriesImage from "@/assets/portfolio-educational-series.jpg";
const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  const portfolioItems = [{
    category: "Short-Form",
    title: "Instagram Reel Campaign",
    description: "Viral marketing campaign that gained 2M+ views",
    thumbnail: instagramReelImage,
    stats: "2M+ views",
    videos: [
      { title: "Main Campaign Video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Behind the Scenes", url: "https://www.w3schools.com/html/movie.mp4" }
    ]
  }, {
    category: "Documentary",
    title: "Corporate Story",
    description: "Brand documentary showcasing company culture",
    thumbnail: corporateStoryImage,
    stats: "Featured at film festival",
    videos: [
      { title: "Full Documentary", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Trailer", url: "https://www.w3schools.com/html/movie.mp4" }
    ]
  }, {
    category: "Presentation",
    title: "Lead Generation Video",
    description: "High-converting video content for sales funnels",
    thumbnail: leadGenerationImage,
    stats: "45% conversion rate",
    videos: [
      { title: "Sales Funnel Video", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  }, {
    category: "Short-Form",
    title: "Travel Reel Series",
    description: "Cinematic travel content for tourism brand",
    thumbnail: travelReelImage,
    stats: "500K+ engagement",
    videos: [
      { title: "Episode 1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Episode 2", url: "https://www.w3schools.com/html/movie.mp4" },
      { title: "Episode 3", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  }, {
    category: "Documentary",
    title: "Documentary Edits",
    description: "Professional documentary editing and storytelling",
    thumbnail: documentaryEditsImage,
    stats: "Award winning",
    videos: [
      { title: "Documentary Showcase", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  }, {
    category: "Presentation",
    title: "Educational Series",
    description: "Multi-part educational content for online course",
    thumbnail: educationalSeriesImage,
    stats: "10K+ students",
    videos: [
      { title: "Course Introduction", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Module 1", url: "https://www.w3schools.com/html/movie.mp4" },
      { title: "Module 2", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  }];

  const handleVideoSelect = (item: any) => {
    setSelectedItem(item);
    setSelectedVideo(item.videos[0].url);
  };
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
          {portfolioItems.map((item, index) => (
            <Sheet key={index}>
              <SheetTrigger asChild>
                <Card className="group cursor-pointer bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden hover:border-primary/50" onClick={() => handleVideoSelect(item)}>
                  <div className="aspect-video bg-gradient-secondary group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
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
                </Card>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-4xl">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-display">{selectedItem?.title}</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {selectedItem && (
                    <>
                      <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                        <video 
                          key={selectedVideo}
                          controls 
                          className="w-full h-full"
                          src={selectedVideo}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      
                      {selectedItem.videos.length > 1 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Choose Video:</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedItem.videos.map((video: any, videoIndex: number) => (
                              <Button
                                key={videoIndex}
                                variant={selectedVideo === video.url ? "default" : "outline"}
                                onClick={() => setSelectedVideo(video.url)}
                                className="justify-start"
                              >
                                <Play className="w-4 h-4 mr-2" />
                                {video.title}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{selectedItem.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-primary font-medium">{selectedItem.category}</span>
                          <span className="text-sm text-muted-foreground">{selectedItem.stats}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Portfolio;