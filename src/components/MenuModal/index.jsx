import { Container } from "./styles";
import { AuthContext, AuthProvider } from "../../contexts/AuthContext";
import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ButtonText } from "../ButtonText";
import { useContext } from "react";

export function MenuModal() {
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
