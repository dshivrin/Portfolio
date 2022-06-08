import { Container } from "./../StyledComponents/Container";

const containerStyles = {
  display: "flex",
  alignContent: "center",
  justifyContent: "space-evenly",
  maxWidth: "900px",
  gap: "25px",
  margin: "0 auto",
};

//For some reason VS code claims 'event' es depricated, so I have to
const OnTitleClick = (event: any) => {
  const paragraphs = document.querySelectorAll<HTMLElement>('[id^="section-"]');
  console.log(paragraphs);
  const selectedSectionId = event.target.id;
  //loop throught and hide/show accordingly:
  paragraphs.forEach((p) => {
    if (p.id.includes(selectedSectionId)) p.style.display = "block";
    else p.style.display = "none";
  });
};

const Experience = () => {
  return (
    <Container id="experience">
      <h1 className="title">Work experience:</h1>
      <div style={containerStyles}>
        <div className="tabs-container">
          <ul>
            <li>
              <button id="Smoove" type="button" onClick={OnTitleClick}>
                Smoove
              </button>
            </li>
            <li>
              <button id="Aeronautics" type="button" onClick={OnTitleClick}>
                Aeronautics
              </button>
            </li>
            <li>
              <button id="Sagramatha" type="button" onClick={OnTitleClick}>
                Sagramatha
              </button>
            </li>
            <li>
              <button id="Niloosoft" type="button" onClick={OnTitleClick}>
                Niloosoft
              </button>
            </li>
            <li>
              <button id="Prior" type="button" onClick={OnTitleClick}>
                Prior Experience
              </button>
            </li>
          </ul>
        </div>
        <div className="content-container">
          <p id="section-Smoove" style={{ display: "block" }}>
            <span className="job-title">Senior Full Stack developer.</span>{" "}
            Moved to my next challange and joined an amazing company in the
            Marketing and Automation world. This time mastering ReactJS, and
            <span>Feb 2020 - May 2022</span>
          </p>
          <p id="section-Aeronautics" style={{ display: "none" }}>
            <span className="job-title">C# Software developer.</span> I took a
            chalange outside of web-development world with a defence contractor.
            Maintained an AngularJS generator application and took part in
            developing the company's next flight simulator.
            <p>August 2018 - Jan 2020</p>
          </p>
          <p id="section-Sagramatha" style={{ display: "none" }}>
            <span className="job-title">MEAN Stack developer.</span> I gladly
            took the opportunity to go all-in with JavaScript! Node.js,
            express.js, Angular 2+, MongoDB and MSSQL. With this well
            established big-data company I was developing a coupons managment
            system for large retailers mainly in the U.S.
            <span>March 2018 - August 2018</span>
          </p>
          <p id="section-Niloosoft" style={{ display: "none" }}>
            <span className="job-title">Junior Full Stack developer</span>. The
            journey begins! Specialized on .NET framework, microservices
            architechture and MSSQL on the back-end. Used AngularJS and Angular
            2, JQuery, Material UI on the front-end. Developed event driven
            applications in the Human Resources wold.
            <span>Jan 2015 - Feb 2018</span>
          </p>
          <p id="section-Prior Experience" style={{ display: "none" }}>
            Prior to software development I was the best tech support engineer
            you can find. I have worked in local ISP support center, soon to
            become a senior support engineer, then shift manager and evetually
            tech support team lead.
          </p>
          <br />
          <p id="section-Prior Experience2" style={{ display: "none" }}>
            As a result I have a wide understanding of networking, routing and
            managment skills.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
