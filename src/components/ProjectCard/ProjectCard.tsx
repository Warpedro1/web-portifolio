import { Project } from '../../types/project.types';
import * as S from './ProjectCard.styles';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <S.Card>
      {project.imageUrl && (
        <S.CardImage src={project.imageUrl} alt={project.title} />
      )}
      <S.CardContent>
        <S.CardTitle>{project.title}</S.CardTitle>
        <S.CardDescription>{project.description}</S.CardDescription>
        <S.Technologies>
          {project.technologies.map((tech) => (
            <S.TechTag key={tech}>{tech}</S.TechTag>
          ))}
        </S.Technologies>
        <S.CardLinks>
          {project.githubUrl && (
            <S.CardLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </S.CardLink>
          )}
          {project.liveUrl && (
            <S.CardLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              $primary
            >
              Ver Projeto
            </S.CardLink>
          )}
        </S.CardLinks>
      </S.CardContent>
    </S.Card>
  );
};

export default ProjectCard;

