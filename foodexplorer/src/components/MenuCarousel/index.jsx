import { Card } from "../Card";
import { Container } from "./styles";
import { Heading } from "../Heading";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";
import "swiper/css/pagination";

export function MenuCarousel({title, items}) {  
  const renderCards = () => {
    const cards = []
    items && items.map(item => {
      cards.push(
        <SwiperSlide key={item.id}>
          <Card 
            title={item.title}
            img={item.photo}
            price={item.price} 
          />
        </SwiperSlide>
      )
    })

    return cards
  }

  return (
    <Container>
      <Heading title={title} />
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {renderCards()}
      </Swiper>
    </Container>
  );
}
