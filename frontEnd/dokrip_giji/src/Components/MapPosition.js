import React, { useState } from "react";
import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";
import SpotChoice from "./SpotChoice";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cursor } from "../Atoms/CursorAtom";

export default function MapPosition() {
  const [cursorValue, clickCursor] = useRecoilState(cursor);
  const [position, setPosition] = useState();

  const onclick = (_t, mouseEvent) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
    clickCursor(false);
  };
  console.log(`메인 : ${cursorValue}`);

  return (
    <Continaer cursor={cursorValue}>
      <MapDiv // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => onclick(_t, mouseEvent)}
      />
      {position && console.log(`위도 : ${position.lat}경도 : ${position.lng}`)}
      <SpotChoice />
    </Continaer>
  );
}

const Continaer = styled.div`
  width: 100vw;
  height: 80vh;
  cursor: ${(props) =>
    props.cursor
      ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⌾</text></svg>\")16 0,auto;"
      : "pointer"};
`;

const MapDiv = styled(Map)`
  && {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const P = styled.p`
  color: black;
`;
