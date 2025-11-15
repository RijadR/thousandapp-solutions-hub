import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Build Your
            <br />
            <span className="text-gradient">Next Big Idea?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate to turn your vision into a stunning digital reality. 
            Get in touch with our team today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold px-8 group"
              asChild
            >
              <a href="http://thousandappsolutions.com/login">
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2024 Thousand App Solutions. Transforming ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
