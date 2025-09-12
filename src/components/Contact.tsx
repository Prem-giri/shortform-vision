import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const Contact = () => {
  return <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Let&apos;s Create</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let&apos;s discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <Input placeholder="e.g., Short-form content, Documentary, Presentation" className="bg-background border-border" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Tell me about your project, timeline, and any specific requirements..." className="bg-background border-border h-32" />
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-display font-semibold mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">visualsbyprem@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-muted-foreground text-sm">@visualsbyprem</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">💼</span>
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-muted-foreground text-sm">visualsbyprem</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-secondary border-0">
              <h3 className="text-xl font-display font-semibold mb-4 text-white">
                Project Timeline
              </h3>
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>Short-form content</span>
                  <span>0-1 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Presentation videos</span>
                  <span>2-3 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Documentary editing</span>
                  <span>2-4 weeks</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <div className="text-sm text-white/80">
                  Rush projects available with 24-48 hour turnaround
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;