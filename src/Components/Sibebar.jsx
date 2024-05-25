export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <button
          className="sidebar-btn"
          onClick={onStartAddProject}
          style={{ width: "100%" }}
        >
          Add Project
        </button>
        <ul className="project-list">
          {projects.map((project) => {
            let buttonStyle = {
              backgroundColor: "gray",
              color: "#fff",
              padding: "10px 15px",
              width: "100%",
              border: "0",
            };

            if (project.id === selectedProjectId) {
              buttonStyle.backgroundColor = "darkgray";
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProject(project.id)}
                  style={buttonStyle}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
