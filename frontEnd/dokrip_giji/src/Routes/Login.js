import React from "react";
import styled from "styled-components";
import KakaoLoginBtn from '../assets/kakao_login.png';

const LoginWrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

const ButtonWrap = styled.a`
  display: block;
  height: 60px;
  margin: 0;
  text-align: center;
`;

const KakaoButton = styled.img`
  width:100%;
  height:100%;
  object-fit:contain;
`;

const Logo = styled.div`
  display: block;
  margin-bottom: 40px;
`;

const Info = styled.div`
  display: block;
  border-radius: 20px;
  background-color: #e3dee6;
  padding: 40px;
  position: relative;
`;

const InfoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 80px;
`;

function Login() {
  return ( 
    <LoginWrap >
      <Logo> 테스트 </Logo>
      <Info>
        <InfoHead> <p> 독립기지와 함께 집을 찾아볼까요 ? </p> </InfoHead>
        <ButtonWrap href = "https://kauth.kakao.com/oauth/authorize?client_id=9383895f69880f4da54c9c4b280df82d&redirect_uri=http://localhost:8080/login&response_type=code">
	      <KakaoButton src = {KakaoLoginBtn}/>
        </ButtonWrap >
      </Info>
    </LoginWrap>
  );
}

export default Login;