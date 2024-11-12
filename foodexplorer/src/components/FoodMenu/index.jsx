import { Container } from './styles';
import { MenuCarousel } from '../MenuCarousel';
import { useContext } from 'react';
import { DishesContext } from '../../contexts/DishesContext';


export function FoodMenu(){
  const {meals, mainDishes, juices} = useContext(DishesContext)
  
  return(
    <Container>
      {meals && <MenuCarousel title={meals.title} items={meals.data} />}
      {mainDishes && <MenuCarousel title={mainDishes.title} items={mainDishes.data} />}
      {juices && <MenuCarousel title={juices.title} items={juices.data}/>}
    </Container>
  )
}