import styled from 'styled-components';

export const AboutContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 4rem 2rem;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AboutMeContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  line-height: 1.8;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const SkillItem = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ExperienceItem = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ExperienceCompany = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  margin: 0;
`;

export const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin: 0;
`;

export const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  line-height: 1.6;
  margin: 0;
  margin-top: 0.5rem;
`;

