import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const projectText = `I currently have two projects as of right now. The first project is what you are viewing right now. This project is a personal portfolio website built using React, Node.js, and JavaScript. It showcases my skills, projects, and experiences in an interactive and visually appealing manner. The website is designed to provide visitors with a comprehensive overview of my work and abilities. I am also currently developing a top-down 2D RPG using the Unity game engine.This passion project allows me to enhance my C# skills while creating an immersive gaming experience. Both projects reflect my commitment to excellence and demonstrate my dedication to continuous learning and pushing boundaries in the digital realm.`;

export const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'React, Node.js, Javascript, Docker',
      imgUrl: projImg1,
    },
    {
      title: 'Top Down 2D RPG',
      description: '(Coming Soon)',
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>{projectText}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center align-items-center">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
