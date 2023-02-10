import data from "../../config/data.json";
import "./Header.sass";

function Header() {
  return (
    <header className="header">
      <div className="header--title-wrapper">
        <span className="header--title">{data.title}</span> <br />
        <span>Business Model Canvas | Version {data.version}</span>
      </div>
    </header>
  );
}

export default Header;
