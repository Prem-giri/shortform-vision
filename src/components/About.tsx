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
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">About</span> Prem
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Passionate video editor with a keen eye for storytelling and visual aesthetics. 
                I specialize in creating engaging content that resonates with audiences across 
                all platforms.
              </p>
              <p>
                From viral social media content to compelling documentaries, I bring technical 
                expertise and creative vision to every project. My goal is to transform raw 
                footage into powerful narratives that captivate and inspire.
              </p>
              <p>
                I stay current with the latest trends and techniques in video editing, ensuring 
                your content stands out in today&apos;s competitive digital landscape.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-secondary border-0">
              <h3 className="text-2xl font-display font-bold text-center mb-8 text-white">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-display font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-display font-semibold mb-4">Why Choose Me?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Quick turnaround times without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Deep understanding of platform-specific requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Collaborative approach with unlimited revisions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Results-driven editing focused on engagement</span>
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