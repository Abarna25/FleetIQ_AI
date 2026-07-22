# FleetIQ AI - Intelligent Fleet Management

## Tagline
"Drive Smarter. Predict Earlier. Operate Better."

FleetIQ AI is a production-ready, enterprise-grade SaaS web application designed for logistics companies, transport operators, delivery businesses, and corporate fleets.

## Architecture

- **Frontend**: Next.js 15, React 19, Tailwind CSS, shadcn/ui.
- **Backend API**: Node.js, Express, TypeScript.
- **Database**: PostgreSQL (via Supabase), managed with Prisma ORM.
- **AI Microservice**: Python, FastAPI for predictive maintenance, route optimization, and driver safety score.

## Directory Structure
```
FleetIQ/
├── frontend/              # Next.js Application
├── backend/               # Node.js + Express REST API
├── ai-service/            # Python FastAPI AI Microservice
├── shared/                # Shared Types, DTOs
├── database/              # Prisma schema and seed script
├── docs/                  # API and Setup Documentation
└── docker-compose.yml     # Local orchestration
```

## Running Locally

### Option 1: Monorepo (Node.js)
To run the Node.js API and Next.js frontend concurrently:
```bash
npm run install:all
npm run dev
```

### Option 2: Docker Compose
To spin up the entire stack including the PostgreSQL database and AI Service:
```bash
docker-compose up --build
```

## API Documentation
Please refer to the `docs/` folder for detailed API specifications and setup guides.
