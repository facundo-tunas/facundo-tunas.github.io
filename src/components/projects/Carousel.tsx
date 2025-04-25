import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { iconMap } from "../../utilities/icons";

export default function Carousel() {
  const [current, setCurrent] = useState(2);
  const [slideWidth, setSlideWidth] = useState(75);

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
    const handleResize = () => {
      setSlideWidth(window.innerWidth < 768 ? 85 : 75);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      title: "Blog",
      description:
        "A simple and clean blog platform for writing and sharing posts.",
      bgDark: "/projects/blogDark.png",
      bgLight: "/projects/blogLight.png",
      url: "https://www.google.com",
      stack: ["React", "CSS", "Express.js", "Node.js"],
    },
    {
      title: "Photo Tagging",
      description: 'A <em>"Where\'s Waldo"</em> &nbsp;style game.',
      bgDark: "/projects/photoTagging.png",
      bgLight: "/projects/photoTagging.png",

      stack: ["React", "CSS", "Express.js", "Node.js"],
    },
    {
      title: "File Storage",
      description:
        "Secure cloud storage solution with easy access and sharing.",
      bgDark: "/projects/fileStorage.png",
      bgLight: "/projects/fileStorage.png",
      stack: ["React", "CSS", "Express.js", "Node.js"],
    },
  ];

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={styles.mainProjectsPositioner}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.mainProjects}
          style={{
            transform: `translateX(${(100 - slideWidth * (current + current + 1)) / 2}%)`,
          }}
        >
          {items.map((item, index) => {
            const bg = isDarkMode ? item.bgDark : item.bgLight;
            return (
              <div
                key={index}
                className={`${styles.slide} ${current === index ? styles.activeSlide : ""}`}
                style={{ backgroundImage: `url(${bg})` }}
                onClick={() => {
                  if (current === index) {
                    window.open(item.url, "_blank");
                  } else {
                    goToSlide(index);
                  }
                }}
              >
                <div className={styles.content}>
                  <div className={styles.top}>
                    <h4 className="title titleSmall">{item.title}</h4>
                    <div className={styles.stack}>
                      {item.stack?.map((icon, index) => (
                        <i key={index} className={iconMap[icon]?.colored} />
                      ))}
                    </div>
                  </div>
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.controls}>
          <div className={styles.indicators}>
            {items.map((_, index) => (
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
