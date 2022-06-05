
import { Container } from "../StyledComponents/Container";

const Projects = () =>{
  return (
    <Container>
      <p>
      Here you can see some of my "pet projects". I  
      </p>
      {/* Upload this website to github and add a link here */}
      <div className="project">
        This site
      </div>
      {/* Game of life clock will be added soon */}
      <div className="project">
        Clock project
      </div>
      {/*  */}
      <div className="project">
        Some Arduino
      </div>
    </Container>
  );
}

export default Projects;