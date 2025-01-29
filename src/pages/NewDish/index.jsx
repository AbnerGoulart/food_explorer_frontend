import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DishForm } from "../../components/DishForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export function NewDish() {
  const [title, setTitle] = useState("")
  const [section, setSection] = useState("")
  const [price, setPrice] = useState(0.00)
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("../../../public/placeholder.jpg")

  const navigate = useNavigate()
  
  async function handleNewDish() {
    if (!title || !price || !description) {
      alert("Erro: Preencha os campos obrigatórios!")
      return
    }

    try {
      const response = await api.post("/dishes", {
        title: title,
        section: section,
        description: description,
        photo: photo,
        price: price,
      })
      navigate("/")
    } catch(error) {
      console.log(error)
    }
  }

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
        photo={photo}
        setPhoto={setPhoto}
        handleNewDish={handleNewDish}
      />
      <Footer />
    </Container>
  );
}
