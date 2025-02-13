import { Container } from "./styles";

export function Button({ title, icon, price, onClick }) {  
  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <Container type="button" onClick={onClick}>
      {icon && icon}
      <div className="content">
        {title && <span className="title">{title}</span>}
        {price && <span className="price">{formatPrice(price)}</span>}
      </div>
    </Container>
  );
}
