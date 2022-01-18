import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/windowDimensions";
import Styles from "./styles.module.css";

function ShinyEffect() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    var div = document.getElementById("button");
    var rect = div.getBoundingClientRect();
    var xL = rect.left;
    var xR = rect.right;
    var yT = rect.top;
    var yB = rect.bottom;
    var wi = rect.width;
    var he = rect.height;
    console.log("Left side of button from the left: " + xL + "px"); // 104
    console.log("Right side of button from the left: " + xR + "px"); // 271
    console.log("Top of button from the top: " + yT + "px"); // 526
    console.log("Bottom of button from the top: " + yB + "px"); // 561
    console.log("Width of button: " + wi + "px"); // 167
    console.log("Height of button: " + he + "px"); // 35
    /////////////////////////////////////
    // It's got to be between 526 & 561
    // height of screen is 667

    // if (x >= xL) {
    //   alert("Hello");
    // }

    // window.addEventListener("mouseover")

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
    // }, [setX, setY]);
  }, []);

  return (
    <>
      <h2 id="button" className={Styles.button}>
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

  ///////////////////////////////////////////////////////////////////////////////

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   console.log(windowDimensions);

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  ////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   const update = (e) => {
  //     setX(e.x);
  //     setY(e.y);
  //   };
  //   window.addEventListener("mousemove", update);
  //   window.addEventListener("touchmove", update);
  //   return () => {
  //     window.removeEventListener("mousemove", update);
  //     window.removeEventListener("touchmove", update);
  //   };
  // }, [setX, setY]);

  // return (
  //   <>
  //     <h2 className={Styles.button}>Hover Button</h2>
  //     x:{x} | y:{y}
  //   </>
  // );
}

export default ShinyEffect;
