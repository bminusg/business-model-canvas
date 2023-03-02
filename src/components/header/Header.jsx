import { useContext, useState } from "react";
import { InputContext } from "../../App";
import defaultConfig from "../../config/input.json";
import JSONcrush from "jsoncrush";
import "./Header.sass";

function Header() {
  const { input, setInput } = useContext(InputContext);
  const [editTitle, setEditTitle] = useState(false);
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

  function toggleEditTitle() {
    setEditTitle(!editTitle);
  }

  return (
    <header className="header">
      <div className="header--title-wrapper">
        <div className="header--title">
          {editTitle ? (
            <div className="header--title-edit">
              <input
                type="text"
                value={input.title}
                onChange={(e) => setInput({ ...input, title: e.target.value })}
              ></input>
              <div
                className="header--title-edit__trigger"
                onClick={toggleEditTitle}
              >
                <i className="fas fa-check-circle"></i>
              </div>
            </div>
          ) : (
            <>
              <span className="header--title-txt">{input.title}</span>
              <span
                className="header--title-edit__trigger"
                onClick={toggleEditTitle}
              >
                <i className="fas fa-edit"></i>
              </span>
            </>
          )}
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
