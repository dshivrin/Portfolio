import "./Footer.scss";

const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <div className="footer">
     <span>Dima Shivrin</span>
     <span>2018 - {currentYear}</span>
    </div>
  );
};

export default Footer;
