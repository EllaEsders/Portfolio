import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ella Esders</h1>
      <p>Hi, my name is Ella. I am a Computer Science student who is passionate about software development, problem solving
        and building projects that combine technical depth with practical applications. My experience includes full-stack development,
        data structures, mobile development, and database systems. This portfolio showcases projects that reflect my interests in software engineering and continuous learning. </p>

      <button  className="primary-btn" onClick={() => navigate("/ProjectsPage")}> View Projects </button>
    </div>
  );
}
