import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DishForm } from "../../components/DishForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export function NewDish() {
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("../../../public/placeholder.jpg");

  const navigate = useNavigate();

  async function handleNewDish() {
    if (!title || !price || !description) {
      alert("Erro: Preencha os campos obrigatórios!");
      return;
    }

    try {
      const dishUploadForm = new FormData();
      dishUploadForm.append("photo", photo);
      dishUploadForm.append("title", title);
      dishUploadForm.append("section", section);
      dishUploadForm.append("description", description);
      dishUploadForm.append("price", price);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await api.post("/dishes", dishUploadForm, config);

      navigate("/");
    } catch (error) {
      console.log(error);
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
