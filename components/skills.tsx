import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "NextJS",
        "Tailwind CSS",
        "Bootstrap CSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "PHP", "Django", "Laravel", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "VS Code", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-2">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
