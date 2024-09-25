import Slides from "./Slides";
import SlideInfo from "./SlideInfo";
import Controls from "./Controls";
import { CurrentSlideData, Film } from "../page";

type Props = {
    transitionData: any;
    currentSlideData: CurrentSlideData;
    sliderData: Film | Film[];
    initData: Film;
    setSliderData: React.Dispatch<React.SetStateAction<Film | undefined>>;
    setTransitionData: any;
    setCurrentSlideData: any;
}

const Slider = ({ transitionData, currentSlideData, sliderData, initData, setSliderData, setTransitionData, setCurrentSlideData } : Props) => {
  return (
    <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
        <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
            <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
            />
        </div>
        <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
            <>
                <Slides data={sliderData} />
                <Controls
                    currentSlideData={currentSlideData}
                    data={sliderData}
                    transitionData={transitionData}
                    initData={initData}
                    handleData={setSliderData}
                    handleTransitionData={setTransitionData}
                    handleCurrentSlideData={setCurrentSlideData}
                    sliderData={sliderData}
                />
            </>
        </div>
    </div>
  )
}

export default Slider