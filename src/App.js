// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import { useState } from "react";
// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [mode, setMode] = useState(theme.light);
  const switchMode = () => {
    if (mode === theme.light) {
      setMode(theme.dark);
    } else {
      setMode(theme.light);
    }
  };
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <ThemeButton onClick={switchMode}>
        {mode === theme.light ? "Dark Theme" : "Light Theme"}
      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
