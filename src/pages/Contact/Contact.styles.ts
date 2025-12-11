import styled from 'styled-components';

export const ContactContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 4rem 2rem;
`;

export const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  line-height: 1.8;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.5;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.5;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #10b981;
  color: white;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #ef4444;
  color: white;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
`;

