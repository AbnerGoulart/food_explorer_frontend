import { Card } from "../Card";
import { Container, StyledSwiper } from "./styles";
import { Heading } from "../Heading";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

register();

export function MenuCarousel({ title, items }) {
  const renderCards = () => {
    const cards = [];
    items &&
      items.map((item, index) => {
        cards.push(
          <SwiperSlide key={item.id || index}>
            <Card
              title={item.title}
              img={item.photo}
              price={item.price}
              id={item.id}
              description={item.description}
            />
          </SwiperSlide>
        );
      });

    return cards;
  };

  return (
    <Container>
      <Heading title={title} />
      <StyledSwiper>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={27}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {renderCards()}
        </Swiper>
      </StyledSwiper>
    </Container>
  );
}
