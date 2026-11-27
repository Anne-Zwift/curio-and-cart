# JS Frameworks — Next.js: Online Shop — Curio & Cart

An online shop for curiosities—various odds, ends, and little treasures—built with Next.js App Router, TypeScript, and Tailwind CSS.

## 🔗 Live Demo

[Curio & Cart Live Site](https://curio-and-cart.vercel.app/)

## 🌟 Highlights of This Project

**The application allows users to:**

- Browse a responsive catalog of products with discount badges and star ratings
- View detailed product pages including full descriptions, original/discounted prices, tags, and customer reviews
- Search for products dynamically from the homepage by title or tag
- Add and remove items from a persistent shopping cart (`localStorage`) with toast notifications
- Adjust item quantities and view live line subtotals and total cart cost
- Complete a checkout flow with order confirmation
- Send a message through a TypeScript-validated contact form

## 📐 System Architecture

**Project structure and organization:**
Top-level files configure the application, manage dependencies, and define environment variables (`.env.local` for `API_BASE_URL`).

**Component hierarchy:**
The components defined in Next.js App Router special files are rendered in a specific hierarchy:

1. `layout.tsx` (Root Layout wrapping `CartProvider`, `Header`, and `Footer`)
2. `error.tsx` (React error boundary)
3. `loading.tsx` (React Suspense boundary)
4. `not-found.tsx` (404 fallback UI for unmatched routes and invalid product IDs)
5. `page.tsx` or nested `layout.tsx`

```text
├── app/
│   ├── layout.tsx                 # Root layout & global CartProvider
│   ├── page.tsx                   # Homepage with cached products & live search
│   ├── error.tsx                  # App-wide runtime/fetch error boundary
│   ├── not-found.tsx              # App-wide 404 Not Found page
│   ├── icon.tsx                   # Dynamic C&C favicon via next/og ImageResponse
│   ├── products/
│   │   ├── page.tsx               # Product catalog grid
│   │   ├── loading.tsx            # Skeleton loading UI
│   │   └── [productId]/
│   │       └── page.tsx           # Dynamic product details & generateMetadata
│   ├── cart/page.tsx              # Shopping cart route
│   ├── checkout/success/page.tsx  # Order confirmation route
│   └── contact/page.tsx           # Contact page route
├── components/                    # Reusable Server & Client UI components
├── context/CartContext.tsx        # Global shopping cart state + localStorage sync
└── lib/                           # Typed API helpers (api.ts), types.ts, validation.ts
```

### Backend Context

The application uses a **Server-Fetched External API** architecture, connecting via Next.js Server Components to the Noroff Online Shop REST API.

### Component Breakdown

#### Browser (Client Components — `'use client'`):

- **Global Cart State (`context/CartContext.tsx`):** Manages shopping cart items, quantity updates, item removal, and totals via React Context (`CartProvider` & `useCart`), persisting state across page reloads in `localStorage`.
- **Navigation & Live Cart Badge (`components/Header.tsx`):** Handles responsive mobile menu toggling and reads `totalItems` from `useCart()` to display a live cart count badge.
- **Live Product Search (`components/ProductSearch.tsx`):** Filters cached product data dynamically as the user types by title or tag, rendering clickable result links that redirect directly to `/products/[productId]`.
- **Product Actions & Toast Feedback (`components/ProductDetails.tsx`):** Handles `"Add to Cart"` interactions and displays a 5-second confirmation toast with a direct link to the cart.
- **Shopping Cart View (`components/CartView.tsx`):** Renders cart items, `+`/`−` quantity steppers, item removal with toast confirmation, total cost calculation, and checkout redirection.
- **Contact Form (`components/ContactForm.tsx`):** Manages form input state, runs TypeScript validation (`lib/validation.ts`), displays inline field errors, and renders an auto-dismissing confirmation banner on valid submission.

#### Next.js Server (Server Components & Caching):

- **Server Route Pages (`app/page.tsx`, `app/products/page.tsx`, `app/products/[productId]/page.tsx`, `app/cart/page.tsx`, `app/contact/page.tsx`, `app/checkout/success/page.tsx`):** Thin server-side route wrappers that handle data fetching, static/dynamic SEO metadata (`metadata` & `generateMetadata`), and pass initial props to UI components.
- **Data Access & Caching (`lib/api.ts`):** Server-side fetch helpers (`getProducts` and `getProductById`) typed with `ApiResponse<T>` and cached using Next.js `'use cache'` (`15m` revalidation) to eliminate redundant API requests.
- **Error & Fallback Boundaries (`app/error.tsx`, `app/not-found.tsx`, `app/icon.tsx`):** Handles unexpected runtime/fetch errors with recovery actions, catches 404 routes and missing product IDs via `notFound()`, and generates the app favicon dynamically with `ImageResponse`.

#### Server (Noroff API):

- The external Noroff API (`GET /online-shop` and `GET /online-shop/<id>`) is a unified read-only service that provides all product catalog data, pricing, discounts, tags, and customer reviews.

## 🖥️ Tech Stack

- **Language:** TypeScript (strict mode)
- **Framework:** Next.js 16.4.6 (App Router) & React 19.3.0
- **Styling:** Tailwind CSS v4 & Geist font (`next/font`)
- **Code Quality:** ESLint
- **API:** [Noroff Online Shop API v2](https://docs.noroff.dev/docs/v2/basic/online-shop)
- **Hosting:** [Vercel](https://curio-and-cart.vercel.app/)

## 🚀 Getting Started

1. **Clone the repository and install dependencies:**

   ```bash
   git clone https://github.com
   cd curio-and-cart
   npm install
   ```

2. **Create a `.env.local` file in the project root:**

   ```env
   API_BASE_URL=https://noroff.dev
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✍️ Author

**Anne** — Front-End Development Student ([@Anne-Zwift](https://github.com/Anne-Zwift/))  
Repository: [github.com/Anne-Zwift/curio-and-cart](https://github.com/Anne-Zwift/curio-and-cart)
