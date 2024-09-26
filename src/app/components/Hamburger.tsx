"use client"
import React from "react";
import { MotionConfig, motion } from "framer-motion";

const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
};

type Props = {
  open: boolean,
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({ open, handleOpen } : Props) => {
  
  return (
    <div className="grid place-content-center">
        <MotionConfig
          transition={{
              duration: 0.5,
              ease: "easeInOut",
          }}
        >
          <motion.div
              initial={false}
              animate={open ? "open" : "closed"}
              onClick={() => handleOpen((prev) => !prev)}
              className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
          >
              <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-10 bg-white"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-10 bg-white"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-5 bg-white"
              style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
              }}
              />
          </motion.div>
        </MotionConfig>
    </div>
  );
};

export default Hamburger;