# Contract Manager — Build Plan

Track progress by marking items `[x]` as completed.

## Phase 1 — Static Frontend UI (mock data, no backend)

- [x] **1A** Scaffold Vue 3 + Vite + TypeScript project with Router and Pinia
- [ ] **1B** Add PrimeVue UI library, create layout (AppHeader, nav, sidebar)
- [ ] **1C** Build contract list view with mock data (ContractList, ContractCard)
- [ ] **1D** Build contract detail view with mock PDF viewer placeholder
- [ ] **1E** Build contract upload form (ContractForm + ContractUpload) with mock submit
- [ ] **1F** Build renewal report view with mock data
- [ ] **1G** Add search bar with client-side filtering of mock data

## Phase 2 — Go Backend + Wiring

- [ ] **2A** Create docker-compose.yml (Postgres + LocalStack S3)
- [ ] **2B** Scaffold Go + Gin backend with health check endpoint
- [ ] **2C** Write DB migrations and connect Go to Postgres
- [ ] **2D** Implement contract CRUD API endpoints (POST/GET/PUT /api/contracts)
- [ ] **2E** Implement S3 upload + presigned URL endpoints
- [ ] **2F** Wire Vue frontend to real Go API (replace mock data with axios calls)
- [ ] **2G** Implement share link endpoint (GET /share/:token) and wire to UI
- [ ] **2H** Implement renewal report API + wire to frontend

## Phase 3 — Auth (Okta)

- [ ] **3A** Configure Okta OIDC app, add okta-vue to frontend (PKCE flow + callback)
- [ ] **3B** Go JWT middleware (validate Okta tokens, extract claims)
- [ ] **3C** User upsert on login + role-based access (admin vs viewer)

## Phase 4 — Testing

- [ ] **4A** Playwright setup with token injection helper (bypass Okta UI)
- [ ] **4B** Write e2e tests (auth, contracts, reports)

## Phase 5 — Infrastructure & Deploy

- [ ] **5A** Terraform — RDS, ECS Fargate, S3, CloudFront, ALB
- [ ] **5B** Dockerfile, ECR, CI/CD pipeline, production deploy
