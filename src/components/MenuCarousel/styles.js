import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: transparent;
  padding: 0;
  margin: 0 auto 3rem; 
  gap: 1rem;
`;

export const StyledSwiper = styled.div`
  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: transform 0.3s ease;
    max-width: fit-content;

    &:hover {
      transform: scale(1.05);
    }
  }

  .swiper-pagination-bullet {
    background-color: #007aff;
    opacity: 0.7;

    &.swiper-pagination-bullet-active {
      opacity: 1;
      background-color: #ff6347;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
    transition: color 0.2s;

    &:hover {
      color: #ff6347;
    }
  }
`;