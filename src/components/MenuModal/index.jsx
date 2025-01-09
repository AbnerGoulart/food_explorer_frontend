import { Container, BackgroundBlur } from "./styles";
import { AuthContext, AuthProvider } from "../../contexts/AuthContext";
import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ButtonText } from "../ButtonText";
import { useContext, useState } from "react";

export function MenuModal({toggleMenu}) {
  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  // const toggleMenu = () => {
  //   setIsMenuOpen((prevState) => !prevState);
  // };

  return (
    <BackgroundBlur>
      <Container>
        <button onClick={toggleMenu}>X</button>
        <h1>Menu Modal</h1>
      </Container>
    </BackgroundBlur>
  );
}
