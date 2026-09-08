# Attendance Register

A lightweight, browser-based attendance management system for teachers  log in, add students, mark each session present or absent, and track attendance percentages in real time.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Backend](https://img.shields.io/badge/Backend-None%20Required-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

Live demo:https://attendance-management-system-projec-delta.vercel.app/
---

## Overview

Attendance Register is a simple, self-contained tool built for teachers who need a quick way to take daily attendance without setting up a database or backend. Everything runs in the browser, and all data is saved locally, so there's nothing to install or configure beyond opening the page.

## Features

- **Secure login gate** — a login screen protects the attendance dashboard from unauthorized access
- **Add and manage students** — build a class roster on the fly
- **One-click attendance marking** — mark each student Present or Absent per session
- **Live statistics** — total students, class average, and total sessions marked update automatically
- **Visual percentage tracking** — color-coded progress bars (green / amber / red) show attendance health at a glance
- **Responsive design** — works cleanly on desktop, tablet, and mobile
- **Zero dependencies** — pure HTML, CSS, and JavaScript; no frameworks, no build step, no npm install

## Tech Stack

| Layer      | Technology                  |
|------------|------------------------------|
| Structure  | HTML5                        |
| Styling    | CSS3 (custom properties, responsive layout) |
| Logic      | Vanilla JavaScript (ES6)     |
| Storage    | Browser `localStorage`       |
| Hosting    | Vercel / GitHub Pages (static hosting) |

## Demo Credentials

| Field    | Value   |
|----------|---------|
| Username | `admin` |
| Password | `1234`  |

> Change these in `login.js` before using this for anything beyond a demo — see [Configuration](#configuration).

## Project Structure

```
attendance-register/
├── index.html         # Login page
├── attendance.html    # Attendance dashboard
├── login.js           # Login logic
├── script.js          # Student CRUD, attendance marking, stats
├── style.css          # Shared styling for both pages
└── README.md
```

## Getting Started

### Prerequisites

None — just a modern web browser.

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/attendance-register.git
   cd attendance-register
   ```
2. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```
3. Log in with the demo credentials above.

## Configuration

To change the login credentials, edit the top of `login.js`:

```javascript
const correctUsername = "admin";
const correctPassword = "1234";
```

## Deployment

This project is fully static, so it deploys with zero build configuration on either platform below.

### Deploy on Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Leave all build settings on auto-detect (no build command, no output directory).
4. Click **Deploy**.

### Deploy on GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under "Build and deployment," set Source to **Deploy from a branch**.
3. Select branch `main`, folder `/ (root)`, and save.
4. Your site will be live at `https://<your-username>.github.io/attendance-register/`.

## Limitations

- Data is stored in the browser's `localStorage`, so it is device- and browser-specific — there is no shared database or backend, and data won't sync across devices.
- Authentication is client-side only and intended for demonstration purposes, not production security.

## Roadmap

- [ ] Export attendance records to CSV
- [ ] Multiple class/section support
- [ ] Date-wise attendance history view
- [ ] Backend integration for persistent, multi-device storage

## License

This project is licensed under the MIT License — feel free to use, modify, and distribute it.

## Author

**Diloosha.B**
- Email: dilooshabalachander@gmail.com
- LinkedIn: [diloosha-balachander](https://www.linkedin.com/in/diloosha-balachander-380954397)
- GitHub: [@Diloosha-b](https://github.com/Diloosha-b)
