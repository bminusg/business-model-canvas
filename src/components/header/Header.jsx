import { useContext, useState } from "react";
import { InputContext } from "../../App";
import JSONcrush from "jsoncrush";
import "./Header.sass";

function Header() {
  const { input } = useContext(InputContext);
  const [isCopied, setIsCopied] = useState(false);

  function share() {
    const crush = JSONcrush.crush(JSON.stringify(input));
    const hash = btoa(crush);
    const href = window.location.href.substring(
      0,
      window.location.href.indexOf("#")
    );

    navigator.clipboard.writeText(href + "#" + hash);

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }
  return (
    <header className="header">
      <div className="header--title-wrapper">
        <span className="header--title">{input.title}</span>
        <span className="header--title-edit">
          <i className="gg-pen"></i>
        </span>
        <br />
        <span className="header--subtitle">Business Model Canvas</span>
      </div>
      <div className="header--action-wrapper">
        <div className="header--action-share">
          <div
            className={
              isCopied
                ? "header--action-share__feedback is--triggerd"
                : "header--action-share__feedback"
            }
          >
            <i className="gg-check"></i>
            <span>Copied to clipboard</span>
          </div>
          <button
            className="header--action-share__btn btn btn--primary"
            onClick={share}
          >
            <i className="gg-clipboard"></i>
            <span>Share</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
