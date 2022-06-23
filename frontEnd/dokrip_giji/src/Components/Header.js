import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 50px;
  background-color: white;
  p {
    padding-top: 15px;
    color: black;
    font-size: 20px;
  }
`;

const Logo = styled.div``;

const Login = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

function Header() {
  return (
    <Container>
      <Logo>
        <p>test1</p>
      </Logo>
      <Login>
        <Link to="/">
          <p>마이페이지</p>
        </Link>
        <Link to="/">
          <p>로그아웃</p>
        </Link>
      </Login>
    </Container>
  );
}

export default Header;
