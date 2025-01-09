import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Container, MenuIcon, ReceiptIcon, Counter } from "./styles";
import { Logo } from "../Logo";
import { MenuModal } from "../MenuModal";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ButtonText } from "../ButtonText";
import { PiSignOut } from "react-icons/pi";
import { Button } from "../Button";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { count } = useContext(CartContext);
  const { signOut } = useContext(AuthContext)

  async function handleSignOut() {
    await signOut();
  }

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const renderMenuModal = () => {
    return isMenuOpen === true ? <MenuModal toggleMenu={toggleMenu}/> : null
  }

  return (
    <Container>
      {renderMenuModal()}
      <MenuIcon onClick={toggleMenu}/>
      <Logo size="1.5rem" />
      <input type="text" placeholder="Busque por pratos ou ingredientes" />
      <div className="button">
        <Button title={`Pedidos (${count})`} />
      </div>
      <div className="receiptContainer">
        <ReceiptIcon />
        <Counter>
          <span>{count}</span>
        </Counter>
      </div>
      <div className="signout">
        <ButtonText onClick={handleSignOut}>
          <PiSignOut />
        </ButtonText>
      </div>
    </Container>
  );
}
