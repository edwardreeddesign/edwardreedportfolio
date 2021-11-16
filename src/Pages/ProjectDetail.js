import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//Data
import { ProjectState } from "../Data/projectState";
//Styles
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, lineAnim } from "../UI/Animations";
//Components
import ProjectImage from "../Components/ProjectDetail/ProjectImage";
import ProjectDescription from "../Components/ProjectDetail/ProjectDescription";

import ProjectBranding from "../Components/ProjectDetail/ProjectBranding";
import ProjectGroupImg from "../Components/ProjectDetail/ProjectGroupImg";

import ProjectHero from "../Components/ProjectDetail/ProjectHero";
import ProjectStyles from "../Components/ProjectDetail/ProjectStyles";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);
  return (
    <Wrapper>
      {project && (
        <Main
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.h1 variants={fade}>{project.title}</motion.h1>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <ProjectHero
            img={project.mainImg}
            alt={project.alt}
            role={project.role}
            tech={project.tech}
          />
          <ProjectDescription
            desc={project.longDescription}
            visit={project.visit}
          />

          <Branding>
            <h4>Analysis & Creation</h4>
            {project.creation.map((create, idx) => (
              <ProjectBranding
                key={idx}
                title={create.title}
                desc1={create.desc1}
                desc2={create.desc2}
              />
            ))}
            <ProjectGroupImg img={project.groupImg}>
              <img src={project.groupImg} alt="group shot" />
            </ProjectGroupImg>
            {project.styles.map((style, idx) => (
              <ProjectStyles
                key={idx}
                colors={style.colors}
                fonts={style.fonts}
              />
            ))}
          </Branding>

          <ProjectImage img={project.design} />
        </Main>
      )}
    </Wrapper>
  );
};

const Branding = styled(motion.div)`
  padding: 2rem 0;
  background-color: var(--clr-white);

  h4 {
    color: var(--clr-dark);
    text-align: center;
    letter-spacing: 0.3rem;

    margin-bottom: 2rem;
  }
`;
const Main = styled(motion.div)`
  overflow: hidden;
  h1 {
    margin: 1rem 2rem;
  }
  .line {
    height: 3px;
    background-color: var(--clr-accent);
    margin-bottom: 2rem;
  }
`;

const Wrapper = styled(motion.div)``;

export default ProjectDetail;
