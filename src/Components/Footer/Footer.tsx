import DateRange from "Components/Shared/Date-range/Date-range";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
     <span>Dima Shivrin</span>
     <DateRange from="2018" format="YYYY" />
    </div>
  );
};

export default Footer;
