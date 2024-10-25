import React from "react";
import { sponsorsIMG } from "../../utils/mockData";
import styles from "./Sponsers.module.css";

const Sponsers = () => {
  return (
    <div className="bg-black w-full py-10">
      <div className={`${styles.sponsorsLogos} container`}>
        {sponsorsIMG.map((image) => (
          <div key={image.id} className="w-max flex justify-center">
            <img src={image.image} alt={image.alt} className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
