import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/windowDimensions";
import Styles from "./styles.module.css";

function ShinyEffect() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  function follow() {
    document.querySelector("#button").onmousemove = (e) => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  }

  return (
    <>
      <h2 onMouseOver={follow} id="button" className={Styles.button}>
        Hover Button
      </h2>
      <h3>
        Left: {x} | Top: {y}
      </h3>
      <h3>
        width: {width} | height: {height}
      </h3>
    </>
  );
}

export default ShinyEffect;
