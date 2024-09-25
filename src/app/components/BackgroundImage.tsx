import React from "react";
import { motion } from "framer-motion";
import { CurrentSlideData, Film } from "../page";

type Props = {
  transitionData: Film | undefined;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.thumb_url}
          layoutId={transitionData.thumb_url}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.thumb_url}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.thumb_url + "transition"}
        src={currentSlideData.data.thumb_url}
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;
