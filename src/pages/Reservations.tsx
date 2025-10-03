import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Clock, Users, CalendarDays } from "lucide-react";

const Reservations = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    guests: "",
  });

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.name || !formData.email || !formData.phone || !formData.time || !formData.guests) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would normally send the reservation to your backend
    toast.success("Reservation request submitted! We'll confirm via email shortly.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      time: "",
      guests: "",
    });
    setDate(new Date());
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Make a <span className="text-gradient-accent">Reservation</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Book your table and experience exceptional dining at Flamingo
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Reservation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="12"
                      placeholder="2"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-light text-accent-foreground shadow-elegant"
                    size="lg"
                  >
                    Submit Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Calendar and Info */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Select Date</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero border-none">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-accent-foreground mb-4">
                    Reservation Guidelines
                  </h3>
                  
                  <div className="flex items-start space-x-3">
                    <CalendarDays className="text-accent-foreground mt-1 flex-shrink-0" size={20} />
                    <div className="text-accent-foreground/90">
                      <p className="font-medium">Advance Booking</p>
                      <p className="text-sm">We recommend booking at least 24 hours in advance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-accent-foreground mt-1 flex-shrink-0" size={20} />
                    <div className="text-accent-foreground/90">
                      <p className="font-medium">Grace Period</p>
                      <p className="text-sm">Please arrive within 15 minutes of your reservation time</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="text-accent-foreground mt-1 flex-shrink-0" size={20} />
                    <div className="text-accent-foreground/90">
                      <p className="font-medium">Party Size</p>
                      <p className="text-sm">For groups larger than 12, please call us directly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    For special requests or large parties, please contact us directly.
                  </p>
                  <p className="text-accent font-medium">+94 77 123 4567</p>
                  <p className="text-accent font-medium">info@flamingo.lk</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;
