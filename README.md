
# Task Management CRUD Project

## 📌 Project Description

This project is a simple Task Management System developed using Laravel and React JS.

It allows users to manage tasks using CRUD operations (Create, Read, Update, Delete).

The React frontend communicates with the Laravel backend through API requests.

## 🛠️ Technologies Used

### Frontend
- React JS
- JavaScript
- HTML
- CSS
- Bootstrap (if used)
- Fetch API

### Backend
- Laravel
- PHP
- MySQL
- REST API

## ✨ Features

- View all tasks
- Add a new task
- Update existing tasks
- Delete tasks
- Display tasks from the database
- Connect React frontend with Laravel backend

## 📂 Project Structure

```text
Task-CRUD/
│
├── Backend/
│   ├── app/
│   ├── database/
│   ├── routes/
│   │   └── web.php
│   ├── .env
│   └── artisan
│
└── Frontend/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── assets/
    ├── package.json
    └── index.html
```

## ⚙️ Installation and Setup

### 1. Clone the Project

```bash
git clone <your-repository-url>
```

### 2. Backend Setup (Laravel)

Go to the backend folder:

```bash
cd Backend
```

Install Laravel dependencies:

```bash
composer install
```

Create the environment file:

```bash
copy .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Configure your database in the `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_db
DB_USERNAME=root
DB_PASSWORD=
```

Run database migrations:

```bash
php artisan migrate
```

Start Laravel server:

```bash
php artisan serve
```

### 3. Frontend Setup (React)

Open another terminal and go to the frontend folder:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start React development server:

```bash
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /task | Get all tasks |
| POST | /api/task | Add a new task |
| PUT | /api/task/{id} | Update a task |
| DELETE | /api/task/{id} | Delete a task |

## 🗄️ Database

Database Name: `task_db`

Table Name: `tasks`

Main Field:

- id
- name
- created_at
- updated_at

## 🚀 How to Run the Project

1. Start XAMPP MySQL.
2. Start Laravel using `php artisan serve`.
3. Start React using `npm run dev`.
4. Open the React development URL in your browser.
5. You can now manage your tasks.

## 👩‍💻 Developer

Developed as a Laravel and React JS CRUD practice project.

---

**Thank You!**