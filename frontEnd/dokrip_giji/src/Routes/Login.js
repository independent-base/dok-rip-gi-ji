import React from "react";
import styled from "styled-components";
import KakaoLoginBtn from '../Static/kakao_login.png';
import logo from '../Static/logo.svg';
import loginImg from '../Static/login_pana.svg';

const LoginWrap = styled.div`
  display: flex;
  height: calc(100vh - 50px);
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
  width:80%;
  object-fit:contain;
`;

const Logo = styled.img`
  display: block;
  width: 15%;
  over-fit: contain;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  width: 25%;
  border-radius: 20px;
  background-color: #e3dee6;
  padding: 20px;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InfoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 40px;
`;

const WelcomeImg = styled.img`
  display: block;
  width: 70%;
  over-fit: contain;
  margin-bottom: 40px;
`;

const WelcomeMsg = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

function Login() {
  return ( 
    <LoginWrap >
      <Logo src={logo} />
      <Info>
        <InfoHead> <WelcomeMsg> 독립을 위한 첫 걸음 </WelcomeMsg> <WelcomeMsg>나만의 기지를 찾아볼까요?</WelcomeMsg></InfoHead>
		<WelcomeImg src={loginImg}/>
        <ButtonWrap href = "https://kauth.kakao.com/oauth/authorize?client_id=9383895f69880f4da54c9c4b280df82d&redirect_uri=http://localhost:8080/login&response_type=code">
	      <KakaoButton src = {KakaoLoginBtn}/>
        </ButtonWrap >
      </Info>
    </LoginWrap>
  );
}

export default Login;