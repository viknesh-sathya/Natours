# 🌍 Natours – Full‑Stack Tour Booking Application

A production‑ready **Node.js + Express backend application** with MongoDB, Pug templates, and vanilla JavaScript, built to demonstrate **real‑world backend engineering skills**. The emphasis is on **APIs, authentication, security, and architecture** rather than polished front‑end UIs. The app includes authentication, secure APIs, image uploading, payments, and server‑rendered pages — all bundled with Parcel for optimized front‑end delivery.

> ⚠️ **Note:** This project is backend‑focused. The UI is intentionally minimal to highlight server‑side engineering, not front‑end design.

## 🚀 Features

### 🔐 Authentication & Security

- JWT‑based login, signup, password reset
- Role‑based access control (admin, user, guide, lead-guide)
- Rate limiting, sanitization, and HTTP header protection
- Secure error handling for production vs development

### 🧭 Tours & Bookings

- View tours with dynamic Pug templates
- User‑friendly tour details pages
- Booking workflow with Stripe payments
- Review and rating system

### 🖼️ Image Uploading

- Upload user photos and tour images
- Image resizing and optimization using Sharp
- Secure file handling with Multer

### 🗂️ Backend Architecture

- Clean MVC folder structure
- Reusable controllers, models, and utilities
- Centralized error handling
- Environment‑based configuration

### 🎨 Front‑End

- Vanilla JavaScript for interactivity
- Parcel bundler for optimized assets
- Responsive Pug templates

### ☁️ Deployment

- Fully optimized for Render
- Production build scripts
- Environment variable support

## 🛠️ Tech Stack

| Layer        | Technologies                        |
| ------------ | ----------------------------------- |
| Backend      | Node.js, Express                    |
| Database     | MongoDB, Mongoose                   |
| Templating   | Pug                                 |
| Front‑End    | Vanilla JS, CSS                     |
| Security     | Helmet, Rate Limiting, Sanitization |
| File Uploads | Multer, Sharp                       |
| Payments     | Stripe                              |
| Auth         | JWT                                 |

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

    git clone https://github.com/yourusername/terraquest.git (github.com in Bing) cd terraquest

### 2️⃣ Install dependencies

    npm install

### 3️⃣ Create your environment file

    Create a `config.env` file:

        NODE_ENV=development PORT=3000 DATABASE=your-mongodb-connection-string JWT_SECRET=your-secret JWT_EXPIRES_IN=90d EMAIL_USERNAME=your-email EMAIL_PASSWORD=your-password STRIPE_SECRET_KEY=your-key

### 4️⃣ Run the development server

    npm run build:js

## 🚀 Deployment (Render)

This project is fully configured for Render:

- Render automatically sets NODE_ENV=production
- `npm start` runs `node server.js`
- Parcel builds your front‑end bundle
- Static files served from `/public`

Just connect your repo → Render builds → done.

## 📌 Status

This is a production‑ready backend project showcasing real‑world architecture, security, and deployment workflows.
