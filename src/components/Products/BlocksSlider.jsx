import * as React from "react";
import SwiperSlider from "./SwiperSlider";

const BlocksSlider = ({ setModalOpen, setImageUrl, images }) => {
  return (
    <section className="w-fit h-fit m-auto flex flex-col items-center justify-center">
      <SwiperSlider
        images={images}
        setModalOpen={setModalOpen}
        setImageUrl={setImageUrl}
      />
    </section>
  );
};

export default BlocksSlider;
