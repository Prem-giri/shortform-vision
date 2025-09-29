import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // Create WhatsApp message with form data
      const whatsappMessage = `
New Project Inquiry from Website:

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType || "Not specified"}

Message:
${formData.message}

Sent from: ${window.location.origin}
Time: ${new Date().toLocaleString()}
      `.trim();

      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/919310665426?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Show success message
      toast({
        title: "Message sent!",
        description: "You'll be redirected to WhatsApp to complete sending the message."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Let&apos;s Create</span> <span className="font-light">Together</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Ready to transform your vision into compelling visual stories?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="p-8 bg-card/60 border-border/30 shadow-elegant backdrop-blur-sm hover-lift transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Name</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="bg-background/50 border-border/50 focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Email</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className="bg-background/50 border-border/50 focus:border-primary transition-colors" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Project Type</label>
                <Input name="projectType" value={formData.projectType} onChange={handleInputChange} placeholder="e.g., Short-form content, Documentary, Presentation" className="bg-background/50 border-border/50 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Message</label>
                <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project, timeline, and any specific requirements..." className="bg-background/50 border-border/50 focus:border-primary transition-colors h-32 resize-none" required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-6 text-base font-semibold">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6 lg:space-y-8">
            <Card className="p-8 bg-card/60 border-border/30 shadow-elegant backdrop-blur-sm hover-lift transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">Quick Connect</h3>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex items-center space-x-3 lg:space-x-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg lg:text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm lg:text-base">Email</div>
                    <div className="text-muted-foreground text-xs lg:text-sm">visualsbyprem@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg lg:text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm lg:text-base">WhatsApp</div>
                    <div className="text-muted-foreground text-xs lg:text-sm">+91 9310665426</div>
                  </div>
                </div>
                
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/30 shadow-elegant hover-lift transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">
                Project Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border/20">
                  <span className="text-base">Short-form content</span>
                  <span className="text-base font-medium text-primary">24-48 hours</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border/20">
                  <span className="text-base">Presentation videos</span>
                  <span className="text-base font-medium text-primary">2-3 days</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border/20">
                  <span className="text-base">Documentary editing</span>
                  <span className="text-base font-medium text-primary">2-4 weeks</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary text-center font-medium">
                  🚀 Priority service available for urgent projects
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;