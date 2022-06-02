import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="#intro">logo</a>
      </span>
      <div className="navigation">
        <span className="">
          <a href="#experience">Experience</a>
        </span>
        <span className="">
          <a href="#contact">Contact</a>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
