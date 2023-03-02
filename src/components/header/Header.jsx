import { useContext, useState } from "react";
import { InputContext } from "../../App";
import defaultConfig from "../../config/input.json";
import JSONcrush from "jsoncrush";
import "./Header.sass";

function Header() {
  const { input, setInput } = useContext(InputContext);
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

  function reset() {
    setInput(defaultConfig);
  }

  return (
    <header className="header">
      <div className="header--title-wrapper">
        <div className="header--title">
          <span className="header--title-txt">{input.title}</span>
          <span className="header--title-edit">
            <i className="fas fa-edit"></i>
          </span>
        </div>
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
            <i className="fas fa-copy"></i>
            <span>Share</span>
          </button>
          <button
            className="header--action-reset__btn btn btn--primary-ghost"
            onClick={reset}
          >
            <i className="fas fa-toilet"></i>
            <span>Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
