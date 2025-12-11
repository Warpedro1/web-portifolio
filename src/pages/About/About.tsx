import * as S from './About.styles';

const About = () => {
  return (
    <S.AboutContainer>
      <S.AboutContent>
        <S.Section>
          <S.SectionTitle>Sobre Mim</S.SectionTitle>
          <S.SectionText>
            Quero expandir minhas experiências e aprimorar meus conhecimentos. Sou bom em organizar
            o tempo e trabalhar em equipe, também adoro experimentar novos frameworks e aprender
            novas linguagens e diferentes áreas da computação. Adoro praticar exercícios e levar uma
            vida saudável. Busco uma posição em uma empresa inovadora que permita o uso e o
            desenvolvimento de habilidades técnicas.
          </S.SectionText>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Linguagens de Programação</S.SectionTitle>
          <S.SkillsGrid>
            <S.SkillItem>Java</S.SkillItem>
            <S.SkillItem>C</S.SkillItem>
            <S.SkillItem>Python</S.SkillItem>
            <S.SkillItem>MySQL</S.SkillItem>
            <S.SkillItem>HTML/CSS</S.SkillItem>
            <S.SkillItem>JavaScript</S.SkillItem>
          </S.SkillsGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Habilidades e Ferramentas</S.SectionTitle>
          <S.SkillsGrid>
            <S.SkillItem>Django</S.SkillItem>
            <S.SkillItem>NodeJS</S.SkillItem>
            <S.SkillItem>AWS</S.SkillItem>
            <S.SkillItem>Windows</S.SkillItem>
            <S.SkillItem>Linux</S.SkillItem>
            <S.SkillItem>DBeaver</S.SkillItem>
            <S.SkillItem>Orientada a Objetos</S.SkillItem>
            <S.SkillItem>Análise de Algoritmos</S.SkillItem>
          </S.SkillsGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Experiência</S.SectionTitle>
          <S.ExperienceItem>
            <S.ExperienceTitle>Estagiário em Desenvolvedor de Software</S.ExperienceTitle>
            <S.ExperienceCompany>Assembleia Legislativa de Pernambuco (Alepe)</S.ExperienceCompany>
            <S.ExperiencePeriod>Novembro 2023 - Presente</S.ExperiencePeriod>
            <S.ExperienceDescription>
              Desenvolvedor de Sistemas. Faço parte do planejamento da solução, utilizando
              metodologias ágeis e processos de ideação. As linguagens mais usadas são Java e Python.
            </S.ExperienceDescription>
          </S.ExperienceItem>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Educação</S.SectionTitle>
          <S.ExperienceItem>
            <S.ExperienceTitle>Bacharelado em Ciências da Computação</S.ExperienceTitle>
            <S.ExperienceCompany>CESAR School</S.ExperienceCompany>
            <S.ExperiencePeriod>2021 - Presente (término em 2025)</S.ExperiencePeriod>
            <S.ExperienceDescription>
              Classificada como o melhor programa de pós-graduação do país. Além disso, é um dos
              melhores centros de inovação e tecnologia no Brasil. Desde os primeiros semestres,
              tive contato com diversos clientes e problemas do mundo real, aprendendo a resolvê-los
              com diferentes tecnologias, bem como aulas de gestão de equipe, empreendedorismo e
              design thinking.
            </S.ExperienceDescription>
          </S.ExperienceItem>
        </S.Section>
      </S.AboutContent>
    </S.AboutContainer>
  );
};

export default About;

