import { ExternalLink, FlaskConical, Briefcase, CheckSquare, ListTodo, Film, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    icon: FlaskConical,
    title: "CrispChecker",
    description: "Automated web health checks using Playwright for monitoring and testing.",
    url: "https://crispchecker.fernandonery.net",
    tech: ["Playwright", "Docker", "Python"],
  },
  {
    icon: Briefcase,
    title: "Crisp Tester",
    description: "Front and back-end to test Crisp functionalities live.",
    url: "https://crisptest.fernandonery.net",
    tech: ["WebSockets", "FastAPI", "Docker"],
  },
  {
    icon: CheckSquare,
    title: "Travel Checklist",
    description: "Packing and trip planning tool for organized travel.",
    url: "https://checklist.fernandonery.net",
    tech: ["React", "Nginx"],
  },
  {
    icon: ListTodo,
    title: "Lista",
    description: "Clean and simple lists & notes.",
    url: "https://lista.fernandonery.net",
    tech: ["Node.js", "Docker"],
  },
  {
    icon: Film,
    title: "Plex Media Server",
    description: "Self-hosted media streaming and management.",
    url: "https://plex.fernandonery.net",
    tech: ["Plex", "Nginx"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Docker containers, Nginx reverse proxy, Cloudflare Tunnel, health checks.",
    tech: ["Docker", "Nginx", "Linux"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Self-Hosted <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production apps I build and maintain—learning by shipping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const CardWrapper = project.url ? 'a' : 'div';
            const wrapperProps = project.url
              ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardWrapper
                key={project.title}
                {...wrapperProps}
                className="group glass-card rounded-2xl p-6 hover:glow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  {project.url && (
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-muted-foreground border-border/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
