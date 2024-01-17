import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SingleCircle from "./components/SingleCircle";
import HorizontalCircles from "./components/HorizontalCircles";
import VerticalCircles from "./components/VerticalCircles";

const App = () => {
  const [count, setCount] = useState(0);

  const animations = {
    0: null,
    1: <SingleCircle />,
    2: (
      <>
        <HorizontalCircles />
        <VerticalCircles />
      </>
    ),
    3: <HorizontalCircles />,
    4: <VerticalCircles />,
    5: <HorizontalCircles />,
    6: <VerticalCircles />,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count === 6) {
        setCount(0);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000); // Change the duration as needed

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        backgroundColor: "black",
      }}
    >
      <AnimatePresence>{animations[count]}</AnimatePresence>
    </div>
  );
};

export default App;
