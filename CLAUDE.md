# Contract Manager — Claude Code Instructions

## Project Overview
Contract management web application for uploading, viewing, searching, and sharing PDF contracts.

## Stack
- **Frontend:** Vue 3 + Vite + TypeScript + Composition API + PrimeVue + Pinia
- **Backend:** Go + Gin
- **Database:** PostgreSQL (local via Docker, prod via AWS RDS)
- **File Storage:** AWS S3 (local via LocalStack)
- **Auth:** Okta OIDC/PKCE with 2FA (hosted login page — no custom auth UI)
- **Testing:** Playwright e2e
- **Deployment:** Vue static on S3+CloudFront, Go API on ECS Fargate
- **IaC:** Terraform

## Project Structure
- `frontend/` — Vue 3 app (Vite, TypeScript, Pinia, Vue Router)
- `backend/` — Go API (Gin, pgx, aws-sdk-go-v2)
- `infra/` — Terraform modules
- `docker-compose.yml` — Local Postgres + LocalStack

## Development Approach
Build iteratively in small layers:
1. Static frontend UI with mock data first
2. Then Go backend + Docker services
3. Then wire frontend to backend
4. Then Okta auth
5. Then Playwright tests
6. Then Terraform + production deploy

Each increment should produce something runnable. Don't jump ahead to later phases until the current one is solid.

## Core Features
1. Upload PDF contracts with metadata
2. View PDFs inline (presigned S3 URLs via vue-pdf-embed)
3. Search contracts (Postgres full-text search)
4. Share contracts via public tokenized links (no auth required)
5. Renewal report — contracts expiring in next N days with contact info
6. Role-based access via Okta groups (admins vs viewers)

## Contract Metadata Fields
name, vendor, type (MSA | SOW), effective_date, ending_date, contact_name, contact_email, s3_key, share_token, created_by

## API Endpoints
```
POST   /api/contracts              Upload PDF + metadata
GET    /api/contracts              List + search (?q=searchterm)
GET    /api/contracts/:id          Get single contract
PUT    /api/contracts/:id          Update metadata
GET    /api/contracts/:id/view     Presigned S3 URL for PDF viewer
GET    /api/share/:token           Public share link (no auth)
GET    /api/reports/renewals       Contracts renewing in next N days (?days=90)
GET    /health                     Health check
```

## Auth Flow
- Vue redirects to Okta hosted login (PKCE flow)
- Okta returns OIDC access + ID tokens
- Vue stores tokens, sends Bearer token on every API call
- Go middleware validates JWT against Okta JWKS endpoint
- JWT groups map to roles: contract-admins -> admin, contract-viewers -> viewer
- On first login, upsert user into users table

## Testing Notes
- Use programmatic Okta token injection — do NOT drive the Okta login UI in Playwright tests
- Inject token into localStorage before each test
