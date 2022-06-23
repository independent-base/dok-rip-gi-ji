import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MapPosition from "../Components/MapPosition";
import Amenities from "../Components/Amenities";
import Carousel from "react-material-ui-carousel";
import AmenitiesComp from "../Components/AmenitiesComp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;

const SCarousel = styled.div`
  && {
    width: 100vw;
    height: 100vh;
  }
`;

const AmenitiesList = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;

  div {
    width: 20vw;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
  }
`;

function MainPage() {
  return (
    <Carousel
      autoPlay={false}
      NextIcon="편의시설"
      PrevIcon="스팟지정"
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "cornflowerblue",
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
    >
      <MapPosition />
      <AmenitiesComp />
    </Carousel>
  );
}

export default MainPage;
