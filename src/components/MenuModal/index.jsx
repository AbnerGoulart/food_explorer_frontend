import { Container, BackgroundBlur } from "./styles";
import { AuthContext, AuthProvider } from "../../contexts/AuthContext";
import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ButtonText } from "../ButtonText";
import { useContext, useState } from "react";
import { Button } from "../Button";

export function MenuModal({toggleMenu}) {
  const { signOut, type } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  // const toggleMenu = () => {
  //   setIsMenuOpen((prevState) => !prevState);
  // };

  return (
    <BackgroundBlur>
      <Container>
        <div className="header">
          <ButtonText onClick={toggleMenu}>
            X Menu
          </ButtonText> 
        </div>
        <div className="content">
          <input type="text" placeholder="Busque por pratos ou ingredientes"/>
          {type === "admin" ? (
            <>
              <ButtonText>
                Novo Prato
              </ButtonText>
              <ButtonText onClick={handleSignOut}>
                Sair
              </ButtonText>
            </>
          ) : (
            <ButtonText onClick={handleSignOut}>
              Sair
            </ButtonText>
          )}
        </div>
      </Container>
    </BackgroundBlur>
  );
}
