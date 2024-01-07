# My Next.js 14 App Test Drive w/ Prisma.Postgres CRUD Operations
I'm taking the new Next.js 14 release for a test drive, along with a Prisma O/RM and a backing PostgreSQL database. If your system is configured to meet the prerequisites, then you should be able to simply run `docker compose -f docker-compose.dev.yml up` from a terminal within the application directory.

### Future Bonus:
The `docker-compose.dev.yml` is a good template for quickly standing up a locally containerized sand-box environment for development.

## Prerequisites
- Ubuntu 22.04.3 LTS
- Docker Desktop v4.26.1
  - ***You must create a docker-desktop-data `volume` named `hot_reload_next`***
  - ***You must create a docker-desktop-data `volume` named `hot_reload_node_modules`***
    - These are purely for hot reloading during local development
    - These provide a way to stop automatic volume creation in order to manage host-machine storage space
    - You will need to delete and recreate the associated volume when you add `.next` dependencies
    - You will need to delete and recreate the associated volume when you add `node_module` dependencies
  - ***You must create a docker-desktop-data `volume` named `postgres_16`***
    - This is for local development PostgreSQL dependency persistence
- Node.js 20.10.0 LTS
- NPM v10.2.5
  - Manage and develop Prisma O/RM schema
    - `npx prisma migrate dev --name <schema-addition-reason>`
    - `npx prisma migrate deploy`
- Visual Studio Code v1.85.1
  - Quick `RUN AND DEGUG` Startup

![alt text](https://github.com/jphillips28/my-next14-app-demo/blob/main/README_image_02.png?raw=true)
- Azure Data Studio v1.47.0 (*optional*)
- pgAdmin 4 v8.1 (*optional*)

## Testing Notes
- I'm simulating a long running database transaction in each of the CRUD operations for the `MovieApi`
  - This helps demonstrate the snappy *follow-up* data load

![alt text](https://github.com/jphillips28/my-next14-app-demo/blob/main/README_image_01.png?raw=true)
