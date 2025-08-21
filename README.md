# portfoliov2

A simple, modern portfolio for a software developer built with Next.js and Tailwind CSS.

The home page showcases experience, projects, education, skills, and contact details with subtle scroll-triggered animations.

## Requirements


- Node.js 18.17.x or 20.x (see `.nvmrc`)
- Newer majors such as 22.x or 24.x are not yet supported by Next.js and may cause installs or builds to hang.

## Development

- `npm ci` – install dependencies

- `npm run dev` – start the development server
- `npm run build` – build the application for production
- `npm start` – start the production server

The project structure is intentionally minimal and easy to expand with additional pages or components.

## MariaDB & Deployment (Infomaniak)

This project uses Prisma to connect to a MariaDB database. Copy `.env.example` to `.env` and set the required variables:

```
DATABASE_URL="mysql://<USER>:<PASS>@<HOST>:<PORT>/<DBNAME>"
NEXTAUTH_SECRET="your-secret"
```

For email support via the contact form, optionally provide SMTP credentials:

```
MAIL_HOST=your.smtp.host
MAIL_PORT=587
MAIL_USER=username
MAIL_PASS=password
```

### Deploying to Infomaniak

1. Install dependencies: `npm ci`.
2. Generate Prisma client: `npx prisma generate`.
3. Build the app: `npm run build`.
4. Start in production: `npm start`.

The build process creates a Node.js server that can be run on Infomaniak's Node hosting.

Static assets are stored under `public/assets` with sub‑folders for `projects`, `experience`, `testimonials` and `identity` images. Database records should reference these files using relative paths such as `/assets/projects/<slug>-cover.jpg`.


### CI/CD (GitHub Actions)

A workflow in `.github/workflows/deploy.yml` builds the app and deploys it to your Infomaniak host via SSH. Define these repository secrets:

- `DATABASE_URL` – Prisma connection string used during build
- `INFOMANIAK_HOST` – SSH host name
- `INFOMANIAK_USER` – SSH user name
- `INFOMANIAK_SSH_KEY` – private SSH key with access to the server
- `INFOMANIAK_PATH` – target directory on the server (e.g. `/home/user/www/portfoliov2`)

The job pulls the latest code on the server, installs production dependencies, runs database migrations and rebuilds the app. Finally it restarts the process using `pm2` (create or adjust the command if you manage the app differently).
