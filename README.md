# Rundown

A Svelte application for managing episode timings and cues.

## Prerequisites

- Node.js 24
  - or fnm/nvm that reads .nvmrc
- npm

## Running the Application
### Development Server

Install dependencies
```bash
npm install
```

To start the development server with hot-reload:

```bash
npm run dev
```

This will start the application on `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

- `src/`: Source code
  - `components/`: Svelte components
  - `episode/`: Episode-related logic and types
  - `library/`: Utility functions
- `public/`: Static assets - remote .json files
- `dist/`: Production build output (created after running `npm run build`)

## Technologies Used

- [Svelte](https://svelte.dev/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool and development server
