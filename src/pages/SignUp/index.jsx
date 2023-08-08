import {Container, Form, Background} from './styles'
import{FiMail, FiLock,FiUser,FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../componets/Input'
import {Button} from '../../componets/Button'
import {ButtonText} from '../../componets/ButtonText'
import { Link } from "react-router-dom";

export function SignUP(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir. </p>
        <h2>Faça seu login</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Cadastrar" />
        <span>
            <FiArrowLeft />
          <Link to="/">Voltar para o login</Link>
        </span>
      </Form>
      <Background />
    </Container>
  )
}