# 📝MERN Notes Dashboard App
## A MERN notes application where users can create, read, update, and delete notes, built with MongoDB, Express, React, and Node.js.

## 📃Overview
This project is a full‑stack notes app that lets users perform CRUD operations on notes with a clean, responsive interface.
It is inspired by a MERN Stack tutorial and was implemented from scratch while following the video.

## ⚙️Features
* Create, view, update, and delete notes through a REST API.
* Basic validation, error handling, and optional rate limiting on the backend.
* Responsive frontend built with React.
* Deployed full‑stack application ([Click ME!](https://dashnotes.onrender.com/)).

## 💻Tech Stack
Frontend: React, JavaScript, CSS, Tailwind, DaisyUI, 

Backend: Node.js, Express

Database: MongoDB

Other Tools: 
* Nodemon for development
* Render for deployment
* Upstash for ratelimiter

## 📂Project Structure
```bash
root/
  backend/
    server.js
    src/
      routes/
      controllers/
      models/
      middleware/
  frontend/
    src/
      components/
      pages/
      hooks/
```
backend/: Express API, routes, controllers, and MongoDB models.

frontend/: React app with pages and components for listing, creating, and editing notes.

## ✅Getting Started
Prerequisites (For local deployment)
* Node.js (LTS version) installed
* MongoDB URI (local instance or MongoDB Atlas)
* Git installed

## 📩Installation
Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
Install backend dependencies:

```bash
cd backend
npm install
```
Install frontend dependencies:

```bash
cd ../frontend
npm install
```
Environment Variables
Create a backend/.env file and add:

```text
MONGO_URI=<your_mongo_uri>
PORT=5001
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```
Adjust or remove variables depending on what you actually use.

## 🔃Running the App Locally
Backend
```bash
cd backend
npm install
npm run dev
```
The backend will run on http://localhost:<PORT> (for example, http://localhost:5001).

Frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on http://localhost:5173 (or the port shown in your terminal).

## 🛜API Endpoints
GET /api/notes – Get all notes.

GET /api/notes/:id – Get a single note by id.

POST /api/notes – Create a new note.

PUT /api/notes/:id – Update a note by id.

DELETE /api/notes/:id – Delete a note by id.

## ✨Screenshots✨
Add screenshots or GIFs in this section, for example:

Main dashboard with no notes:

Creating notes:

Deleting notes:

Editing notes:

## 🥳Deployment
Deployed on Render: [DashNotes](https://dashnotes.onrender.com/)

## 🧠Lessons Learned
* Building a REST API with Express and MongoDB.
* Handling HTTP methods, status codes, and basic error handling.
* Connecting a React frontend to a Node.js backend.
* Implementing simple rate limiting
* Running middleware on requests and responses from database

## 👏Acknowledgments
Inspired by the “MERN Stack Tutorial for Beginners with Deployment – 2025”.

Original tutorial video: [https://youtu.be/F9gB5b4jgOI](https://youtu.be/F9gB5b4jgOI)

Original tutorial GitHub: [https://github.com/burakorkmez/mern-thinkboard/tree/master](https://github.com/burakorkmez/mern-thinkboard/tree/master)
