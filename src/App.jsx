import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import projectData from './data.json';
import Layout1 from "./components/layout1/Layout1"
import Layout2 from "./components/layout2/Layout2"
import Layout3 from "./components/layout3/Layout3"

function ProjectGateway() {
  const { name } = useParams();

  // 1. Find the project
  const project = projectData.find(p => 
    p.projectName.toLowerCase().replace(/\s+/g, '-') === name
  );

  if (!project) return <h2>Project Not Found</h2>;

  // 2. Explicitly choose layout based on the JSON 'layout' key
  switch (project.layout) {
    case 'layout1':
      return <Layout1 project={project} />;
    case 'layout2':
      return <Layout2 project={project} />;
    case 'layout3':
      return <Layout3 project={project} />;
    default:
      return <Layout1 project={project} />; // Default fallback
  }
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project/:name" element={<ProjectGateway />} />
        <Route path="/" element={<h1>Home Page: Visit /project/emerald-heights</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;