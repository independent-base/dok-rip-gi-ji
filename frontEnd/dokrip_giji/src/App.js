import Router from "./Routes/Router";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRecoilValue } from "recoil";
import { modeChange } from "./Atoms/themeChange";
import { MainTheme, lightTheme } from "./Theme/MainColorTheme";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "./Theme/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  const mode = useRecoilValue(modeChange);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mode ? MainTheme : lightTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
