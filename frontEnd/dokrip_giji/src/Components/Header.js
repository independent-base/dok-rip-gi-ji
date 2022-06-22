import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 50px;
  background-color: ${(prop) => prop.theme.bgColor};
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  p {
    font-size: 30px;
  }
`;

function Header() {
  return (
    <Container>
      <Logo>
        <p>test1</p>
        <p>test2</p>
      </Logo>
    </Container>
  );
}

export default Header;
