import { Card } from "./Card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Svelte", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "GraphQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="mb-[80px] fade-in">
      <h2 className="text-[2.5rem] font-bold text-center mb-[50px] bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass p-[30px] text-center">
            <h4 className="text-[1.3rem] mb-[20px]">{category.title}</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {category.skills.map((skill) => (
                <Card key={skill}>
                  <span className="py-2 px-4">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
