import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cursor } from "../Atoms/CursorAtom";

function AmenitiesComp() {
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
  const [check, setCheck] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // 커서 변경
  const onClick = (idx) => {
    setCheck((check[idx] = (check[idx] + 1) % 2));
    console.log(check);
    console.log(check[idx]);
  };

  useEffect(() => {}, []);

  return (
    <AmenitiesList>
      <Container>
        <Title>근처에 어떤게 필요하세요?</Title>
        <Line />
        <img />
        <Box>
          {list.map((item, idx) => (
            <Btn
              variant="contained"
              onClick={() => onClick(idx)}
              check={check[idx]}
            >
              {item}
            </Btn>
          ))}
        </Box>
        <NextBtn>
          <p>다음</p>
        </NextBtn>
      </Container>
    </AmenitiesList>
  );
}

export default AmenitiesComp;

const AmenitiesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  //position: absolute;
  margin-top: 50px;
  top: 30%;
  left: 20%;
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

const Line = styled.p`
  color: gray;
  width: 100%;
  height: 3px;
  background-color: black;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Btn = styled(Button)`
  && {
    color: black;
    width: 120px;
    background-color: ${(prop) =>
      prop.check === 1 ? prop.theme.bgColor : "#f6f6f6"};
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
    bottom: 20px;
    p {
      font-size: 18px;
      color: black;
    }
  }
`;
