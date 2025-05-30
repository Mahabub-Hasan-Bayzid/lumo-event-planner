# ✨ Lumo Event Manager

**Lumo Event Manager** is a modern, full-stack web application designed to help users in Finland manage and explore summer events efficiently. The project is built using **Laravel (PHP)** for the backend and **React** for the frontend.

---

## 📦 Prerequisites

Before starting, make sure the following software is installed on your system:

-   🟢 **Node.js** (v16 or higher)
-   📦 **npm** (comes with Node.js)
-   🐘 **PHP** (v8.0 or higher)
-   🎼 **Composer** (latest version)
-   🌐 **Laravel** (v9 or higher)
-   🗃️ **Database** (e.g., MySQL or SQLite)

---

## 🚀 Setup Instructions

### 1. 🔁 Clone the Repository

```bash
git clone https://github.com/Mahabub-Hasan-Bayzid/lumo-event-planner.git
cd lumo-event-manager
```

---

### 2. 📥 Install Dependencies

#### 🔧 Backend (Laravel)

```bash
composer install
```

#### 🎨 Frontend (React)

```bash
npm install
```

---

### 3. ⚙️ Configure Environment Variables

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Then open `.env` and update the database and other necessary configurations (DB name, username, password, etc).

---

### 4. 🔐 Generate Application Key

```bash
php artisan key:generate
```

---

### 5. 🗄️ Run Database Migrations

Ensure your database is created and running. Then run:

```bash
php artisan migrate
```

---

### 6. 🧱 Build Frontend Assets

Compile frontend assets using Vite:

```bash
npm run dev
```

---

### 7. 🌍 Start the Laravel Development Server

```bash
php artisan serve
```

> Visit [http://localhost:8000](http://localhost:8000) in your browser to see the application running.

---

## 📝 Additional Notes

-   To **build assets for production**, use:

    ```bash
    npm run build
    ```

-   Ensure your `.env` is correctly configured for the environment (local, staging, production).

---

Happy coding with Lumo! 🇫🇮✨
