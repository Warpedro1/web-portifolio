# Guia de Deploy no Netlify

## ✅ Correções Aplicadas

1. **Arquivo `netlify.toml`** configurado corretamente
2. **Arquivo `public/_redirects`** criado como backup
3. **Build command** ajustado para funcionar corretamente
4. **Erro de TypeScript** corrigido

## 🔧 Como Mudar o Nome da URL no Netlify

### Opção 1: Mudar o Site Name (URL aleatória)

1. Acesse o [Netlify Dashboard](https://app.netlify.com/)
2. Selecione seu site
3. Vá em **Site settings** (Configurações do site)
4. Role até **General** > **Site details**
5. Clique em **Change site name**
6. Digite o novo nome (ex: `pedro-guerra-portfolio`)
7. A URL será: `https://pedro-guerra-portfolio.netlify.app`

### Opção 2: Configurar Domínio Personalizado

1. No Netlify Dashboard, vá em **Site settings**
2. Clique em **Domain management**
3. Clique em **Add custom domain**
4. Digite seu domínio (ex: `pedroguerra.dev` ou `www.pedroguerra.com`)
5. Siga as instruções para configurar o DNS

## 🚀 Como Fazer o Deploy Novamente

Após fazer as correções, você precisa:

1. **Fazer commit e push das alterações:**
   ```bash
   git add .
   git commit -m "Fix: Corrigir configuração do Netlify e build"
   git push
   ```

2. **No Netlify:**
   - O Netlify detectará automaticamente o novo commit
   - Ou clique em **Trigger deploy** > **Deploy site** no dashboard

## 📋 Verificações

Se o site ainda não estiver funcionando:

1. **Verifique os logs de build:**
   - No Netlify Dashboard, vá em **Deploys**
   - Clique no último deploy
   - Veja os logs para identificar erros

2. **Verifique as configurações:**
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
   - Node version: 18 (configurado no netlify.toml)

3. **Teste localmente:**
   ```bash
   npm run build
   npm run preview
   ```

## 🔗 Links Úteis

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)

