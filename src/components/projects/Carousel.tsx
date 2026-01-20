import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { iconMap } from "../../utilities/icons";
import { mainProjectsData, type Project } from "../../data/projectsData";

export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [slideWidth, setSlideWidth] = useState(75);

  const [fullScreenImg, setFullScreenImg] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("light"));
    };

    checkDarkMode();

    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setCurrent((prev) => {
        switch (e.key) {
          case "ArrowLeft":
            return prev > 0 ? prev - 1 : prev;
          case "ArrowRight":
            return prev < mainProjectsData.length - 1 ? prev + 1 : prev;
          default:
            return prev;
        }
      });
    };

    document.addEventListener("keydown", handleKeyPress);

    const handleResize = () => {
      setSlideWidth(window.innerWidth < 768 ? 85 : 75);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={`${styles.mainProjectsPositioner} hidden show3`}>
      {fullScreenImg && (
        <div
          className={styles.fullScreenOverlay}
          onClick={() => setFullScreenImg(null)}
        >
          <img loading="lazy" src={fullScreenImg} alt="Full view" />
        </div>
      )}

      <div id="carousel" className={styles.carouselContainer}>
        <div
          className={styles.mainProjects}
          style={{
            transform: `translateX(${(100 - slideWidth * (current + current + 1)) / 2}%)`,
          }}
        >
          {mainProjectsData.map((item: Project, index) => {
            const bg = !isDarkMode ? item.bgDark : item.bgLight;
            return (
              <div
                className={`${styles.slide} ${current === index ? styles.activeSlide : ""}`}
                key={index}
                onClick={() => {
                  if (current === index) {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  } else {
                    goToSlide(index);
                  }
                }}
              >
                <div className={`${styles.imageWrapper}`} id="imageWrapper">
                  {item.live && <span className={`titleSmallest ${styles.live}`}>LIVE</span>}
                  <img loading="lazy" src={bg[0]} alt="" />
                  <div className={styles.previewImages}>
                    {bg.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        onClick={(e) => {
                          if (current !== index) return;
                          e.stopPropagation();
                          setFullScreenImg(src);
                        }}
                        loading="lazy"
                        style={{ cursor: "zoom-in" }}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.bottomWrapper}>
                  <h4 className={`title titleSmall`}>{item.title}</h4>
                  <div className={`${styles.stack} titleSmall`}>
                    {item.stack?.map((icon, index) => (
                      <i
                        key={index}
                        className={iconMap[icon]?.colored}
                        title={icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.controls}>
          <div className={styles.indicators}>
            {mainProjectsData.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${current === index ? styles.active : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
