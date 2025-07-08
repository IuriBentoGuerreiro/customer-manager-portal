
# Customer Manager Portal - Front-end

Este é o projeto front-end do **Customer Manager Portal**, desenvolvido como parte de um teste prático. Ele tem como objetivo fornecer uma interface web para interagir com uma API de gerenciamento de clientes, permitindo listar, cadastrar e visualizar detalhes de clientes.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e conceitos:

- **Framework:** [Next.js](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Biblioteca de UI:** [React](https://react.dev/)
- **Requisições HTTP:** [Axios](https://axios-http.com/)
- **Gerenciamento de Estado:** `useState`
- **Estilização:** [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- **Padronização de Código:** ESLint e Prettier

---

## 📋 Modelo de Dados

A aplicação interage com o seguinte modelo de dados para clientes:

```json
{
  "id": "UUID",
  "nome": "João Silva",
  "email": "joao@email.com",
  "dataNascimento": "1990-01-01"
}
```
## ✨ Funcionalidades

O portal oferece as seguintes funcionalidades principais para gerenciamento de clientes:

- **Listagem de Clientes:** Exibe uma tabela com todos os clientes cadastrados.
- **Cadastro de Cliente:** Um formulário dedicado para a inserção de novos clientes.
- **Detalhes do Cliente:** Uma página específica que mostra informações detalhadas de um cliente, utilizando Server-Side Rendering (SSR) para otimização de performance e SEO.

⚙️ Como Rodar Localmente
Pré-requisitos

    Node.js (v18.19.1 ou superior): Baixe aqui

    npm (vem junto com o Node.js) ou Yarn

    Back-end (BFF): Certifique-se de que o projeto de back-end (BFF) esteja em execução e acessível na porta 8080
    (ex: http://localhost:8080)

Passos de Execução

    git clone https://github.com/IuriBentoGuerreiro/customer-manager-portal
cd customer-manager-portal

    npm install
 ou, se preferir:
	 yarn install

    npm run dev
 ou:
 yarn dev



    Abra seu navegador e vá para: http://localhost:3000



Você poderá navegar para:

    http://localhost:3000/clientes – Lista de clientes

    http://localhost:3000/clientes/cadastro – Cadastro de novo cliente

