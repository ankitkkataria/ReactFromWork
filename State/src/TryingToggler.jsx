import { useState } from "react";

export default function TryingToggler() {
  const [face, setFace] = useState(":)");
  const changeFace = () => {
    if (face == ":)") {
      setFace(":(");
    } else {
      setFace(":)");
    }
  };
  return <p onClick={changeFace}>{face}</p>;
}
