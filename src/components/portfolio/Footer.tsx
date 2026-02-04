import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Fernando Nery</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-primary" />
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/fernandorfnery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/FernandoRFNery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
