import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import * as S from './Contact.styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configuração do EmailJS
      // IMPORTANTE: Substitua estes valores pelas suas credenciais do EmailJS
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.ContactContainer>
      <S.ContactContent>
        <S.PageTitle>Entre em Contato</S.PageTitle>
        <S.PageDescription>
          Tem alguma pergunta ou proposta? Fique à vontade para entrar em contato.
          Responderei o mais breve possível.
        </S.PageDescription>

        <S.ContactForm onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu.email@example.com"
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="message">Mensagem</S.Label>
            <S.TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Sua mensagem aqui..."
            />
          </S.FormGroup>

          {submitStatus === 'success' && (
            <S.SuccessMessage>
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </S.SuccessMessage>
          )}

          {submitStatus === 'error' && (
            <S.ErrorMessage>
              Erro ao enviar mensagem. Por favor, tente novamente ou entre em
              contato diretamente pelo email.
            </S.ErrorMessage>
          )}

          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </S.SubmitButton>
        </S.ContactForm>
      </S.ContactContent>
    </S.ContactContainer>
  );
};

export default Contact;

