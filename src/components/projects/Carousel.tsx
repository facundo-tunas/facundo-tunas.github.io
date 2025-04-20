import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const items = ["Blog", "Photo Tagging", "File Storage"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = Math.max(0, items.length - slidesPerView);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={styles.mainProjectsPositioner}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.mainProjects}
          style={{
            transform:
              maxSlides > 0
                ? `translateX(-${current * (100 / slidesPerView)}%)`
                : "none",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.slide}
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <div className={styles.content}>{item}</div>
            </div>
          ))}
        </div>

        {maxSlides > 0 && (
          <div className={styles.controls}>
            <div className={styles.indicators}>
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${current === index ? styles.active : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
