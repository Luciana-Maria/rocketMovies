import { Container,Profile } from './styles';
import {Input} from "../../componets/Input"
export  function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo titulo" />
      <Profile>
        <div>
          
          <strong>Luciana Santos</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/luciana-maria.png" alt="" />
      </Profile>
    </Container>
  )
}