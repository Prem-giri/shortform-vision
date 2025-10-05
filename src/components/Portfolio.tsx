import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Play } from "lucide-react";
import { useState } from "react";
import Section3DBackground from "./Section3DBackground";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    category: "Instagram Reel",
    title: "Instagram Reel Campaign",
    description: "Viral marketing campaign that gained 2M+ views",
    thumbnail: instagramReelImage,
    stats: "2M+ views",
    videos: [
      { title: "Main Campaign Video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Behind the Scenes", url: "https://www.w3schools.com/html/movie.mp4" }
    ]
  }, {
    category: "Brand Story",
    title: "Corporate Story",
    description: "Brand documentary showcasing company culture",
    thumbnail: corporateStoryImage,
    stats: "Featured at film festival",
    videos: [
      { title: "Full Documentary", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Trailer", url: "https://www.w3schools.com/html/movie.mp4" }
    ]
  }, {
    category: "Lead Generation",
    title: "Lead Generation Video",
    description: "High-converting video content for sales funnels",
    thumbnail: leadGenerationImage,
    stats: "45% conversion rate",
    videos: [
      { title: "Sales Funnel Video", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  }, {
    category: "Travel Content",
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
    category: "E-Learning",
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
  return <section id="work" className="py-20 px-6 bg-secondary/20 relative overflow-hidden">
      {/* 3D Background */}
      <Section3DBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Featured Work</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of recent projects across different video formats and styles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => {
            const PortfolioCard = () => {
              const { ref, isVisible } = useScrollAnimation(0.1);
              
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Sheet key={index}>
                    <SheetTrigger asChild>
                      <Card className="group cursor-pointer bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden hover:border-primary/50" onClick={() => handleVideoSelect(item)}>
                        <motion.div 
                          className="aspect-video bg-gradient-secondary relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-black/20 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Play className="w-12 h-12 text-white" />
                            </motion.div>
                          </motion.div>
                        </motion.div>
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
                            <motion.div 
                              className="aspect-video w-full bg-black rounded-lg overflow-hidden"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <video 
                                key={selectedVideo}
                                controls 
                                className="w-full h-full"
                                src={selectedVideo}
                              >
                                Your browser does not support the video tag.
                              </video>
                            </motion.div>
                            
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
                </motion.div>
              );
            };
            
            return <PortfolioCard key={index} />;
          })}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Portfolio;