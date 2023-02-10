import data from "../../config/data.json";
import "./Grid.sass";

function Grid() {
  // INSPIRED BY s3-eu-central-1.amazonaws.com/business-models-inc/wp-content/uploads/2018/06/13071524/BMI•Business-model-canvas.jpg
  const gridItems = Object.keys(data.areas).map((area) => (
    <div className={`grid--item grid--item-${area}`}>{area}</div>
  ));

  return <div className="grid">{gridItems}</div>;
}

export default Grid;
