This is a [Next.js](https://nextjs.org/) project demonstrating how to set and unset [Cookies](https://nextjs.org/docs/app/api-reference/functions/cookies) using [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).

This example can be applied when managing cookies in a [Front.com sidebar plugin](https://dev.frontapp.com/docs/plugin-overview).

## Getting Started

Install the dependencies, run the development server:

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

Next, open Front ([app.frontapp.com](https://app.frontapp.com) or log in via your SSO provider), and head to **Settings > Developers > Create App**.

Create a new app with **Sidebar Plugin** feature, and add `http://localhost:3000` as the plugin URL.

Now you can click back into your Front inbox, and select the plugin in your sidebar.

## Demo

A demo version of this application is published at `https://nextjs-front-plugin-with-cookie.vercel.app/`.

You are welcome to test this by creating a Front Sidebar Plugin app, and adding this as the Side panel URL.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Front Plugin guide](https://dev.frontapp.com/docs/plugin-getting-started) - get started developing Front plugins.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
