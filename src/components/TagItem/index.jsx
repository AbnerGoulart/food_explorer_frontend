import { Container } from "./styles";
import { FiX, FiPlus } from 'react-icons/fi'

//Estou declarando uma função de nome TagItem que recebe as 
// seguintes props: isNew, value, onClick e ...rest

// *Importante
// - A lógica que controlará a renderização deste componente (...) 
// (...)deve vir do componente pai a que TagItem estiver aninhado.
export function TagItem({ isNew, value, onClick, handleDelete, createTag, setNewTag, newTag, ...rest }){
  return (
    <Container isNew={isNew} >
      <input 
        type="text" 
        value={isNew ? newTag : value} 
        readOnly={!isNew} 
        onChange={e => setNewTag(e.target.value)}
        {...rest}
      />
      <button 
        type="button"
        onClick={isNew ? createTag : () => handleDelete(value)}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}