import React, { useEffect, useRef } from "react";
import "../components/styles.css";
import "../../index.css";

function ImageSideText({
  imageUrl,
  description,
  alt,
  reverse,
  title,
  slideDirection,
  backgroundcolor,
}) {
  // Reference to the element containing the text content
  const textRef = useRef(null);

  useEffect(() => {
    const slideInElements = () => {
      const elements = document.querySelectorAll(".slide-in");
      elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const slideDirection = element.dataset.slideDirection; // Get direction from data attribute
        if (top < windowHeight * 0.8) {
          element.classList.add("active");
          element.classList.add(`slide-in-${slideDirection}`); // Add direction-specific class
        }
      });
    };

    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the text element is in the viewport
      const top = textRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.8) {
        // Add a class to trigger the animation
        textRef.current.classList.add("slide-in");
        // Remove the scroll event listener to prevent re-triggering
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Trigger slideInElements function when the component mounts
    slideInElements();

    // Cleanup: remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div
        className={`row d-flex align-items-center ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col ">
          <img
            src={imageUrl}
            alt={alt}
            style={{
              width: "300px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div
          ref={textRef}
          className="col slide-in"
          data-slide-direction={slideDirection}
          style={{ background: backgroundcolor, borderRadius: 10 }}
        >
          <h2
            className="text-center title title-medium"
            style={{ color: "#304D30" }}
          >
            {title}
          </h2>
          <p className="text-center" style={{ color: "#fffff" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSideText;
