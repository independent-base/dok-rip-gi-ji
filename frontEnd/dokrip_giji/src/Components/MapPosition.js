import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";
import SpotChoice from "./SpotChoice";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cursor } from "../Atoms/CursorAtom";
const { kakao } = window;

export default function MapPosition() {
  const [cursorValue, clickCursor] = useRecoilState(cursor);
  const [position, setPosition] = useState();
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const onclick = (_t, mouseEvent) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
    clickCursor(false);
  };
  console.log(`메인 : ${cursorValue}`);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <Continaer cursor={cursorValue}>
      <MapDiv // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        isPanto={state.isPanto}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => onclick(_t, mouseEvent)}
      />
      {position && console.log(`위도 : ${position.lat}경도 : ${position.lng}`)}
      <button
        onClick={() =>
          setState({
            center: { lat: 33.45058, lng: 126.574942 },
            isPanto: true,
          })
        }
      >
        지도 중심좌표 부드럽게 이동시키기
      </button>

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
