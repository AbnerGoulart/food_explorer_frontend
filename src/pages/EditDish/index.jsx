import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DishForm } from "../../components/DishForm";

export function EditDish() {
  return (
    <Container>
      <Header />
      <DishForm isEditable={true}/>
      <Footer />
    </Container>
  );
}
