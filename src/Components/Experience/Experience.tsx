import "./Experience.scss";

const Experience = () => {
  return (
    <div id="experience" className="container">
      {/* TODO: Animate the title */}
      <h1 className="title">Work experience:</h1>
      <br />
      <div className="workplace">
        <h3>NilooSoft</h3>
        <p>
          <span className="job-title">Junior Full Stack developer</span>. The
          journey begins! Specialized on .NET framework, microservices
          architechture and MSSQL on the back-end. Used AngularJS and Angular 2,
          JQuery, Material UI on the front-end. Developed event driven
          applications in the Human Resources wold.
        </p>
        <p>Jan 2015 - Feb 2018</p>
      </div>
      <div className="workplace">
        <h3>Sagramatha</h3>
        <p>
          <span className="job-title">MEAN Stack developer.</span> I gladly took
          the opportunity to go all-in with JavaScript! Node.js, express.js,
          Angular 2+, MongoDB and MSSQL. With this well established big-data
          company I was developing a coupons managment system for large
          retailers mainly in the U.S.
        </p>
        <p>March 2018 - August 2018</p>
      </div>
      <div className="workplace">
        <h3>Aeronautics</h3>
        <p>
          <span className="job-title">C# Software developer.</span> I took a
          chalange outside of web-development world with a defence contractor.
          Maintained an AngularJS generator application and took part in
          developing the company's next flight simulator.
        </p>
        <p>August 2018 - Jan 2020</p>
      </div>
      <div className="workplace">
        <h3>Smoove</h3>
        <p>
          <span className="job-title">Senior Full Stack developer.</span> Moved
          to my next challange and joined an amazing company in the Marketing
          and Automation world. This time mastering ReactJS, and
        </p>
        <p>Feb 2020 - May 2022</p>
      </div>
    </div>
  );
};

export default Experience;
