import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Project } from '../../types/project.types';
import * as S from './Projects.styles';

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Suporte Agenda',
      description:
        'Aplicação web focada em otimizar as requisições de eventos, armazenar e gerenciá-las de maneira dinâmica. Solução desenvolvida para resolver a dificuldade no gerenciamento de requisições no setor de Eventos, que era feita com documentos físicos, dificultando o monitoramento dos status das requisições e seu armazenamento. A aplicação destaca as solicitações que são prioridades e as que estão por vir.',
      technologies: ['Python', 'Django'],
    },
    {
      id: '2',
      title: 'Galeria',
      description:
        'Projeto pessoal focado no aprendizado de NodeJS, fazendo um sistema CRUD com Express, MongoDB e utilizando Postman para testes. Com esse projeto, fui capaz de entender mais sobre a arquitetura de um projeto no modelo MVC e sua comunicação com o banco de dados.',
      technologies: ['NodeJS', 'Express', 'MongoDB'],
    },
    {
      id: '3',
      title: 'Flight-Delays-Competition',
      description:
        'Projeto de análise de dados e machine learning a partir de um dataset sobre atraso de voos no Kaggle usado em uma competição. Foi feita análise de dados, processamento dos dados, treinamento e avaliação do modelo. O processo foi baseado em diversos modelos de predição a base de árvore: DecisionTreeClassifier, RandomForest e GradientBoostingTreeDecision do CatBoost.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'CatBoost'],
      githubUrl: 'https://colab.research.google.com/drive/16AQdWGh5bQZlTD3S4scsQTKX9uMuPPYi?usp=sharing',
    },
  ];

  return (
    <S.ProjectsContainer>
      <S.ProjectsContent>
        <S.PageTitle>Meus Projetos</S.PageTitle>
        <S.PageDescription>
          Aqui estão alguns dos projetos que desenvolvi. Cada um representa
          um desafio único e uma oportunidade de aprendizado.
        </S.PageDescription>
        <S.ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </S.ProjectsGrid>
      </S.ProjectsContent>
    </S.ProjectsContainer>
  );
};

export default Projects;

