import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const Greeting = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  margin: 0;
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  max-width: 600px;
  line-height: 1.8;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CTAButton = styled.button<{ $primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;

  ${({ $primary, theme }) =>
    $primary
      ? `
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primary};
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  `
      : `
    background-color: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  `}
`;

