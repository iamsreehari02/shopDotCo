import React, { useState, useEffect } from "react";
import HeroImage from "../../../assets/images/heroIMG.webp";
import CustomButton from "../../Button/CustomButton";
import { BUTTON_LABELS, IMG_ALT } from "../../../constants";
import { heroSectionCounter } from "../../utils/mockData";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [counts, setCounts] = useState(heroSectionCounter.map(() => 0));

  useEffect(() => {
    const animationDuration = 2000;
    const intervalDuration = 20;
    const steps = animationDuration / intervalDuration;

    const intervals = heroSectionCounter.map((data, index) => {
      const targetCount = parseInt(data.count.replace(/,/g, ""), 10);
      const stepValue = targetCount / steps;
      return setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index ? Math.min(count + stepValue, targetCount) : count
          )
        );
      }, intervalDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-3">
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
        <div className={styles.counterContainer}>
          {heroSectionCounter.map((data, index) => (
            <div
              key={data.id}
              className={`w-max flex flex-col items-center ${
                index === 1 ? "border-l border-r border-gray-300 px-10" : ""
              }`}
            >
              <h3 className="mb-2">
                {formatNumber(Math.round(counts[index]))}+
              </h3>
              <p>{data.para}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-full md:w-2/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src={HeroImage}
          alt={IMG_ALT.HERO}
          className="h-lvh md:h-1/2 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
