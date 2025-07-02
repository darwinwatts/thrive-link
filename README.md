# 🌿 ThriveLink – Personalized Wellness Navigator

ThriveLink is a comprehensive mental health and wellness platform that empowers people to take charge of their health through:
- Daily mood and symptom tracking
- Tailored local resources by age, location, and eligibility
- Peer support circles moderated by professionals
- Micro-challenges to build healthy habits
- Positive milestones and progress visualization

---

## ✨ Features

✅ **Personalized Resource Engine**
- Maps free and low-cost mental health and wellness services based on demographics and location.

✅ **Unified Health Tracker**
- Tracks mental and physical health data with clear trend visualization and early warnings.

✅ **Micro-Challenges**
- Encouraging daily or weekly challenges to build resilience and healthy habits.

✅ **Support Circles**
- Peer-driven support spaces moderated by professionals to ensure safety and trust.

✅ **Community Knowledge Base**
- A library of verified user-contributed guides and resources.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, React Router
- **Backend:** Node.js, Express, Prisma, PostgreSQL
- **Authentication:** JWT, bcrypt
- **APIs & AI:** Planned Hugging Face NLP, custom recommendation logic
- **Hosting:** Vercel (Frontend), Render or Heroku (Backend)

---

## Folders
- `client`: Frontend React application
- `server`: Backend Node.js API

---

## 📂 Project Structure
```
thrive-link/
├── client/       # React frontend
├── server/       # Node.js API backend
├── .gitignore
├── README.md
├── package.json  # Root project config
```

See full details in each folder.

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL (for server)
- npm

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/darwinwatts/thrive-link.git
cd thrive-link
```

```
npm run install-all
```

```
npm run dev
```

## Final Repo Structure

```
thrive-link/
├── client/                        # Frontend React app
│   ├── public/                    # Public assets
│   │   └── index.html
│   ├── src/                       # App source code
│   │   ├── components/            # Reusable components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── CheckIn.tsx
│   │   │   ├── ResourceFeed.tsx
│   │   │   ├── MicroChallenges.tsx
│   │   │   └── SupportCircle.tsx
│   │   ├── pages/                 # Page-level components
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── hooks/                 # Custom hooks
│   │   │   └── useAuth.ts
│   │   ├── services/              # API calls
│   │   │   └── api.ts
│   │   ├── App.tsx                # Root component
│   │   ├── main.tsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── .env.example               # Example environment variables
│   ├── tsconfig.json              # TypeScript config
│   ├── vite.config.ts             # Vite config
│   └── package.json
│
├── server/                        # Backend Node.js API
│   ├── prisma/                    # Prisma schema & migrations
│   │   └── schema.prisma
│   ├── src/                       # Server source code
│   │   ├── controllers/           # Request handlers
│   │   ├── middleware/            # Auth, error handlers
│   │   ├── routes/                # Express routes
│   │   ├── utils/                 # Helper functions
│   │   └── index.ts               # Entry point
│   ├── .env.example               # Example environment variables
│   ├── tsconfig.json              # TypeScript config
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json                   # Root config with scripts to run both client and server
```

