import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 4rem 2rem;
`;

export const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PageDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

