# My Next.js 14 App Test Drive w/ Prisma.Postgres CRUD Operations
I'm taking the new Next.js 14 release for a test drive, along with a Prisma O/RM and a backing PostgreSQL database. 

### Future Bonus:
The `docker-compose.yml` is a good template for quickly standing up a locally containerized sand-box environment for development.

## Prerequisites
- Ubuntu 22.04.3 LTS
- Docker version 24.0.6
  - ***You must create a docker data `volume` named `postgresql-16`*** 
- Node.js version 20.10.0 (`optional: for `npx prisma migration dev --name <shema alt reason>`)
- NPM version 10.2.5 (`optional: for local, non-containerized npm commands`)
