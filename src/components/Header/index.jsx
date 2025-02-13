import { Container, MenuIcon, ReceiptIcon, Counter } from "./styles";
import { Logo } from "../Logo";
import { MenuModal } from "../MenuModal";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ButtonText } from "../ButtonText";
import { PiSignOut, PiMagnifyingGlass } from "react-icons/pi";
import { Button } from "../Button";
import { AuthContext } from "../../contexts/AuthContext";
import { Input } from "../Input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";
import { DishesContext } from "../../contexts/DishesContext";

export function Header() {
  const [searchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));
  const { setMenu } = useContext(DishesContext);
  const { count } = useContext(CartContext);
  const { signOut, type } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
  }

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const renderMenuModal = () => {
    return isMenuOpen === true ? <MenuModal toggleMenu={toggleMenu} /> : null;
  };

  const handleNewDish = () => {
    navigate("/new");
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
    }
  };

  return (
    <Container>
      <div className="wrapper">
        {renderMenuModal()}
        <MenuIcon onClick={toggleMenu} />
        <Logo size="1.5rem" head={true} />
        <div className="input">
          <Input
            icon={PiMagnifyingGlass}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="button">
          {type === "admin" ? (
            <Button title="Novo prato" onClick={handleNewDish} />
          ) : (
            <Button icon={<ReceiptIcon />} title={`Pedidos (${count})`} />
          )}
        </div>
        {type !== "admin" ? (
          <div className="receiptContainer">
            <ReceiptIcon />
            <Counter>
              <span>{count}</span>
            </Counter>
          </div>
        ) : null}
        <div className="signout">
          <ButtonText onClick={handleSignOut}>
            <PiSignOut />
          </ButtonText>
        </div>
      </div>
    </Container>
  );
}
