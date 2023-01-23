import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/pages/login";
import { GlobalStyle, theme } from "./global-style";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
