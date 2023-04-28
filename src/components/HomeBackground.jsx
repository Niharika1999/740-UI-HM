import React, { useState, useEffect } from 'react';

const images = [
  "https://images.app.goo.gl/K1zhuFuH3y4vGMC37",
  "https://images.app.goo.gl/2wG2eksnqBjqf6Ya9",
  "https://images.app.goo.gl/6pKkvYxSrma5wuvY8",
];

const HomeBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const styles = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={styles}>
      {"jhgf"}
    </div>
  );
};

export default HomeBackground;
