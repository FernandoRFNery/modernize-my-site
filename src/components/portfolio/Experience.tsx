import { Briefcase, Cloud, Monitor, Rocket, Settings, TrendingUp, MessageCircle } from "lucide-react";

const experiences = [
  {
    icon: MessageCircle,
    title: "Technical Customer Support Specialist",
    company: "Crisp IM",
    period: "February 2025 – Present",
    highlights: [
      "Provide real-time technical support via chat, troubleshooting platform integrations and APIs at scale",
      "Build internal tools to auto-resolve low-signal chats and score conversation quality",
      "Guide users through automation setups, feature configurations, and platform optimization",
    ],
    impact: "Developing automation to reduce support load while improving response quality",
  },
  {
    icon: Cloud,
    title: "Support Manager, Cloud Migrations",
    company: "e-Core",
    period: "Oct 2022 – Oct 2024 · 2 yrs",
    highlights: [
      "Led team for Enterprise Atlassian cloud migrations, achieving 95%+ CSAT",
      "PM for Backlog Program: 20% ticket reduction in 2 quarters",
      "Fostered team growth via Growth Plans; managed KPIs/OKRs and escalations",
    ],
    impact: "High CSAT while reducing backlog by 20%",
  },
  {
    icon: Monitor,
    title: "IT Manager",
    company: "Dell Technologies",
    period: "Jan 2020 – Oct 2022 · 2 yrs 10 mo",
    highlights: [
      "Managed multi-region teams across BR, MY, IE supporting Sales/OM/Finance apps",
      "Built leadership dashboards (Power BI + Python automation) for real-time decisions",
      "Ensured app stability during peak sales periods",
    ],
    impact: "Data-driven insights that shaped leadership decisions",
  },
  {
    icon: Rocket,
    title: "Application Management Senior Advisor — Team Lead",
    company: "Dell Technologies",
    period: "Oct 2018 – Jan 2020",
    highlights: [
      "Redesigned operations: 70% backlog reduction and faster responses",
      "Primary POC during critical ops (DC maintenance, patching, major sales)",
      "Owned KPI analysis, exec escalations, and career plans",
    ],
    impact: "Cut backlog by 70% via process redesign",
  },
  {
    icon: Settings,
    title: "Application Management Advisor — Team Lead",
    company: "Dell Technologies",
    period: "May 2016 – Oct 2018",
    highlights: [
      "Led L2 app support for Commercial Services; drove critical incident bridges",
      "Americas App Support lead for Black Friday/Cyber Monday",
      "Partnered with PMs/devs to fix production bugs and improve delivery",
    ],
  },
  {
    icon: TrendingUp,
    title: "Application Management Senior Analyst",
    company: "Dell Technologies",
    period: "Jul 2013 – May 2016",
    highlights: [
      "Team lead for Dell Financial Services apps; ensured uptime and reliability",
      "Drove high-priority incident bridges and served on the Process Review Board",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building teams, systems, and solutions that scale
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative pl-12 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-10 h-10 rounded-xl glass-card flex items-center justify-center glow-sm md:-translate-x-1/2 ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <exp.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content card */}
                <div
                  className={`glass-card rounded-2xl p-6 hover:glow-sm transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                    <div className="text-sm text-muted-foreground">{exp.period}</div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {exp.impact && (
                    <div
                      className={`inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium ${
                        index % 2 === 0 ? "md:float-right" : ""
                      }`}
                    >
                      ✨ {exp.impact}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
