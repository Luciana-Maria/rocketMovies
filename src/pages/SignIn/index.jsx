import {Container, Form, Background} from './styles'
import{FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../componets/Input'
import {Button} from '../../componets/Button'
import {ButtonText} from '../../componets/ButtonText'

export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.  </p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />
        <a href="#">Criar contar</a>
      </Form>
      <Background />
    </Container>
  )
}