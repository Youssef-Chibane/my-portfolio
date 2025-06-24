import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Admin Dashboard",
      description:
        "A responsive admin dashboard built with shadcn/ui, featuring user management, analytics, and real-time data updates.",
      technologies: ["Next.js", "TypeScript", "Shadcn/ui", "Tailwind CSS"],
      liveUrl: "https://chibane-shadcn-dashboard.netlify.app/",
      githubUrl: "https://github.com/Youssef-Chibane/shadcn-dashboard",
    },
    {
      title: "Saas Landing Page",
      description:
        "A modern SaaS landing page with a clean design, smooth animations, and a responsive layout.",
      technologies: ["React", "Tailwind CSS", "Zustand"],
      liveUrl: "https://edgai.netlify.app/",
      githubUrl: "https://github.com/Youssef-Chibane/saas-landing-page",
    },
    {
      title: "Real Estate App",
      description:
        "A real estate application with smooth animation and responsive design.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "React Toastify",
        "Web3Form",
      ],
      liveUrl: "https://estate-v2.netlify.app/",
      githubUrl: "https://github.com/Youssef-Chibane/estate-v2",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-2">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
