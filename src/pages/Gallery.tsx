import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dining.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import starterImage from "@/assets/food-starter.jpg";
import mainImage from "@/assets/food-main.jpg";
import dessertImage from "@/assets/food-dessert.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroImage, alt: "Elegant dining setup", category: "Interior" },
    { src: interiorImage, alt: "Restaurant interior", category: "Interior" },
    { src: starterImage, alt: "Appetizer dish", category: "Food" },
    { src: mainImage, alt: "Main course", category: "Food" },
    { src: dessertImage, alt: "Dessert", category: "Food" },
    { src: heroImage, alt: "Fine dining", category: "Food" },
    { src: interiorImage, alt: "Cozy ambiance", category: "Interior" },
    { src: starterImage, alt: "Gourmet starter", category: "Food" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-accent">Gallery</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Take a visual journey through our culinary creations and inviting atmosphere
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 hover-lift aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground mt-2 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience It Yourself
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            These pictures don't do justice to the real experience. Visit us and create your own memories!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
