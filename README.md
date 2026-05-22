
# Kaiza Kennel

Kaiza Kennel is a modern e-commerce platform for the dog industry, built for Kaiza's business.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma ORM + SQLite
- Stripe-ready checkout placeholders
- Zod request validation for API routes

## Included Features


- Storefront pages: Home, Shop, Product Detail, Cart, Checkout, About, Contact
- Admin dashboard scaffold with auth guard placeholder
- Reusable UI components: Navbar, Footer, HeroSection, ProductCard, CartDrawer
- API routes:
  - `GET /api/products`
  - `POST /api/cart`
  - `POST /api/orders`
  - `GET /api/admin/products` (requires `x-admin-token`)
- Prisma schema for products and orders
- Seed script with realistic sample dog product data

## Project Location

`C:\Users\USER\OneDrive\KAIZA\k9-commerce-platform`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment file:

```bash
copy .env.example .env
```

3. Generate Prisma client and initialize DB:

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

4. Start development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - run ESLint
- `npm run db:generate` - generate Prisma client
- `npm run db:push` - push Prisma schema to database
- `npm run db:seed` - seed product data

## Next Steps

- Connect real authentication (NextAuth/Clerk)
- Add persistent cart with database or session storage
- Integrate live Stripe checkout flow
- Add admin product/order management CRUD screens
