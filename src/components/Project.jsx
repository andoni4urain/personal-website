
export default function Project({ title, description, tech, github, demo, image }) {
  return (
    <div className="project-card">
      {/* Left side: body */}
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <h3 className="tech-header">Technology</h3>
        <div className="project-tech">
          {tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-actions">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">Live Demo</a>
          )}
        </div>
      </div>

      {/* Right side: thumbnail */}
      {image && (
        <img className="project-thumb" src={image} alt={`${title} screenshot`} />
      )}
    </div>
  );
}
