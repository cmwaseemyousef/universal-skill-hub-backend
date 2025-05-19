# 🌐 Universal Skill Hub Backend

Welcome to the backend of **Universal Skill Hub** — a powerful and scalable MERN stack application designed to manage and share skill-based learning resources.

This backend is built using **Node.js**, **Express.js**, and **MongoDB Atlas**, with support for file uploads, JWT-based authentication, and modular APIs. It is deployed on **Vercel** for seamless cloud hosting.

---

## 🚀 Live Deployment

🔗 [https://universal-skill-hub-backend.vercel.app](https://universal-skill-hub-backend.vercel.app)

---

## 📌 Features

- ✅ User Registration & Authentication (JWT)
- 📁 File Upload Handling
- 📦 Modular Route Architecture
- 🌐 CORS-enabled API
- 📂 MongoDB Atlas Integration
- 🧩 Middleware for Error Handling
- 📡 Deployed on Vercel (Serverless Functions)

---

## 🧰 Tech Stack

| Technology | Description                  |
|------------|------------------------------|
| Node.js    | JavaScript runtime           |
| Express.js | Web framework for Node.js    |
| MongoDB    | NoSQL Database (MongoDB Atlas) |
| Mongoose   | MongoDB ODM for Node.js      |
| Multer     | File upload middleware       |
| dotenv     | Environment variables        |
| CORS       | Cross-Origin Resource Sharing |
| JWT        | JSON Web Tokens for auth     |

---

## 🔌 API Endpoints

| Method | Endpoint                   | Description                   |
|--------|----------------------------|-------------------------------|
| POST   | `/api/users/register`      | Register a new user           |
| POST   | `/api/users/login`         | User login                    |
| GET    | `/api/users/profile`       | Get user profile (protected)  |
| POST   | `/api/skills/add`          | Add new skill (protected)     |
| GET    | `/api/skills`              | Get all skills                |
| POST   | `/api/uploads`             | Upload a file (image/video)   |

> 🛡️ Protected routes require a valid JWT in the `Authorization` header.

---

## 📁 Folder Structure

```
universal-skill-hub-backend/
├── config/          # DB connection settings
├── middleware/      # Auth, error handlers
├── models/          # MongoDB models
├── routes/          # API route files
├── uploads/         # Uploaded media (ignored in Git)
├── server.js        # Entry point
├── .env.example     # Environment variables sample
├── vercel.json      # Vercel deployment config
```

---

## ⚙️ Getting Started

### 📥 Clone the Repository

```bash
git clone https://github.com/cmwaseemyousef/universal-skill-hub-backend.git
cd universal-skill-hub-backend
```

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Configure Environment Variables

Create a `.env` file using the `.env.example` file provided:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### ▶️ Run the Server Locally

```bash
node server.js
# or with nodemon
npm run dev
```

---

## 🚀 Deployment

The backend is deployed using **Vercel** serverless functions. To redeploy:

1. Push changes to GitHub
2. Vercel auto-deploys from the `main` branch

**Custom Vercel config:** `vercel.json`

---

## 👤 Author

**Waseem Ibn Yousef CM**  
🔗 [LinkedIn](https://www.linkedin.com/in/waseemibnyousefcm)  

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it.

---

## 💡 Contributions

Got suggestions or improvements?  
Feel free to open a pull request or create an issue!

---

> 💥 Empowering skills, enabling learning – Universal Skill Hub
