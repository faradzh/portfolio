import { Card } from "./Card";

export default function Skills() {
  return (
    <section id="skills" className="mb-[80px] fade-in">
      <h2 className="text-[2.5rem] font-bold text-center mb-[50px] bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>
      <div className="skills-container">
        <div className="glass skill-category">
          <h4>Frontend</h4>
          <div className="skill-tags">
            <Card>
              <span className="py-2! px-4!">React</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">Svelte</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">TypeScript</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">Next.js</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">Tailwind CSS</span>
            </Card>
          </div>
        </div>
        <div className="glass skill-category">
          <h4>Backend</h4>
          <div className="skill-tags">
            <Card>
              <span className="py-2! px-4!">Node.js</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">Python</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">GraphQL</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">PostgreSQL</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">MongoDB</span>
            </Card>
          </div>
        </div>
        <div className="glass skill-category">
          <h4>Cloud & DevOps</h4>
          <div className="skill-tags">
            <Card>
              <span className="py-2! px-4!">AWS</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">Docker</span>
            </Card>
            <Card>
              <span className="py-2! px-4!">CI/CD</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
