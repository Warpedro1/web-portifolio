import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  flex-grow: 1;
  margin: 0;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const CardLink = styled.a<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;

  ${({ $primary, theme }) =>
    $primary
      ? `
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.accent};
      opacity: 0.9;
      transform: scale(1.05);
    }
  `
      : `
    background-color: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.primary};
    }
  `}
`;

