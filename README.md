# Portfólio Web

Portfólio pessoal desenvolvido com Vite, React e TypeScript.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento para aplicações React
- **Styled Components** - CSS-in-JS para estilização
- **EmailJS** - Serviço para envio de emails

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## 🛠️ Configuração do EmailJS

Para que o formulário de contato funcione, você precisa configurar o EmailJS:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Obtenha suas credenciais (Service ID, Template ID, Public Key)
5. Edite o arquivo `src/pages/Contact/Contact.tsx` e substitua:
   - `YOUR_SERVICE_ID` pelo seu Service ID
   - `YOUR_TEMPLATE_ID` pelo seu Template ID
   - `YOUR_PUBLIC_KEY` pela sua Public Key

## 🎨 Personalização

### Tema

Edite o arquivo `src/styles/theme.ts` para personalizar as cores do portfólio.

### Conteúdo

- **Home**: Edite `src/pages/Home/Home.tsx`
- **Sobre**: Edite `src/pages/About/About.tsx`
- **Projetos**: Edite o array de projetos em `src/pages/Projects/Projects.tsx`
- **Footer**: Edite `src/components/Footer/Footer.tsx` para atualizar informações de contato e links

## 🚀 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
│   ├── NavBar/      # Barra de navegação
│   ├── Footer/      # Rodapé
│   └── ProjectCard/ # Card de projeto
├── pages/           # Páginas da aplicação
│   ├── Home/        # Página inicial
│   ├── About/       # Página sobre
│   ├── Projects/    # Página de projetos
│   └── Contact/     # Página de contato
├── styles/          # Estilos globais e tema
├── types/           # Tipos TypeScript
├── App.tsx          # Componente principal
└── main.tsx         # Ponto de entrada
```

## 🚀 Deploy no Netlify

O projeto está configurado para deploy no Netlify. Siga os passos abaixo:

### Opção 1: Deploy via GitHub (Recomendado)

1. Faça push do código para o GitHub (já feito)
2. Acesse [Netlify](https://www.netlify.com/)
3. Faça login e clique em "Add new site" > "Import an existing project"
4. Conecte seu repositório GitHub
5. Selecione o repositório `web-portifolio`
6. As configurações já estão no arquivo `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Clique em "Deploy site"

### Opção 2: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

### Configurações

O arquivo `netlify.toml` já está configurado com:
- Comando de build: `npm run build`
- Diretório de publicação: `dist`
- Redirects para SPA (React Router funcionará corretamente)

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

