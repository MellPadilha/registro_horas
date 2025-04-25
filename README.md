# Projeto Registro de Horas

Este projeto é composto por um backend e um frontend para o registro de horas trabalhadas. Siga as instruções abaixo para configurar e rodar o projeto.

## Pré-requisitos

- MySQL ou MariaDB instalado e rodando na sua máquina.
- Node.js e pnpm instalados.

## Configuração do Banco de Dados


1. Inicie o MySQL ou MariaDB na sua máquina.
2. Acesse o terminal do MySQL com o seguinte comando:
# Essa configuração do banco de dados foi feita para Linux
    ```bash
    mysql -u root -p
    ```
3. Crie o banco de dados e configure o usuário e senha:
    ```sql
    CREATE DATABASE registro_horas;
    CREATE USER 'root'@'localhost' IDENTIFIED BY 'pass_adm';
    GRANT ALL PRIVILEGES ON registro_horas.* TO 'root'@'localhost';
    FLUSH PRIVILEGES;
    ```
4. Atualize o arquivo `.env` no diretório `backend` com as credenciais configuradas:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=pass_adm
    DB_NAME=registro_horas
    PORT=3001
    ```
5. As tabelas necessárias e os dados serão criadas automaticamente ao rodar o backend pela primeira vez.

## Rodando o Backend

1. Navegue até o diretório `backend`:
    ```bash
    cd backend
    ```
2. Instale as dependências:
    ```bash
    pnpm install
    ```
3. Inicie o servidor:
    ```bash
    pnpm run dev
    ```
4. O backend estará rodando na porta `3001`.

## Rodando o Frontend

1. Navegue até o diretório `frontend`:
    ```bash
    cd frontend
    ```
2. Instale as dependências:
    ```bash
    pnpm install
    ```
3. Inicie o servidor:
    ```bash
    pnpm run dev
    ```
4. O frontend estará rodando na porta `5173`.

## Acessando o Projeto

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3001](http://localhost:3001)

## Observações

Certifique-se de que o MySQL ou MariaDB está rodando antes de iniciar o backend.