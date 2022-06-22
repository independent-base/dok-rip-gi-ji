import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MapPosition from "../Components/MapPosition";
import Amenities from "../Components/Amenities";

function MainPage() {
  return (
    <>
      <MapPosition />
      <Amenities />
    </>
  );
}

export default MainPage;
