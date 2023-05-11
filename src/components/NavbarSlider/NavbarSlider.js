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
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
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
        <NavBar />
        <Wrapper>
          <Title>Hotel Management System</Title>
          <Subtitle>Niharika Upadhyayula</Subtitle>
          <Subtitle>Meghana Purijala</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        navDescription="Kyoto - Japan"
        background={{
          backgroundColor: "#6D9B98",
          backgroundImage:
            "url('https://media.cntraveler.com/photos/57dac251248d564c67def553/16:9/w_2560%2Cc_limit/Sunset-AnantaraUluwataBaliResort-Bali-CRHotel.jpg')",
          backgroundSize: "cover" // Added property
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Tenryu-ji Temple - Kyōto-shi - Japan"
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImage: "url('https://wallpaperaccess.com/full/6423030.jpg')",
          backgroundSize: "cover" // Added property
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Hakone - Japan"
        background={{
          backgroundColor: "#EA2329",
          backgroundImage: "url('https://www.jetsetter.com//uploads/sites/7/2018/04/lG1HB2u-.jpeg')",
          backgroundSize: "cover" // Added property
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Byodo-In Temple - Kaneohe - United States"
        background={{
          backgroundColor: "#2D7791",
          backgroundImage: "url('https://lajolla.com/wp-content/uploads/2018/03/13963023_975015099273904_3571657806461137454_o.jpg')",
          backgroundSize: "cover" // Added property
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
};

export default NavbarSlider;
