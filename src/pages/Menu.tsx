import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import starterImage from "@/assets/food-starter.jpg";
import mainImage from "@/assets/food-main.jpg";
import dessertImage from "@/assets/food-dessert.jpg";

const Menu = () => {
  const menuCategories = {
    starters: [
      {
        name: "Bruschetta Trio",
        description: "Classic tomato basil, mushroom truffle, and olive tapenade",
        price: "LKR 1,200",
        image: starterImage,
      },
      {
        name: "Crispy Calamari",
        description: "Tender squid rings with lemon aioli and sweet chili sauce",
        price: "LKR 1,500",
        image: starterImage,
      },
      {
        name: "Caesar Salad",
        description: "Crisp romaine, parmesan, croutons, and classic caesar dressing",
        price: "LKR 950",
        image: starterImage,
      },
      {
        name: "Soup of the Day",
        description: "Chef's special creation, served with artisan bread",
        price: "LKR 750",
        image: starterImage,
      },
    ],
    mains: [
      {
        name: "Grilled Salmon",
        description: "Atlantic salmon with roasted vegetables and lemon butter sauce",
        price: "LKR 2,800",
        image: mainImage,
      },
      {
        name: "Beef Tenderloin",
        description: "Prime beef with mushroom sauce, mashed potatoes, and seasonal greens",
        price: "LKR 3,500",
        image: mainImage,
      },
      {
        name: "Chicken Parmigiana",
        description: "Breaded chicken breast with marinara, mozzarella, and pasta",
        price: "LKR 2,200",
        image: mainImage,
      },
      {
        name: "Vegetarian Risotto",
        description: "Creamy arborio rice with seasonal vegetables and parmesan",
        price: "LKR 1,800",
        image: mainImage,
      },
      {
        name: "Lamb Chops",
        description: "Grilled lamb chops with rosemary jus and root vegetables",
        price: "LKR 3,200",
        image: mainImage,
      },
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
        price: "LKR 850",
        image: dessertImage,
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with mascarpone and coffee-soaked ladyfingers",
        price: "LKR 750",
        image: dessertImage,
      },
      {
        name: "Crème Brûlée",
        description: "Silky vanilla custard with caramelized sugar crust",
        price: "LKR 800",
        image: dessertImage,
      },
      {
        name: "Fruit Tart",
        description: "Buttery pastry with pastry cream and fresh seasonal fruits",
        price: "LKR 700",
        image: dessertImage,
      },
    ],
    beverages: [
      {
        name: "Fresh Juices",
        description: "Orange, mango, pineapple, or mixed fruit",
        price: "LKR 450",
      },
      {
        name: "Iced Coffee",
        description: "Rich espresso over ice with your choice of milk",
        price: "LKR 500",
      },
      {
        name: "Mocktails",
        description: "Selection of non-alcoholic cocktails",
        price: "LKR 650",
      },
      {
        name: "Soft Drinks",
        description: "Coke, Sprite, Fanta, or bottled water",
        price: "LKR 300",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-accent">Menu</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes crafted with the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="starters" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto bg-muted">
              <TabsTrigger value="starters" className="text-base py-3">
                Starters
              </TabsTrigger>
              <TabsTrigger value="mains" className="text-base py-3">
                Mains
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-base py-3">
                Desserts
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-base py-3">
                Beverages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="starters" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.starters.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-lift hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                        <span className="text-accent font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mains" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.mains.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-lift hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                        <span className="text-accent font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.desserts.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-lift hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                        <span className="text-accent font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {menuCategories.beverages.map((item, index) => (
                  <Card
                    key={index}
                    className="hover-lift hover:shadow-elegant transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                        <span className="text-accent font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* BYOB Notice */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-hero border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-accent-foreground mb-4">
                  BYOB Policy
                </h3>
                <p className="text-accent-foreground/90 text-lg">
                  Feel free to bring your favorite wine or beverages to complement your meal.
                  No corkage fee applied!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
