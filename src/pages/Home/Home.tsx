import { Link } from 'react-router-dom';
import * as S from './Home.styles';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HeroSection>
        <S.HeroContent>
          <S.Greeting>Olá, eu sou</S.Greeting>
          <S.Name>Pedro Guerra</S.Name>
          <S.Title>Desenvolvedor de Software</S.Title>
          <S.Description>
            Bem-vindo ao meu portfólio! Sou um desenvolvedor apaixonado por tecnologia e inovação.
            Atualmente estou expandindo minhas experiências e aprimorando meus conhecimentos em
            desenvolvimento de sistemas. Explore meus projetos e entre em contato para colaborações.
          </S.Description>
          <S.CTAButtons>
            <S.CTAButton as={Link} to="/projects" $primary>
              Ver Projetos
            </S.CTAButton>
            <S.CTAButton as={Link} to="/contact">
              Entre em Contato
            </S.CTAButton>
          </S.CTAButtons>
        </S.HeroContent>
      </S.HeroSection>
    </S.HomeContainer>
  );
};

export default Home;

