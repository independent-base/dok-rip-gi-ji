import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MapPosition from "../Components/MapPosition";
import Amenities from "../Components/Amenities";
import Carousel from "react-material-ui-carousel";

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
  height: 90vh;
  display: flex;

  div {
    width: 50%;
    height: 50%;
    //display: flex;
    //flex-wrap: wrap;
    //flex-direction: column;
    //justify-content: center;
    //align-items: center;
  }
`;

function MainPage() {
  const list = [
    "MT1	대형마트",
    "CS2	편의점",
    "PK6	주차장",
    "SW8	지하철역",
    "BK9	은행",
    "CT1	문화시설",
    "FD6	음식점",
    "CE7	카페",
    "HP8	병원",
    "PM9	약국",
  ];
  return (
    <Carousel autoPlay={false}>
      <MapPosition />
      <AmenitiesList>
        <div>
          {list.map((item) => (
            <Amenities list={item} />
          ))}
        </div>
      </AmenitiesList>
    </Carousel>
  );
}

export default MainPage;
