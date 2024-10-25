import React from "react";
import HeroImage from "../../assets/images/heroIMG.webp";
import CustomButton from "../Button/CustomButton";
import { BUTTON_LABELS } from "../../constants";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="container">
        <div>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="my-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-8">
            <CustomButton label={BUTTON_LABELS.SHOP_NOW} />
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full max-w-[550px] h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
