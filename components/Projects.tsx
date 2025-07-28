export default function Projects() {
  return (
    <section id="projects" className="mb-[80px] fade-in">
      <h2 className="text-[2.5rem] font-bold text-center mb-[50px] bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="projects-grid">
        <div className="glass project-card">
          <div className="project-image">🚀</div>
          <div className="project-content">
            <h3 className="project-title">AI-Powered Analytics Dashboard</h3>
            <p>
              Built a real-time analytics platform using React, D3.js, and
              machine learning APIs. Features include predictive modeling,
              interactive visualizations, and automated reporting.
            </p>
          </div>
        </div>
        <div className="glass project-card">
          <div className="project-image">📱</div>
          <div className="project-content">
            <h3 className="project-title">Cross-Platform Mobile App</h3>
            <p>
              Developed a React Native application with offline-first
              architecture, real-time synchronization, and advanced state
              management using Redux Toolkit.
            </p>
          </div>
        </div>
        <div className="glass project-card">
          <div className="project-image">🌐</div>
          <div className="project-content">
            <h3 className="project-title">Microservices Architecture</h3>
            <p>
              Designed and implemented a scalable microservices ecosystem using
              Node.js, Docker, and Kubernetes, serving 100k+ daily active users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
