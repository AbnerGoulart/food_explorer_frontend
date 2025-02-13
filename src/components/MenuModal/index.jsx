import { Container, BackgroundBlur } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { DishesContext } from "../../contexts/DishesContext";
import { ButtonText } from "../ButtonText";
import { useContext, useState } from "react";
import { PiXBold, PiMagnifyingGlass } from "react-icons/pi";
import { Input } from "../Input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";

export function MenuModal({ toggleMenu }) {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const { setMenu } = useContext(DishesContext);
  const { signOut, type } = useContext(AuthContext);
  const navigate = useNavigate("");

  async function handleSignOut() {
    await signOut();
  }

  const handleNewDish = () => {
    navigate(`/new`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/?q=${searchTerm}`);
      api
        .get(`/dishes/?q=${searchTerm}`)
        .then((response) => {
          setMenu(response.data);
        })
        .catch((error) => console.error("Erro ao buscar pratos:", error));
        toggleMenu()
    }
  };

  return (
    <BackgroundBlur>
      <Container>
        <div className="header">
          <ButtonText onClick={toggleMenu}>
            <PiXBold />
          </ButtonText>
          <p>Menu</p>
        </div>
        <div className="content">
          <Input
            icon={PiMagnifyingGlass}
            type="text"
            value={searchTerm}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          {type === "admin" ? (
            <>
              <ButtonText onClick={handleNewDish}>Novo Prato</ButtonText>
              <ButtonText onClick={handleSignOut}>Sair</ButtonText>
            </>
          ) : (
            <ButtonText onClick={handleSignOut}>Sair</ButtonText>
          )}
        </div>
      </Container>
    </BackgroundBlur>
  );
}
