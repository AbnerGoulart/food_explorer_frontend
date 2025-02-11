import { Container } from './styles';
import { MenuCarousel } from '../MenuCarousel';
import { useContext } from 'react';
import { DishesContext } from '../../contexts/DishesContext';


export function FoodMenu(){
  const { menu } = useContext(DishesContext)
  const menuCarousels = menu && menu.map((section, index) => <MenuCarousel key={index} title={section.title} items={section.data} />)

  return(
    <Container>
      {menuCarousels}
    </Container>
  )
}