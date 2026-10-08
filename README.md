# Assignment 1 — Build Yehia's Job Search App

**Name:** Mohamad Badran
**Description:** A Next.js application built to help Yehia track milestones, explore opportunities, and manage applications using the App Router.

## How to Run Locally
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the development server.
3. Open `http://localhost:3000` in your browser.

## Reflection Answers

### 1. Why did you use `await` when reading `params`?
In modern Next.js routing patterns, dynamic route parameters (`params`) are handled asynchronously as promises to optimize server-side rendering and request resolution. Therefore, `await` is required to access values like `id`.

### 2. Why is the route ID a string?
URL path segments captured from web browsers are text strings by nature. Even numeric identifiers like `/opportunities/1` are evaluated as string types (e.g., `"1"`).

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?
The dashboard layout (`layout.tsx`) houses structural items that should persist across screens (such as sub-navigation tabs), while individual dashboard pages (`page.tsx`) house specific view content like metrics or lists.