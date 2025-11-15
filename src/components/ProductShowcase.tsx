import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import rydeshareImg from "@/assets/rydeshare-app.jpg";
import gymTrackerImg from "@/assets/gym-tracker-app.jpg";
import dentAssistImg from "@/assets/dent-assist-app.jpg";

const products = [
  {
    name: "Rydeshare",
    description: "Modern ride-sharing platform connecting riders and drivers with real-time tracking, secure payments, and seamless user experience.",
    image: rydeshareImg,
    url: "https://rydeshare.club/",
    status: "Live",
    tags: ["Ride Sharing", "Mobile App", "Real-time"],
  },
  {
    name: "Gym Tracker",
    description: "Comprehensive fitness tracking application helping users monitor workouts, track progress, and achieve their fitness goals.",
    image: gymTrackerImg,
    status: "Live",
    tags: ["Fitness", "Health", "Analytics"],
  },
  {
    name: "Dent Assist",
    description: "Complete dental practice management system for medical professionals, featuring patient records, appointment scheduling, and treatment tracking.",
    image: dentAssistImg,
    status: "Live",
    tags: ["Healthcare", "Medical", "Practice Management"],
  },
  {
    name: "Project Alpha",
    description: "Revolutionary new application currently in development. Stay tuned for an announcement that will transform the industry.",
    status: "Coming Soon",
    tags: ["Innovation", "AI-Powered", "Enterprise"],
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Applications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge applications designed to solve real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.image && (
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === "Live" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-accent/20 text-accent"
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {product.url && (
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10 group"
                    asChild
                  >
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      Visit App
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
