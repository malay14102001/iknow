import { context } from "@/context/context";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const { modalToggle, setServiceModal } = useContext(context);

  useEffect(() => {

    const fetchSkills = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');

        setSkills(response.data.user.skills);
      } catch (error) {
        console.error('Error fetching skills:', error.message);
      }
    };


    fetchSkills();
  }, []);

  return (
    <div className="iknow_tm_services">
      <div className="iknow_tm_main_title">
        <span>Skills</span>
        <h3>Developing Expertise</h3>
      </div>
      <div className="service_list">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="list_inner">
                <span >
                  <img
                    className="svg"
                    src={skill.image.url}
                    alt="Skill Icon"
                    style={{ height: '100px', width: '100px' }}
                  />
                </span>
                <h3 className="title">{skill.name}</h3>
                <p className="text">{skill.description}</p>

                <p className="percentage">Percentage: {skill.percentage}%</p>
                <a
                  className="iknow_tm_full_link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setServiceModal(skill);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
