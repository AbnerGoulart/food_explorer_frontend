import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DishForm } from "../../components/DishForm";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

export function EditDish() {
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const fetchData = () => {
    api.get(`/dishes/details/${id}`).then((response) => {
      const { title, price, description, tags } = response.data;
      setTitle(title);
      setPrice(price);
      setDescription(description);
      setTags(tags.map(tag => tag.name));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveDish = () => {
    const confirm = window.confirm(`confirma a remoção do prato ${title}?`)

    if (confirm) {
      alert(`Prato ${title} deletado`)
      navigate("/")
    }
  }

  const updateDish = () => {
    alert(`${title} atualizado`)
  }

  return (
    <Container>
      <Header />
      <DishForm
        isEditable={true}
        title={title}
        description={description}
        price={price}
        tags={tags}
        setTags={setTags}
        handleRemoveDish={handleRemoveDish}
        updateDish={updateDish}
      />
      <Footer />
    </Container>
  );
}
