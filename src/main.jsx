import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import { CartProvider } from "./contexts/CartContext.jsx";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

import { Routes } from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Routes />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
