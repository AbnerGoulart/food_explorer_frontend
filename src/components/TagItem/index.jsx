import { Container } from "./styles";
import { FiX, FiPlus } from 'react-icons/fi'

//Estou declarando uma função de nome TagItem que recebe as 
// seguintes props: isNew, value, onClick e ...rest
export function TagItem({ isNew, value, onClick, ...rest }){
  return (
    <Container isNew={isNew} >
      <input 
        type="text" 
        value={value} 
        readOnly={!isNew} 
        {...rest}
      />
      <button 
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}