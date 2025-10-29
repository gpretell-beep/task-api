# Task API (PostgreSQL)

Endpoints:
- `GET /tasks` — list tasks
- `GET /tasks/:id` — fetch single task by ID

## Local Setup
```bash
npm i
# create a postgres db, e.g., taskdb
# copy .env.example to .env and set DATABASE_URL

npm run prisma:generate
npm run migrate:dev
npm run seed
npm run bundle
npm start
# http://localhost:3000/api-docs
```

## Render
- Build: `npm ci && npm run build:render`
- Start: `npm start`
- Env vars: `DATABASE_URL=postgresql://...`
