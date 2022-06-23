import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MapPosition from "../Components/MapPosition";
import Amenities from "../Components/Amenities";

function MainPage() {
  return (
    <Container>
      <MapPosition />
      <Amenities />
    </Container>
  );
}

export default MainPage;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
