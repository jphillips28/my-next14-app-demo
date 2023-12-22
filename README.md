# My Next.js 14 App Test Drive w/ Prisma.Postgres CRUD Operations
I'm taking the new Next.js 14 release for a test drive, along with a Prisma O/RM and a backing PostgreSQL database. If your system is configured to meet the prerequisites, then you should be able to simply run `docker compose up` from a terminal within the application directory.

### Future Bonus:
The `docker-compose.yml` is a good template for quickly standing up a locally containerized sand-box environment for development.

## Prerequisites
- Ubuntu 22.04.3 LTS
- Docker version 24.0.6
  - ***You must create a docker data `volume` named `postgresql-16`***
- Docker Desktop version 4.25.2 (*optional: for monitoring/managing the Linux containers, images, and the persistent volume*)
- Node.js version 20.10.0 (*optional: for `npx prisma migrate dev --name <schema-addition-reason>`*)
- NPM version 10.2.5 (*optional: for local, non-containerized `npm` commands*)
- Azure Data Studio v1.47.0 (*optional*)
- pgAdmin 4 v8.1 (*optional*)
