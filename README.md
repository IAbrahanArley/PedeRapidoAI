# 🍽️ Sistema de Entregas para Restaurantes

Este é um sistema completo de **gestão de pedidos e entregas para restaurantes**, desenvolvido com **Next.js**, **PostgreSQL**, **NextAuth** e diversas ferramentas modernas para garantir performance, segurança e uma ótima experiência de usuário.

---

## 📦 Tecnologias Utilizadas

- **Next.js**: Framework React full-stack para aplicações web modernas.
- **NextAuth.js**: Autenticação segura e flexível.
- **PostgreSQL**: Banco de dados relacional robusto e escalável.
- **Prisma ORM**: Mapeamento objeto-relacional para trabalhar com o PostgreSQL de forma simples e tipada.
- **TailwindCSS + ShadCN UI**: Estilização rápida, responsiva e moderna com componentes prontos para produção.
- **Dnd-Kit**: Biblioteca de drag-and-drop para interação com o Kanban.
- **Axios + SecureStore**: Comunicação segura com o backend e armazenamento de tokens.
- **Context API / Redux**: Gerenciamento de estado para autenticação e controle da aplicação.

---

## 📋 Funcionalidades

### 👥 Autenticação
- Login seguro com **NextAuth**.
- Armazenamento de tokens com `SecureStore`.
- Controle de sessão e rotas protegidas.

### 📦 Pedidos
- Listagem de pedidos com tabela customizada usando **ShadCN UI**.
- Visualização de detalhes: cliente, CPF, valor total, status e data.

### 🗂️ Kanban de Pedidos
- Visualização em **Kanban Board** com as colunas:
  - 🟢 Novo Pedido
  - 🔵 Em Preparo
  - 🟡 Em Entrega
  - 🟣 Entregue
- Arraste os cards entre colunas para atualizar o status do pedido em tempo real.

### 🧾 Produtos e Restaurante
- Cada pedido está vinculado a um restaurante e contém vários produtos.
- Cada item registra quantidade, preço e produto relacionado.


### 🚀 Como rodar localmente
1. Clone o projeto:
```bash
git clone git@github.com:IAbrahanArley/PedeRapidoAI.git
cd PedeRapidAI  
```

2. Instale as depêdencias:
```bash
npm i
```

3. Configure o .env:
```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DATABASE_URL=
```

4. Migrations com Prisma:
```bash
npx prisma migrate dev
```

5. Rode o projeto:
```bash
npm run dev
```

### 🎯 Objetivo
Facilitar a gestão de pedidos de um restaurante, otimizando o acompanhamento desde a criação até a entrega, com controle de status visual, responsivo e intuitivo.
![pederapidoai](https://github.com/user-attachments/assets/7aec6d7d-1588-4995-905e-699bdce42f7a)

