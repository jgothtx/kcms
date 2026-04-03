# Contract Manager (kcms)

A web application for uploading, viewing, searching, and sharing PDF contracts.

**Stack:** Vue 3 + Vite + TypeScript, Go + Gin, PostgreSQL, AWS S3, Okta OIDC, Terraform

## Getting Started

### Prerequisites

- Node.js 18+
- Go 1.21+ (later phases)
- Docker & Docker Compose (later phases)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Backend & Services (Phase 2+)

```bash
docker compose up -d   # Postgres + LocalStack
cd backend
go run .
```

## Working with Claude Code

This project is set up for iterative development with [Claude Code](https://claude.com/claude-code). Two files guide Claude's behavior:

- **`CLAUDE.md`** — Project instructions, architecture, and conventions. Claude reads this automatically at the start of every conversation. Edit it to update project context or change how Claude approaches the codebase.

- **`TODO.md`** — Phased build plan with checkbox progress tracking. Claude uses this to understand what's been done and what to work on next. Mark items `[x]` as you complete them.

### Claude Memory

Claude Code maintains per-user memory under `~/.claude/projects/`. This is **not** checked into the repo — each collaborator builds their own memory over time as they interact with Claude. No setup is needed; Claude will create memory files automatically as it learns your preferences and project context.

If you want to seed Claude with project-specific instructions that apply to all collaborators, edit `CLAUDE.md` instead.
