/**
 * page to display the details of the project when clicked into
 */
import { useParams } from "react-router-dom";
import { projects } from "../projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
const project = projects.find(p => p.id === id);


  if (!project) return <h2>Project not found</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h3>Languages</h3>
      <ul>
        {project.languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}
