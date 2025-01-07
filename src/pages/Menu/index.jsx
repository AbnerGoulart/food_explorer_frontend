import { Container } from "./styles";
import { AuthContext, AuthProvider } from "../../contexts/AuthContext";
import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { useContext } from "react";

export function Menu() {
  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Container>
      <AuthProvider>
        <DishesProvider>
          <CartProvider>
            <Header />
            <div className="content">
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
              <ButtonText onClick={handleSignOut}>
                Sair
              </ButtonText>
            </div>
            <Footer />
          </CartProvider>
        </DishesProvider>
      </AuthProvider>
    </Container>
  );
}
