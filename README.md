# ✨ Lumo Event Manager

**Lumo Event Manager** is a modern, full-stack web application designed to help users in Finland manage and explore summer events with ease. Built with a powerful **Laravel (PHP)** backend and a sleek, dynamic **React** frontend, it offers a seamless experience for both event organizers and participants.

![Lumo Event Banner](https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=2938&auto=format&fit=crop)

---

## 🌟 Key Features

-   🎯 **Event Management** – Create, edit, and delete events with full control.
-   🆕 **Recent Events Section** – Automatically displays the latest events by date.
-   🖼️ **Gallery** – View events through a lightbox-style photo gallery.
-   📍 **Map Integration** – Visualize event locations using Leaflet.
-   🌗 **Dark & Light Mode Toggle** – Switch themes on the fly.
-   🧭 **Search & Filter** – Quickly find events by title or location.
-   🗓️ **Interactive Calendar** – View events by date on a calendar.
-   📞 **Contact Form** – Let users send inquiries or feedback.
-   🛠️ **API Integration** – Dynamic event data via Laravel API.
-   📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop.
-   🎨 **Modern UI** – Built using TailwindCSS + DaisyUI.

---

## ⚙️ Tech Stack

| Frontend     | Backend       | Styling              | Dev Tools       |
| ------------ | ------------- | -------------------- | --------------- |
| React        | Laravel (PHP) | TailwindCSS, DaisyUI | Vite, Composer  |
| React Router | Laravel API   | AOS Animations       | MySQL or SQLite |
| Leaflet      | Eloquent ORM  | Dark/Light Mode      | dotenv, Artisan |

---

## 📦 Prerequisites

Ensure you have the following installed:

-   🟢 **Node.js** `v16+`
-   📦 **npm** (comes with Node.js)
-   🐘 **PHP** `v8.0+`
-   🎼 **Composer**
-   🌐 **Laravel** `v9+`
-   🗃️ **Database**: MySQL or SQLite

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
