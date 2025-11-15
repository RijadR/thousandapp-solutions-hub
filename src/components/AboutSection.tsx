import { Code2, Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Expert Development",
    description: "Cutting-edge technologies and best practices to build scalable, performant applications",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodology ensuring rapid development without compromising quality",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces that users love, backed by thorough UX research",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Leveraging the latest technologies to create groundbreaking solutions",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with creative innovation to deliver exceptional digital products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
