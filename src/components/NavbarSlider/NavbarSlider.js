import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav, Overlay } from "hero-slider";
import NavBar from "../UI/Navbar/Navbar";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";




const NavbarSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 8000,
        height: "100vh"
      }}
    >
      <Overlay>
      <NavBar/>
        <Wrapper>
          <Title>Navbar Slider</Title>
          <Subtitle>Cool stuff.</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        navDescription="Kyoto - Japan"
        background={{
          backgroundColor: "#6D9B98",
          backgroundImage: "url('https://i.imgur.com/xw5Abku.jpg')"
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Tenryu-ji Temple - KyÅto-shi - Japan"
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImage: "url('https://i.imgur.com/idjXzVQ.jpg')"
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Hakone - Japan"
        background={{
          backgroundColor: "#EA2329",
          backgroundImage: "url('https://i.imgur.com/8DYumaY.jpg')"
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Byodo-In Temple - Kaneohe - United States"
        background={{
          backgroundColor: "#2D7791",
          backgroundImage: "url('https://i.imgur.com/8IuucQZ.jpg')"
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
};

export default NavbarSlider;
