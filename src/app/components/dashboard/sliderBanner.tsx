"use client";
import { useState, useEffect } from "react";

const slideImages = [
  {
    url: "https://shweyeewinaung.com/skincare-images/sk2-banner.jpg",
    href: "#",
  },
  {
    url: "https://shweyeewinaung.com/skincare-images/cerave-banner.png",
    href: "#",
  },
];

const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide-container relative h-64">
      {slideImages.map((slideImage, index) => (
        <div
          key={index}
          className="transition-opacity duration-1000 flex items-center justify-center bg-cover	absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `url(${slideImage.url})`,
            opacity: index === currentSlide ? 1 : 0,
          }}
        >
          {/* {index === currentSlide && (
            <span style={spanStyle}>{slideImage.caption}</span>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default SliderBanner;
