# Drizzle-NeonDB-Nextjs-Template

### [DrizzleORM](https://orm.drizzle.team/) - [NeonDB](https://neon.tech/) - [Next.js](https://nextjs.org/) - Starter Template.

## Use

Use this template to get start or as template. This template consist DrizzleORM, NeonDB, Zod, Next.js 13 App, TailwindCSS..

- Git Clone and Starts..

## Getting Started

#### Firstly, Copy your NeonDB psql url available in dashboard (this url is different for each database) and then add it to .env file.

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Drizzle

To Create migration use following command: the following command is set in package.json file.

```bash
pnpm run generate
```

To Push local migration to PlanetScale use following command: the following command is set in package.json file.

```bash
pnpm run db:push
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Learn Next.js](https://nextjs.org/docs) - Next.js Docs
- [Learn DrizzleORM](https://orm.drizzle.team/) - DrizzleORM Docs
- [Learn NeonDB](https://neon.tech/docs) - NeonDB Docs

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.