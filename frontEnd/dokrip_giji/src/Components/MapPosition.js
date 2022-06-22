import React, { useState } from "react";
import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";

const MapDiv = styled(Map)`
  width: 100vw;
  height: 80vh;
`;

const P = styled.p`
  color: black;
`;

const MapPosition = () => {
  const [position, setPosition] = useState();
  return (
    <>
      <MapDiv // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) =>
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      />
      {position && <P>{`위도 : ${position.lat}경도 : ${position.lng}`}</P>}
    </>
  );
};

export default MapPosition;
