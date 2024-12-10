import { Card } from "../Card";
import { Container } from "./styles";
import { Heading } from "../Heading";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

register();

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
            id={item.id}
          />
        </SwiperSlide>
      )
    })

    return cards
  };

  return (
    <Container>
      <Heading title={title} />
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {renderCards()}
      </Swiper>
    </Container>
  );
}
