import { useContext, useState } from "react";
import { InputContext } from "../../App";

function GridItem(area) {
  const { item } = area;
  const { input, setInput } = useContext(InputContext);
  const [inputTxt, setInputTxt] = useState("");
  const itemPoints = input[item.slug].map((inputItem) => (
    <li className="input--list-item" key={self.crypto.randomUUID()}>
      {inputItem}
    </li>
  ));

  function addInput() {
    console.log("ADDING INPUT");
    const mergedInput = [...input[item.slug], inputTxt];

    setInput({ ...input, [item.slug]: mergedInput });
    setInputTxt("");
  }

  return (
    <div className={`grid--item grid--item-${item.slug}`}>
      <div className="grid--item-header">
        <h3>{item.title}</h3>
        {/* <span className="grid--item-subline">{item.desc}</span> */}
      </div>
      <div className="grid--item-main">
        <ul className="input--list">{itemPoints}</ul>
      </div>
      <div className="grid--item-footer">
        <textarea
          className="grid--item-footer__textarea"
          wrap="on"
          cols="30"
          rows="5"
          placeholder={item.desc}
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
        ></textarea>
        <button onClick={addInput}>Add</button>
      </div>
    </div>
  );
}

export default GridItem;
