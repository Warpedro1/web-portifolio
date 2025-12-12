import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterSection>
          <S.FooterTitle>Contato</S.FooterTitle>
          <S.FooterText>Email: warpedro1@gmail.com</S.FooterText>
          <S.FooterText>Telefone: +55 81 99168-5588</S.FooterText>
        </S.FooterSection>
        
        <S.FooterSection>
          <S.FooterTitle>Redes Sociais</S.FooterTitle>
          <S.SocialLinks>
            <S.SocialLink
              href="https://github.com/Warpedro1/web-portifolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <S.GitHubIcon />
              GitHub
            </S.SocialLink>
            <S.SocialLink
              href="https://linkedin.com/in/pedro-guerra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <S.LinkedInIcon />
              LinkedIn
            </S.SocialLink>
          </S.SocialLinks>
        </S.FooterSection>
      </S.FooterContent>
      
      <S.FooterBottom>
        <S.FooterText>© {new Date().getFullYear()} Pedro Guerra. Todos os direitos reservados.</S.FooterText>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;

