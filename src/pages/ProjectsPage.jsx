import { projects } from "../projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "../styles/Project.css";
import { useState } from "react";
export default function ProjectsPage() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const allLanguages = ["Java", "Python", "C", "HTML", "React", "CSS", "JavaScript", "Kotlin"];
  /* 
  toggles filters so you can choose as many or little as youd like
  */
  function toggleFilter(lang) {
    setSelectedFilters(prev =>
      prev.includes(lang)
        ? prev.filter(f => f !== lang)
        : [...prev, lang]
    );
  }
  /*
  gets the list of filtered projects
  */
  const filteredProjects =
    selectedFilters.length === 0
      ? projects
      : projects.filter(project =>
        selectedFilters.every(f => project.languages.includes(f))
      );
  return (

    <div style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      {/* Filter Buttons */}
      <div style={{ marginBottom: "1rem" }}>
        {allLanguages.map(lang => (
          <button
            className={`filter-btn ${selectedFilters.includes(lang) ? "active" : ""
              }`}
            key={lang}
            onClick={() => toggleFilter(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      {filteredProjects.map(p => (
        <ProjectCard
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          languages={p.languages}
        />
      ))}
    </div>
  );
}