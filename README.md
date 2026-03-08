
API desenvolvida em Node.js utilizando Express e MongoDB para gerenciamento de pedidos.
Os dados recebidos são transformados (mapping) antes de serem persistidos no banco de dados, conforme especificação do desafio.

# Order API

API desenvolvida em Node.js para gerenciamento de pedidos.

## Tecnologias

- Node.j
- Express
- MongoDB

## Endpoints

POST /order  
Cria um novo pedido

GET /order/:id  
Busca um pedido pelo ID

GET /order/list  
Lista todos os pedidos

PUT /order/:id  
Atualiza um pedido

DELETE /order/:id  
Remove um pedido

## Mapping de dados

Entrada:

numeroPedido  
valorTotal  
dataCriacao  
items

Banco:

orderId  
value  
creationDate  
productId  
quantity  
price

## Execução

```bash
npm install
node app.js
mongod

## Requisitos

- Node.js
- MongoDB
