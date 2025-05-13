##  Como Funciona a API

Esta API simula uma loja virtual e oferece endpoints para autenticação de usuários e listagem de produtos. Ela utiliza autenticação JWT para proteger rotas e garantir que apenas usuários autenticados possam acessar determinados recursos.

##  Objetivo

O objetivo deste projeto é demonstrar a criação de um sistema simples e funcional de autenticação com **login**, **cadastro de usuário** e **acesso a rotas protegidas**, como a listagem de produtos. O frontend consome a API de forma segura e responsiva, garantindo a experiência de um usuário autenticado em um ambiente controlado.


##  Arquitetura da Aplicação

- **Backend**: Responsável pelo controle de autenticação, geração de tokens JWT e fornecimento dos dados (ex: produtos).
- **Frontend**: Interface gráfica onde o usuário interage com o sistema, realiza login e visualiza as informações protegidas.


### 🛠 Tecnologias Utilizadas
- **Node.js** + **Express** no backend
- **TypeScript**
- **JWT (JSON Web Token)** para autenticação
- **Vite + React + Material UI** no frontend (Fake Store App)

###  Autenticação JWT
O sistema utiliza **JSON Web Token (JWT)** para proteger rotas da API. Após o login, o token é enviado pelo backend e armazenado no `localStorage` do navegador. Esse token é então incluído no cabeçalho (`Authorization`) das requisições para acessar rotas privadas.

1. O usuário realiza login com e-mail e senha.
2. Se as credenciais estiverem corretas, o backend gera um token JWT.
3. O token é armazenado no `localStorage` e enviado nas requisições subsequentes no header `Authorization: Bearer <token>`.
4. Um middleware no backend verifica se o token é válido antes de permitir o acesso a rotas protegidas.

## Funcionalidades

- Cadastro de novos usuários
- Login com validação de credenciais
- Geração e verificação de tokens JWT
- Listagem de produtos (rota protegida)
- Interface responsiva com React e Material UI
- Controle de navegação com base na autenticaç


### Endpoints Principais

| Método | Rota                 | Descrição                          | Protegida |
|--------|----------------------|------------------------------------|-----------|
| POST   | `/api/auth/login`    | Login do usuário                   | ❌        |
| POST   | `/api/auth/register` | Cadastro de novo usuário           | ❌        |
| GET    | `/api/products`      | Lista de produtos                  | ✅        |
| GET    | `/api/user/profile`  | Dados do usuário autenticado       | ✅        |

> As rotas protegidas requerem um token JWT válido no header da requisição.

### ▶️ Iniciando o Projeto

1. Instale as dependências:
   ```bash
   npm install

Inicie o servidor:
npm run dev

A API ficará disponível em:
http://localhost:3000



Matheus Lopes De Sousa
Ra:2311384