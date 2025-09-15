import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        variant: "destructive",
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
        description: "You'll be redirected to WhatsApp to complete sending the message.",
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
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="py-20 px-6 bg-secondary/20">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    className="bg-background border-border" 
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    className="bg-background border-border" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <Input 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  placeholder="e.g., Short-form content, Documentary, Presentation" 
                  className="bg-background border-border" 
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and any specific requirements..." 
                  className="bg-background border-border h-32" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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