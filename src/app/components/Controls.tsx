import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";
import { CurrentSlideData } from "../page";
import { Film } from "../page";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: any;
  data: any;
  transitionData: Film;
  handleData: any;
  handleTransitionData: React.Dispatch<React.SetStateAction<Film>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Film;
};

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {
  
  const handlePrev = () => {
    handleData((prevData:any) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele:any) => ele.thumb_url === data[data.length - 1].thumb_url
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev:any) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele:any) => ele.thumb_url === data[0].thumb_url),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData:any) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };
  
  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  );
}

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300
ease-in-out hover:bg-white hover:text-black
"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
