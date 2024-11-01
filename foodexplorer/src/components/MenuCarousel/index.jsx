import { Card } from "../Card";
import { Container } from "./styles";
import { Heading } from "../Heading";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";
import "swiper/css/pagination";

export function MenuCarousel({title}) {
  return (
    <Container>
      <Heading title={title} />
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
