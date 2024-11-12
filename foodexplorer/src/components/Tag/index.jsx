import { Container} from './styles';

export const Tag = ({ title, onClick }) => {
  return (
    <Container type="button" onClick={onClick}>
      {title}
    </Container>
  )
}