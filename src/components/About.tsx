import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50M+", label: "Total Views Generated" },
    { number: "3+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const skills = [
    "Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro",
    "Motion Graphics", "Color Grading", "Audio Editing", "Storytelling"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-muted/30 to-background relative">
      <div className="absolute top-32 right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">About</span> <span className="font-light">Apex</span>
            </h2>
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                Apex Edits is a premier video editing firm specializing in creating captivating visual content 
                that drives engagement and delivers measurable results. Our team of skilled editors combines 
                technical expertise with creative storytelling to transform your vision into reality.
              </p>
              <p>
                From viral social media campaigns to professional corporate videos, we handle projects of all 
                scales with precision and creativity. Our cutting-edge techniques and deep understanding of 
                digital platforms ensure your content stands out in today&apos;s competitive landscape.
              </p>
              <p>
                At Apex Edits, we don&apos;t just edit videos – we craft experiences that resonate with your 
                audience and amplify your brand&apos;s message across all digital channels.
              </p>
            </div>

            <div className="mt-6 lg:mt-8">
              <h3 className="text-lg lg:text-xl font-display font-semibold mb-3 lg:mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-secondary/60 text-secondary-foreground rounded-full text-xs lg:text-sm font-medium backdrop-blur-sm border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <Card className="p-8 bg-gradient-card border-border/30 shadow-elegant hover-lift transition-all duration-300">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Proven Results
              </h3>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 lg:p-8 bg-gradient-card border-border/50 shadow-elegant">
              <h3 className="text-lg lg:text-xl font-display font-semibold mb-4 lg:mb-6">Why Choose Apex Edits?</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Professional team delivering quality within tight deadlines</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Expertise across all major platforms and formats</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Comprehensive creative process with client collaboration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Data-driven editing strategies for maximum impact</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;