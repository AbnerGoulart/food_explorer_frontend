# 🍽️ Food Explorer Frontend

Este é o frontend do **Food Explorer**, um cardápio digital para um restaurante fictício. O projeto faz parte do desafio final da formação Explorer da **Rocketseat**.  

🚀 **Acesse a aplicação:** [Food Explorer](https://foodexplorer-digital.netlify.app)

---

## 🛠️ Tecnologias utilizadas
- React.js
- Styled Components
- Axios
- React Router DOM

---

## 🔑 Acesso à aplicação

### 👨‍🍳 Conta Administrador
Para acessar como **administrador**, utilize as credenciais:
- **Email:** `admin@foodexplorer.com`
- **Senha:** `123456`

### 👥 Conta Cliente
Para acessar como **cliente**, realize um cadastro na plataforma e depois faça login com o email e senha cadastrados.

---

## 📸 Imagens da Aplicação

<p align="center">
  <img src="https://github.com/user-attachments/assets/cd553b4d-c996-4ce7-a7eb-9b60db4c64ea" width="285">
  <img src="https://github.com/user-attachments/assets/1317cd57-d07e-48eb-9d47-9c59a70a53e9" width="285">
  <img src="https://github.com/user-attachments/assets/ba7e7515-ded3-4338-a0b3-23624f0ca0e9" width="285">
  <img src="https://github.com/user-attachments/assets/fb8cfdeb-1723-4cf4-bbeb-674d2c975bb8" width="285"><br>
  <img src="https://github.com/user-attachments/assets/33f7f09b-b7b5-4339-b4c7-078580c6cda9" height="300">
  <img src="https://github.com/user-attachments/assets/c28f28cd-da99-419d-be72-86ce19780582" height="300">
  <img src="https://github.com/user-attachments/assets/88d5657f-6529-40cd-a49b-abea0befbe6e" height="300">
  <img src="https://github.com/user-attachments/assets/a4d6069f-bcb5-4067-8c71-9dbfd5b699b9" height="300">
</p>

---

## 📜 Sumário
- [🚀 Executando em Ambiente Local](#-executando-em-ambiente-local)
- [🔗 API e Configuração](#-api-e-configuração)
- [📦 Deploy](#-deploy)

---

## 🚀 Executando em Ambiente Local

1️⃣ **Clone o repositório:**
```sh
git clone https://github.com/seu-usuario/food-explorer.git
```

2️⃣ **Acesse o diretório do projeto:**
```sh
cd food-explorer
```

3️⃣ **Instale as dependências:**
```sh
npm install
```

4️⃣ **Inicie a aplicação:**
```sh
npm run dev
```

5️⃣ **Acesse no navegador:**  
A aplicação estará disponível em: `http://localhost:5173`

---

## 🔗 API e Configuração
A aplicação está configurada para utilizar a API de produção hospedada em:  
`https://food-explorer-backend-3dbs.onrender.co`

Caso queira rodar a API localmente, edite o arquivo `src/services/api.js` e altere a variável `API_BASE_URL` para:
```js
export const API_BASE_URL = "http://localhost:3333";
```

---

## 📦 Deploy
O deploy está automatizado via **Netlify**.  
Para disparar um novo deploy, basta fazer merge da sua branch na `main`.  
O processo iniciará automaticamente. 🚀

---

📌 **Desenvolvido por:** [Abner Goulart](https://github.com/AbnerGoulart)  
