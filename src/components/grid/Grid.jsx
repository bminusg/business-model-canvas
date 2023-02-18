import areas from "../../config/areas.json";
import GridItem from "./GridItem";
import "./Grid.sass";

function Grid() {
  const gridItems = areas.map((area) => (
    <GridItem item={area} key={area.slug}></GridItem>
  ));

  return <div className="grid">{gridItems}</div>;
}

export default Grid;
