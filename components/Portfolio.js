import { context } from "@/context/context";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { modalToggle, setServiceModal } = useContext(context);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const reversedProjects = response.data.user.projects.reverse();
        setProjects(reversedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <span>Projects</span>
      <h3>Explore My Work</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '300px', flexBasis: '30%' }}>
            <h3>{project.title}</h3>
            <img
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
              src={project.image.url}
              alt="Project Image"
            />
            <p>{project.description}</p>
            <p>Tech Stack:</p>
            <ul style={{ display: 'inline', listStyle: 'none', padding: 0 }}>
              {project.techStack.map((techSkill, techIndex) => (
                <li key={techIndex} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '5px' }}>{techSkill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
