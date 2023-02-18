import { useContext } from "react";
import { InputContext } from "../../App";
import "./Header.sass";

function Header() {
  const { input } = useContext(InputContext);
  return (
    <header className="header">
      <div className="header--title-wrapper">
        <span className="header--title">{input.title}</span> <br />
        <span className="header--subtitle">
          Business Model Canvas | Version {input.version}
        </span>
      </div>
    </header>
  );
}

export default Header;
