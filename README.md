# portfoliov2

A simple, modern portfolio for a software developer built with Next.js and Tailwind CSS.

The home page showcases experience, projects, education, skills, and contact details with subtle scroll-triggered animations.

## Development

- `npm ci` – install dependencies

- `npm run dev` – start the development server
- `npm run build` – build the application for production
- `npm start` – start the production server

The project structure is intentionally minimal and easy to expand with additional pages or components.

## MariaDB & Deployment (Infomaniak)

This project uses Prisma to connect to a MariaDB database. Configure the connection string in `.env.production`:

```
DATABASE_URL="mysql://<USER>:<PASS>@<HOST>:<PORT>/<DBNAME>"
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
