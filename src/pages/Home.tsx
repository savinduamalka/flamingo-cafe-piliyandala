import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Utensils, Wine } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dining.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const Home = () => {
  const features = [
    {
      icon: <Utensils className="w-8 h-8 text-accent" />,
      title: "Exceptional Cuisine",
      description: "Carefully crafted dishes using the finest ingredients",
    },
    {
      icon: <Wine className="w-8 h-8 text-accent" />,
      title: "BYOB Policy",
      description: "Bring your favorite beverages to complement your meal",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Flexible Hours",
      description: "Open 7 days a week for lunch and dinner",
    },
  ];

  const promotions = [
    {
      title: "Weekday Lunch Special",
      description: "Enjoy 20% off on all lunch items Monday to Friday",
      period: "Mon - Fri, 11AM - 3PM",
    },
    {
      title: "Weekend Family Feast",
      description: "Special family platters perfect for sharing",
      period: "Sat - Sun, All Day",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Flamingo Restaurant Dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Welcome to <span className="text-gradient-accent">Flamingo</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Cafe • Bakery • Lounge
          </p>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Experience exceptional dining in the heart of Piliyandala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-elegant text-lg px-8"
            >
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
            >
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Flamingo?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine casual elegance with exceptional cuisine for an unforgettable dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift bg-card border-border hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-primary mb-6">About Flamingo</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Located in the heart of Piliyandala, Flamingo offers a unique dining experience that combines casual elegance with exceptional cuisine. Our BYOB policy allows you to bring your favorite beverages, making every meal personal and special.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Whether you're here for a casual lunch, a romantic dinner, or a celebration with friends and family, our warm atmosphere and attentive service ensure a memorable experience.
              </p>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-primary">Location</p>
                  <p className="text-muted-foreground">Piliyandala, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-primary">Hours</p>
                  <p className="text-muted-foreground">Mon-Fri: 11AM-10PM | Sat-Sun: 10AM-11PM</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={interiorImage}
                alt="Flamingo Restaurant Interior"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Current Promotions</h2>
            <p className="text-muted-foreground text-lg">
              Check out our special offers and seasonal deals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className="bg-gradient-hero hover-lift hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-accent-foreground mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-accent-foreground/90 mb-4 text-lg">
                    {promo.description}
                  </p>
                  <p className="text-accent-foreground/80 text-sm font-medium">
                    {promo.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Flamingo?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your table today and enjoy an exceptional dining experience
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground shadow-elegant text-lg px-8"
          >
            <Link to="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
