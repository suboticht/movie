import { Film } from "../page";
import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: Film[] | Film;
};

function Slides({ data }: Props) {
  console.log(data);
  
  return (
    <div className="flex w-full gap-6">
      {Array.isArray(data) ? (
        data.map((film: Film, index: number) => (
          <SliderCard key={film.poster_url} data={film} />
        ))
      ) : (
        <SliderCard key={data.poster_url} data={data} />
      )}
    </div>
  );
}

export default Slides;
