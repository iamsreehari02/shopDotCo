import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Products.module.css";
import CustomButton from "../Button/CustomButton";
import { BUTTON_LABELS, COLORS } from "../../constants";

const Products = ({ title, products = [] }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewAll = () => {
    setVisibleCount(products.length);
  };

  const handleViewLess = () => {
    setVisibleCount(4);
  };

  return (
    <div className={`${styles.products} container py-20`}>
      <h2 className="text-center">{title}</h2>
      <TransitionGroup className={styles.gridContainer}>
        {products.slice(0, visibleCount).map((product, index) => (
          <CSSTransition key={index} timeout={300} classNames="fade">
            <div className={styles.productCard}>
              <img src={product.img} alt={product.alt} />
              <p className="mt-4">{product.productName}</p>
              <div className={styles.rating}>
                {Array.from({ length: 5 }, (_, i) =>
                  i < product.rating ? (
                    <FaStar key={i} className={styles.filledStar} />
                  ) : null
                )}
                <p className="ml-2">{product.rating}/5</p>
              </div>
              <h6 className={styles.price}>
                {product.ogPrice}{" "}
                <span className="line-through">{product.offerPrice}</span>{" "}
                <p>{product.loweredPercentage}</p>
              </h6>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="w-fit flex mx-auto mt-4">
        <CustomButton
          label={
            visibleCount < products.length
              ? BUTTON_LABELS.VIEW_ALL
              : BUTTON_LABELS.VIEW_LESS
          }
          bgColor={COLORS.WHITE}
          fontColor={COLORS.BLACK}
          borderWidth={1}
          onClick={
            visibleCount < products.length ? handleViewAll : handleViewLess
          }
        />
      </div>
    </div>
  );
};

export default Products;
