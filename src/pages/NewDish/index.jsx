import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DishForm } from "../../components/DishForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewDish() {
  const [title, setTitle] = useState("")
  const [section, setSection] = useState("")
  const [price, setPrice] = useState(0.00)
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <DishForm 
        isEditable={false} 
        title={title} 
        setTitle={setTitle} 
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        section={section}
        setSection={setSection}
      />
      <Footer />
    </Container>
  );
}
