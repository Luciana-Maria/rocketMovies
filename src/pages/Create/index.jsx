import {Container,Content,Tag,Img} from './styles';
import {Header} from '../../componets/Header';
import {Input} from '../../componets/Input';
import {Textarea} from '../../componets/Textarea';
import {Section} from '../../componets/Section';
import {NoteItem} from '../../componets/NoteItem';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom"
export function Create() {
  return (
    <Container>
      <Header />
      <Img>
        <Content>
          <div>
            <span>
              <FiArrowLeft />

              <Link to="/movie">
                Voltar
              </Link>
            </span>
            <h1>Novo filme</h1>
          </div>
          <div className="input">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>

          <div className="textarea">
            <Textarea placeholder="Observações" />
          </div>

          <Section title="Marcadores">
            <div className="note">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Tag>
            <div className="tag1">Excluir filme</div>
            <div className="tag2">Salvar alterações</div>
          </Tag>
        </Content>
        <div className="reta">
          <img src="/src/assets/retangulo.png" alt="" />
        </div>
      </Img>
    </Container>
  )
}