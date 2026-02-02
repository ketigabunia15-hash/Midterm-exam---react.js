This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## 🌍 Live Demo (Vercel)

👉 https://midterm-exam-react-js-1kyy.vercel.app  

The project is deployed and hosted using **Vercel**.

---

## Features
🔐 User authentication (Login / Register)

📦 Product listing page

🔍 Product details page

🛒 Shopping cart functionality

Add to cart

Increase / decrease quantity

Remove items

👤 Protected profile page

💾 LocalStorage usage (Remember Me logic)

🎨 Styling with CSS Modules

## Technologies Used
Next.js

React.js

JavaScript (ES6+)

Redux Toolkit

React Redux

CSS Modules

Fake Store API

Vercel (Deployment)

## Project Structure
midterm-exam---react.js/
├─ src/
│  ├─ app/
│  │  ├─ cart/
│  │  │  ├─ cart.module.css
│  │  │  └─ page.js
│  │  ├─ login/
│  │  │  ├─ login.module.css
│  │  │  └─ page.js
│  │  ├─ products/
│  │  │  ├─ details/
│  │  │  │  └─ [id]/
│  │  │  │     ├─ details.module.css
│  │  │  │     └─ page.js
│  │  │  └─ page.js
│  │  ├─ profile/
│  │  │  ├─ profile.module.css
│  │  │  └─ page.js
│  │  ├─ redux/
│  │  │  ├─ cartSlice.js
│  │  │  ├─ providers.js
│  │  │  └─ store.js
│  │  ├─ register/
│  │  │  └─ page.js
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.js
│  │  ├─ next.js
│  │  ├─ page.js
│  │  └─ page.module.css
│  ├─ components/
│  │  ├─ Footer.js
│  │  ├─ Footer.module.css
│  │  ├─ NavBar.js
│  │  ├─ NavBar.module.css
│  │  ├─ productCard.js
│  │  └─ products.module.css
│  ├─ styles/
      └─ globals.css

## 🖥️ Local Development (localhost)

To run the project locally on your machine, follow the steps below.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

