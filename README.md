# MVC App

## Instalacao e Execucao

Este projeto usa as dependencias definidas em atividade/package.json.

1. No terminal, entre na pasta atividade:

```bash
cd ..
```

2. Instale as dependencias:

```bash
npm install
```

3. Entre novamente na pasta mvc-app:

```bash
cd mvc-app
```

4. Inicie o servidor:

```bash
node --watch src/app.js
```

5. Abra no navegador:

```text
http://localhost:3000
```

## Rotas

### Home

- GET /

### Clientes

- GET /clients
- POST /clients

### Veiculos

- GET /vehicles
- POST /vehicles
- GET /vehicles/edit/:id
- POST /vehicles/update/:id
- POST /vehicles/delete/:id

### Pedidos

- GET /orders
- POST /orders
