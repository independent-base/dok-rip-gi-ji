import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cursor } from "../Atoms/CursorAtom";

function SpotChoice() {
  const setCursor = useSetRecoilState(cursor);
  // 커서 변경
  const onClick = () => {
    setCursor(true);
  };
  return (
    <Container>
      <Title>어느곳 근처를 찾아볼까요?</Title>
      <Line />
      <img />
      <Btn variant="contained" onClick={onClick}>
        직접 지도에서 위치 선택
      </Btn>
      <SearchBar />
      <NextBtn>
        <p>다음</p>
      </NextBtn>
    </Container>
  );
}

export default SpotChoice;

const Container = styled.div`
  position: absolute;
  margin-top: 50px;
  top: 40px;
  left: 40px;
  width: 340px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  gap: 10px;
  border-radius: 10px;

  img {
    border: black;
    width: 100%;
    height: 200px;
  }
`;

const Title = styled.p`
  margin-top: 20px;
  color: black;
  font-size: 20px;
`;

const Line = styled.div`
  color: black;
  width: 100%;
  height: 3px;
`;

const Btn = styled(Button)`
  && {
    width: 292px;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⌾</text></svg>")
        16 0,
      auto;
  }
`;

const NextBtn = styled(Button)`
  && {
    width: 286px;
    height: 48px;
    border-radius: 30px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    p {
      font-size: 18px;
      color: black;
    }
  }
`;
