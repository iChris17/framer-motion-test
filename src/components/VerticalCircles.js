import React from "react";
import { motion } from "framer-motion";
import { radialGradial } from "../gradient";

const VerticalCircles = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: "47%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          borderColor: "blue",
          borderWidth: "50px",
          background: radialGradial,
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: "53%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          borderColor: "blue",
          borderWidth: "50px",
          background: radialGradial,
        }}
      ></motion.div>
    </>
  );
};

export default VerticalCircles;
