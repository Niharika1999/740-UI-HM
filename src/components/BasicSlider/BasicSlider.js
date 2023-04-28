import React from "react";
// JSX
import HeroSlider, { Slide, Nav, Overlay } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const bogliasco = "https://i.imgur.com/xw5Abku.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const BasicSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Basic Slider</Title>
          <Subtitle>Slides' background attachment set to fixed</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        background={{
          backgroundImage: "url('https://i.imgur.com/xw5Abku.jpg')",
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: "url('https://i.imgur.com/idjXzVQ.jpg')",
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: "url('https://i.imgur.com/8DYumaY.jpg')",
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: "url('https://i.imgur.com/8IuucQZ.jpg')",
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default BasicSlider;
