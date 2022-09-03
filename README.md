# Mettzer (Front-end)

Projeto para processo seletivo da Mettzer.

## 🚀 Resumo

Este é um site de pesquisas de artigos acadêmicos.
Aqui você pode pesquisar por algum artigo e os resultados serão mostrados na tela de 5 em 5.

Você pode favoritar seus artigos de preferências, os mesmos serão armazenados no localStorage e podem 

ser vistos na página de favoritos!

## 🚀 Começando

Siga as instruções abaixo para a execução do projeto.

### 🔧 Instalação

1 -
  Faça um fork do projeto clicando no botão 'Fork' na parte superior direita do seu github.

2 -
   Faça um clone do projeto copiando o link SSH ou HTTPS disponivel no seu fork e rodando o seguinte comando no seu terminal:
   ```
   git clone 'seu link SSH ou HTTPS'
   ```
3 -
  Entre no arquivo e instale as dependencias necessarias:
  ```
   cd Mettzer
  ```
   ```
   npm install
  ```
  ou
   ```
   yarn install
  ```
  
## 📦 Desenvolvimento

Para rodar o projeto em modo de desenvolvimento você precisa ter todas as dependências instaladas.
Caso não tenha feito, rode o seguinte comando:

```
npm install
```
ou
```
yarn install
```
Com as dependências instaladas, basta apenas rodar o seguinte comando para rodar o projeto:
```
npm run dev
```
ou 
```
yarn run dev
```
Após o comando, o App vai estar rodando na porta 3000 do seu localhost.
Para acessa-lo basta colando o seguinte link na URL do seu navegador:
```
http://localhost:3000/
```
Certifique-se de que não há nenhuma mais nenhuma aplicação rodando na porta 3000 para rodar o projeto!
## 🛠️ Construído com

O projeto foi desenvolvido com as seguintes ferramentas:

* [TypeScript](https://www.typescriptlang.org/)
* [JavaScript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [NextJs](https://nextjs.org/)
* [Vercel](https://vercel.com/)
* [Jest](https://jestjs.io/)
* [RTL](https://testing-library.com/docs/react-testing-library/intro/)
* [ESlint](https://eslint.org/)
* [StyledComponents](https://styled-components.com/)

## 📌 Versão e API

[Git](https://git-scm.com/) - para controle de versão.

API utilizada para obter os artigos: https://core.ac.uk:443/api-v2/articles/search/${articleName}
articleName = nome do artigo pesquisado.

Link para a documentação da API: https://core.ac.uk/docs/#!/all/search

## 🚀 Deploy
O deploy do projeto foi realizado utililizando:
* [Vercel](https://vercel.com/)

* Para ver o projeto em funcionamento, basta acessar este link: https://mettzer.vercel.app/

---
