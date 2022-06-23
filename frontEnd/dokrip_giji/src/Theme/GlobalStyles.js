import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	* { 
	font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif !important;
	}
    ${reset};
    a{
        text-decoration: none;
        color: RGB(251, 251, 251);
    }

    // 많이 쓰는 flex속성  section의 default로 변경
    section{
        display: flex; 
        justify-content: center;
        align-items: center;
    }
    
    *{
        box-sizing: border-box;
    }
    body{
        font-size: 30px;
        background-color:RGB(245, 245, 245);
        color: white;
        line-height: 1;
    }
`;

export default GlobalStyles;