# My Next.js 14 App Test Drive w/ Prisma.Postgres CRUD Operations
I'm taking the new Next.js 14 release for a test drive, along with a Prisma O/RM and a backing PostgreSQL database. If your system is configured to meet the prerequisites, then you should be able to simply run `docker compose -f docker-compose.dev.yml up` from a terminal within the application directory.

### Future Bonus:
The `docker-compose.dev.yml` is a good template for quickly standing up a locally containerized sand-box environment for development.

## Prerequisites
- Ubuntu 22.04.3 LTS
- Docker Desktop v4.26.1
  - ***You must create a docker-desktop-data `volume` named `hot_reload_next`***
  - ***You must create a docker-desktop-data `volume` named `hot_reload_node_modules`***
    - This is purely for hot reloading during development
    - This provides a way to stop automatic volume creation in order to manage host-machine storage space
    - You will need to delete and recreate this volume when you add `.next` dependencies
    - You will need to delete and recreate this volume when you add `node_module` dependencies
  - ***You must create a docker-desktop-data `volume` named `postgres_16`***
    - This is purely for local development PostgreSQL dependency persistence
- Node.js 20.10.0 LTS (*optional: for `npx prisma migrate dev --name <schema-addition-reason>`*)
- NPM v10.2.5 (*optional: for local, non-containerized `npm` commands*)
- Visual Studio Code v1.85.1 (*optional*)
- Azure Data Studio v1.47.0 (*optional*)
- pgAdmin 4 v8.1 (*optional*)
