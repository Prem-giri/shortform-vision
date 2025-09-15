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
    <section id="about" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">About</span> Prem
            </h2>
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                Passionate video editor with a keen eye for storytelling and visual aesthetics. 
                I specialize in creating engaging content that resonates with audiences across 
                all platforms and drives real results.
              </p>
              <p>
                From viral social media content to compelling documentaries, I bring technical 
                expertise and creative vision to every project. My goal is to transform raw 
                footage into powerful narratives that captivate and inspire action.
              </p>
              <p>
                I stay current with the latest trends and techniques in video editing, ensuring 
                your content stands out in today&apos;s competitive digital landscape.
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
            <Card className="p-6 lg:p-8 bg-gradient-secondary border-0 shadow-elegant">
              <h3 className="text-xl lg:text-2xl font-display font-bold text-center mb-6 lg:mb-8 text-white">
                Proven Results
              </h3>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-display font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-white/80 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 lg:p-8 bg-gradient-card border-border/50 shadow-elegant">
              <h3 className="text-lg lg:text-xl font-display font-semibold mb-4 lg:mb-6">Why Choose Me?</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Quick turnaround times without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Deep understanding of platform-specific requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Collaborative approach with unlimited revisions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm lg:text-base">Results-driven editing focused on engagement</span>
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