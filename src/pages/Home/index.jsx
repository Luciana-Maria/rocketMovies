import {Container,Content, Range, Img} from './styles';
import {Header} from '../../componets/Header';
import {Button} from '../../componets/Button';
import { FaStar, } from "react-icons/fa";
import { FiStar, } from "react-icons/fi";
import { Link } from 'react-router-dom';

export function Home(){
  return (
    <Container>
      <Header />

      <header>
        <h1>Meus filmes</h1>
        <span>

         <Link to="/create"> <Button title=" + Adicionar um título" /> </Link>

        </span>
      </header>
      <Img>
        <Content>
          <h2>Interestella</h2>
          <div className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FiStar />
          </div>
          
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se...
            </p>
          
          <Range>
            <div class="range">Ficção Científica</div>
            <div class="range">Drama</div>
            <div class="range">Família</div>
          </Range>
        </Content>
        <div className="retangulo">
          <img src="/src/assets/retangulo.png" alt="" />
        </div>
      </Img>
      <Content>
        <h2>Interestella</h2>
        <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FiStar />
        </div>
        
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se...
          </p>
        
        <Range>
          <div class="range">Ficção Científica</div>
          <div class="range">Drama</div>
          <div class="range">Família</div>
        </Range>
      </Content>
      <Content>
        <h2>Interestella</h2>
        <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FiStar />
        </div>
        
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se...
          </p>
        
        <Range>
          <div class="range">Ficção Científica</div>
          <div class="range">Drama</div>
          <div class="range">Família</div>
        </Range>
      </Content>
    </Container>
  )
}