# Food Explorer Frontend

Frontend do desafio final da formação explorer da Rocketseat. A aplicação é um cardapio digital para um restaurante fictício e está implantanda no endereço: `https://eloquent-churros-082c9d.netlify.app`.

Você poder logar como administrador usando as seguintes credenciais:
- **email:** admin@foodexplorer.com
- **senha:** 123456

Para logar como cliente, realize um cadastro e depois faça o login com o email e senha cadastrados.

<img src="https://github.com/user-attachments/assets/cd553b4d-c996-4ce7-a7eb-9b60db4c64ea" width="285">
<img src="https://github.com/user-attachments/assets/1317cd57-d07e-48eb-9d47-9c59a70a53e9" width="285">
<img src="https://github.com/user-attachments/assets/ba7e7515-ded3-4338-a0b3-23624f0ca0e9" width="285">
<img src="https://github.com/user-attachments/assets/fb8cfdeb-1723-4cf4-bbeb-674d2c975bb8" width="285"><br>
<img src="https://github.com/user-attachments/assets/33f7f09b-b7b5-4339-b4c7-078580c6cda9" height="300">
<img src="https://github.com/user-attachments/assets/c28f28cd-da99-419d-be72-86ce19780582" height="300">
<img src="https://github.com/user-attachments/assets/88d5657f-6529-40cd-a49b-abea0befbe6e" height="300">
<img src="https://github.com/user-attachments/assets/a4d6069f-bcb5-4067-8c71-9dbfd5b699b9" height="300">

## Sumário
- [Considerações Iniciais](#considerações-iniciais)
- [Executando em Ambiente Local](#executando-em-ambiente-local)
- [Deploy](#deploy)

## Considerações iniciais
A aplicação aponta automaticamente para a API de produção que fica no endereço `https://food-explorer-backend-3dbs.onrender.co`. Caso queira apontar para a API local, basta alterar o arquivo `src/services/api.js`.

## Executando em ambiente local
1. Instale todas as dependências do projeto:
```sh
$ npm install
```

2. Inicie a aplicação com o comando:
```sh
npm run dev
```

3. Acesse a aplicação pelo navegador no endereço: `http://localhost:5173`.

## Deploy
O deploy está automatizado. Para disparar um novo deploy, basta realizar o merge da sua branch na branch `main`. O processo será iniciado imediatamente após o merge.