/**
 * Creates the ui for the projects
 */
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ id,title, description, languages }) {
    const navigate = useNavigate();
    console.log("Card ID:", id);
  return (
    
    <div
      onClick={() => navigate(`/projects/${id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>

      <p style={{ marginBottom: "1rem", color: "#555" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {languages.map((lang) => (
          <span
            key={lang}
            style={{
              padding: "0.3rem 0.6rem",
              background: "#eef",
              borderRadius: "6px",
              fontSize: "0.85rem",
            }}
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}
