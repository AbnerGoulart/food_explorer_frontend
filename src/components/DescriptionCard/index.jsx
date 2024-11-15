import { Container, ReceiptIcon } from "./styles";
import { ButtonText } from "../ButtonText";
import { Tag } from "../Tag";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function DescriptionCard() {
  return (
    <Container>
      <Link to="/" className="header">
        <ButtonText title="< voltar" />
      </Link>
      <img src="/camarao.png" alt="" />
      <h1>Camarão Carão</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
      <div className="tags">
        <Tag title="camarão" />
        <Tag title="massa" />
        <Tag title="gergelim" />
        <Tag title="alho" />
        <Tag title="grelhado" />
        <Tag title="hot" />
      </div>
      <div className="checkout">
        <div className="counter">
          <button>
            <PiMinus />
          </button>
          <span>01</span>
          <button>
            <PiPlus />
          </button>
        </div>
        <Button 
          icon={<ReceiptIcon />}
          price="R$ 29.70"
          title=" Pedir"
        />
      </div>
    </Container>
  );
}
