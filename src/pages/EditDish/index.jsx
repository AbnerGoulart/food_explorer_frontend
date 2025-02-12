import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DishForm } from "../../components/DishForm";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function EditDish() {
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [tags, setTags] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = () => {
    api.get(`/dishes/${id}`).then((response) => {
      const { title, section, price, description, tags } = response.data;
      setTitle(title);
      setSection(section);
      setPrice(price);
      setDescription(description);
      setTags(tags.map((tag) => tag));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveDish = async () => {
    const confirm = window.confirm(`Confirma a remoção do prato "${title}"?`);

    if (confirm) {
      try {
        await api.delete(`/dishes/${id}`);
        navigate("/");
      } catch (error) {
        console.error("Erro ao remover o prato:", error);
        alert("Ocorreu um erro ao remover o prato.");
      }
    }
  };

  const updateDish = async () => {
    const updatedDish = {
      title,
      section,
      price,
      description,
      photo,
    };

    const dishUploadForm = new FormData();
    dishUploadForm.append("photo", photo);
    dishUploadForm.append("title", title);
    dishUploadForm.append("section", section);
    dishUploadForm.append("description", description);
    dishUploadForm.append("price", price);
    
    if (tags.length > 0) {
      dishUploadForm.append("tags", tags);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await api.put(`/dishes/${id}`, dishUploadForm, config);
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar o prato:", error);
      alert("Ocorreu um erro ao atualizar o prato.");
    }
  };

  return (
    <Container>
      <Header />
      <DishForm
        isEditable={true}
        title={title}
        setTitle={setTitle}
        section={section}
        setSection={setSection}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        tags={tags}
        setTags={setTags}
        handleRemoveDish={handleRemoveDish}
        updateDish={updateDish}
        photo={photo}
        setPhoto={setPhoto}
      />
      <Footer />
    </Container>
  );
}
