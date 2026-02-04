import { ArrowDown, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: TrendingUp, value: "15+", label: "Years in Support & Leadership" },
  { icon: Sparkles, value: "95%+", label: "CSAT on Cloud Migrations" },
  { icon: Zap, value: "-70%", label: "Backlog Reduction" },
];

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Technical Leader & Builder</span>
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            I run toward{" "}
            <span className="text-gradient">messy problems</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            15 years transforming chaos into clarity. Support operations expert, automation builder, 
            and team leader who proves impact with data, not vibes.
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="https://www.linkedin.com/in/fernandorfnery" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-sm text-lg px-8 py-6">
                Connect on LinkedIn
              </Button>
            </a>
            <a href="#experience">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border/50 hover:bg-muted">
                View Experience
              </Button>
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center hover:glow-sm transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
