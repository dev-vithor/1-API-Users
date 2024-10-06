# 1-API-Users

## Descrição

Esta API permite buscar, editar, apagar e listar usuários cadastrados. Utiliza métodos HTTP e é construída com Node.js, Express, MongoDB e Prisma. A interface visual é desenvolvida com React e Vite.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para Node.js que facilita a criação de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados dos usuários.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build para desenvolvimento rápido com React.

## Funcionalidades

- **Buscar Usuários**: Recupera informações de usuários cadastrados.
- **Editar Usuários**: Atualiza dados de um usuário específico.
- **Apagar Usuários**: Remove um usuário do banco de dados.
- **Listar Usuários**: Lista todos os usuários cadastrados.

## Instalação

> 1. Clone o repositório

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
```

- Navegue até o diretório do projeto:
`cd seu-repositorio`
- Instale as dependências do backend:
`npm install`
- Configure o banco de dados MongoDB no arquivo .env:
`DATABASE_URL="sua-string-de-conexao-mongodb"`
- Execute as migrações do Prisma:
`bash npx prisma migrate dev`
- Inicie o servidor backend:
 `npm run dev`

> - Endpoints da API

**GET** ``/users:`` Lista todos os usuários.
**GET** ``/users/:id:`` Busca um usuário pelo ID.
**POST** ``/users:`` Cria um novo usuário.
**PUT** ``/users/:id:`` Atualiza um usuário pelo ID.
**DELETE** ``/users/:id:`` Remove um usuário pelo ID.

Interface Visual

1. Navegue até o diretório client:

````bash
cd client
Instale as dependências do frontend:
````

 2. Instale as dependências do frontend:

````bash
npm install
````

3. Inicie o servidor de desenvolvimento do Vite:

````bash
npm run dev
````

## Contribuição

1. Faça um fork do projeto.

2. Crie uma nova branch:

```bash
git checkout -b minha-nova-funcionalidade
```

3. Faça suas alterações e commit:

```bash
git commit -m 'Adiciona nova funcionalidade'
```

4. Envie para o repositório remoto:

```bash
git push origin minha-nova-funcionalidade
```

5. Abra um Pull Request.

>Licença
Este projeto está licenciado sob a Licença **MIT**. Veja o arquivo LICENSE para mais detalhes.
