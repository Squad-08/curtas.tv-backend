# Curtas.tv (API)

Projeto desenvolvido durante o hackaton da [FCamara](https://fcamara.com.br/) em parceria com a imersao_dev da [Alura](https://www.alura.com.br/).

<hr>

## 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção desta API:

1. Node.js
2. Nodemon
3. Express
4. Sequelize
5. Swagger
6. Sucrase

<hr>

## 📃 Documentação
A documentação foi feita utilizando o [swagger](https://swagger.io/).
Com o projeto rodando local, basta acessar: http://localhost:3333/doc
Caso queira testar a API em produção disponibilizamos uma [collection do postman](https://raw.githubusercontent.com/Squad-08/curtas.tv-backend/main/assets/postman-collection/Curtas.Tv-API.postman_collection.json), basta ter o [Postman](https://www.postman.com/) instalado e fazer a importação.

<hr>

## 👷 Como rodar
Antes de seguir os passos descritos abaixo, certifique-se de possuir instalado em sua máquina as seguintes ferramentas: [GIT](https://git-scm.com/), [npm](https://www.npmjs.com/) e [Node.js](https://nodejs.org)

```bash
# Clonar o repositório
$ git clone https://github.com/Squad-08/curtas.tv-backend.git

# Mover para o diretorio do projeto
$ cd curtas.tv-backend

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

# O servidor iniciara na porta 3333
```

<hr>

## 🗄️ Banco de dados
### Diagrama entidade relacionamento

![Diagrama entidade relacionamento](https://github.com/Squad-08/curtas.tv-backend/blob/main/assets/img/diagrama-entidade-relacionamento.png?raw=true)

### Instruções

Para utilizar a API você precisa ter uma instância de um banco de dados, caso não tenha, você pode criar uma instância de um banco postgres no [ElephantSQL](https://www.elephantsql.com/).

#### Configuração da conexão com o banco

Com o banco criado, adicione um arquivo .env na raiz do projeto, seguindo o exemplo abaixo:
```env 
DATABASE_NAME=database-name
DATABASE_HOST=http://localhost
DATABASE_USERNAME=username
DATABASE_PASSWORD=password
```

#### Rodando as migrations e as seeders

Após configurar a conexão com o banco, iremos rodas as migrations e as seeders para assim criarmos nossas tabelas e inserir dados nelas:

```bash
# Rodando as migrations
$ npx sequelize db:migrate

# Rodando as seeders
$ npx sequelize db:seed:all

# Com isso temos nosso banco com as tabelas já populadas
```
