import { Pagination } from "swiper";

register();

export function MenuCarousel({ title, items }) {  
  const renderCards = () => {
    return items?.map(item => (
      <SwiperSlide key={item.id}>
        <Card 
          title={item.title}
          img={item.photo}
          price={item.price} 
          id={item.id}
        />
      </SwiperSlide>
    ));
  };

  return (
    <Container>
      <Heading title={title} />
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // Garante que será renderizado na classe específica.
        }}
        modules={[Pagination]}
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
      <div className="swiper-pagination"></div> {/* Contêiner para as bolinhas */}
    </Container>
  );
}
