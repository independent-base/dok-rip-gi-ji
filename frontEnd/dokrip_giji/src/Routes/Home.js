import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <>
      <HomePage>Home</HomePage>
    </>
  );
}

const HomePage = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
`;

export default Home;
