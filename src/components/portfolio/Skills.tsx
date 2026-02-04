import { Badge } from "@/components/ui/badge";
import { Wrench, Code2, LineChart, Compass } from "lucide-react";

const skillCategories = [
  {
    icon: Wrench,
    title: "Support Operations",
    skills: ["Problem Management", "Incident Response", "Escalation Management", "ITIL", "KPI/OKR Management"],
    gradient: "from-primary to-accent",
  },
  {
    icon: Code2,
    title: "Technical Stack",
    skills: ["Python", "Node.js", "FastAPI", "Docker", "Nginx", "Playwright", "WebSockets"],
    gradient: "from-accent to-primary",
  },
  {
    icon: LineChart,
    title: "Observability",
    skills: ["Grafana", "Prometheus", "Loki"],
    gradient: "from-primary via-accent to-primary",
  },
  {
    icon: Compass,
    title: "Leadership & Process",
    skills: ["Coaching & Growth Plans", "Runbooks & Knowledge Systems", "Program Management"],
    gradient: "from-accent to-primary",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools I use to solve problems and ship solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-8 hover:glow-sm transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border-border/50 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
