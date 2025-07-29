import Image from "next/image";

import { Card } from "./Card";

export default function Projects() {
  return (
    <section id="projects" className="mb-[80px] fade-in">
      <h2 className="text-[2.5rem] font-bold text-center mb-[50px] bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
        Featured Project
      </h2>
      <div className="flex flex-col items-center gap-8">
        <div className="glass p-0 overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
          <div className="project-image flex items-center justify-center text-[3rem] h-[200px]">
            <Image src="/sp.svg" alt="Scrum Poker" width={80} height={45} />
          </div>
          <div className="p-[30px]">
            <h3 className="text-[1.4rem] font-semibold mb-2 text-white">
              Real-time scrum estimation tool:{" "}
              <a
                target="_blank"
                href="https://scrumspoker.com"
                className="text-blue-200 hover:underline"
              >
                https://scrumspoker.com
              </a>
            </h3>
            <p className="mb-6">
              Built a real-time scrum estimation tool for agile teams using Jira
              integration APIs.
              <br />
              Features include selected stories view, collaborative estimation
              and automated synchronization of a final estimate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {[
                "Express",
                "Svelte",
                "Web Sockets",
                "Redis",
                "Mongo DB",
                "Docker",
                "GH Actions",
                "AWS EC2",
              ].map((tech) => (
                <Card key={tech}>
                  <span className="py-2 px-4">{tech}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
