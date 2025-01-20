import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import theme from "../../styles/theme";

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
    background-color: ${({theme}) => theme.COLORS.LIGHT_500};
    opacity: 0.7;

    &.swiper-pagination-bullet-active {
      opacity: 1;
      background-color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }

  .swiper-button-next {
    right: 0;
    background: var(--Gradients-100, linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));  
  }

  .swiper-button-prev {
    left: 0;
    background: var(--Gradients-100, linear-gradient(270deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));  
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;

      height: 100%;
      width: 220px;
      top: 0;

      color: ${({theme}) => theme.COLORS.LIGHT_100};
      transition: 0.2s;

      &::after {
        font-size: 32px;
      }
  
      &:hover {
        transform: scale(1.05);
      }
      
    }
    
  }
`;
