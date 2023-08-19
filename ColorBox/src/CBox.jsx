import { useState } from "react";
import "./CBox.css";

function randomColor(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default function CBox({ colors }) {
  const c = randomColor(colors);
  console.log(c);
  const [boxColor, setBoxColor] = useState(c);
  const changeColor = () => {
    const c = randomColor(colors);
    setBoxColor(c);
  };
  return (
    <div
      onClick={changeColor}
      className="CBox"
      style={{ backgroundColor: boxColor }}
    ></div>
  );
}
