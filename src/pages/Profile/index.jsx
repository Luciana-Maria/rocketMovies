import {Container,Avatar,Form} from './styles';
import {Header} from '../../componets/Header';
import {Input} from '../../componets/Input';
import {Button} from '../../componets/Button';
import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from 'react-icons/fi';
import { Link } from "react-router-dom"
export function Profile(){
  return (
    <Container>
      <header>
        <FiArrowLeft />
        <Link to="/">voltar</Link>
      </header>
      <Avatar>
        <img src="https://github.com/luciana-maria.png" alt="foto perfil" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" />
        </label>
      </Avatar>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}