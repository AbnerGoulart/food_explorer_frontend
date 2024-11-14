import { Container } from "./styles";

export function Button({ title, icon, price, onClick }) {
  return (
    <Container type="button" onClick={onClick}>
      {icon && icon}
      <div className="content">
        {price && <span className="price">{price}</span>}
        {title && <span className="title">{title}</span>}
      </div>
    </Container>
  );
}
