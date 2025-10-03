import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent! We'll get back to you soon.");
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-gradient-accent">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have a question or special request? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-light text-accent-foreground shadow-elegant"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Visit us, call us, or send us an email. We're here to make your dining experience exceptional.
                </p>
              </div>

              <Card className="shadow-soft">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        123 Main Street<br />
                        Piliyandala<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground">+94 77 123 4567</p>
                      <p className="text-muted-foreground">+94 11 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground">info@flamingo.lk</p>
                      <p className="text-muted-foreground">reservations@flamingo.lk</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 11:00 AM - 10:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-soft overflow-hidden">
                <div className="h-80 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58677045435!2d79.85950899999999!3d6.918886299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0x220b3b50a6b5a8d!2sPiliyandala!5e0!3m2!1sen!2slk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Flamingo Restaurant Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
