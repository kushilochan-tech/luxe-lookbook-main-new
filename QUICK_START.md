# Quick Start Guide - Luxe Lookbook

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: Using Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy your project
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Select your GitHub repository
4. Click "Deploy"
5. Vercel will automatically deploy on every push!

### Option 3: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Click "Deploy"

## Environment Variables

If you need environment variables:

1. In Vercel dashboard: Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

Example variables:
```
DATABASE_URL=your_database_connection_string
API_KEY=your_api_key
```

## Connecting a Backend

The project includes stub services for data and authentication. To connect a real backend:

### Option A: Firebase

```typescript
// integrations/cms/service.ts
import { collection, getDocs } from 'firebase/firestore';

export class BaseCrudService {
  static async getAll<T>(collectionId: string) {
    const querySnapshot = await getDocs(collection(db, collectionId));
    const items = querySnapshot.docs.map(doc => ({
      _id: doc.id,
      ...doc.data()
    }));
    return { items };
  }
  // ... implement other methods
}
```

### Option B: REST API

```typescript
// integrations/cms/service.ts
export class BaseCrudService {
  static async getAll<T>(collectionId: string) {
    const res = await fetch(`${process.env.API_URL}/${collectionId}`);
    return await res.json();
  }
  // ... implement other methods
}
```

### Option C: Supabase / PostgreSQL

```typescript
// integrations/cms/service.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export class BaseCrudService {
  static async getAll<T>(collectionId: string) {
    const { data, error } = await supabase.from(collectionId).select('*');
    return { items: data || [] };
  }
  // ... implement other methods
}
```

## Project Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run check     # Type checking
npm run test:run  # Run tests
```

## File Structure

```
src/
├── components/        # React components
│   ├── pages/        # Page components
│   └── ui/           # UI components
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── pages/            # Astro pages

integrations/
├── cms/              # Data service (stub - add your backend)
└── members/          # Auth service (stub - add your auth provider)
```

## Troubleshooting

### Build Fails on Deploy

1. Check build logs in Vercel dashboard
2. Run `npm run build` locally
3. Make sure all imports are correct

### Pages Return 404

- Check file naming in `src/pages/`
- Verify routes in `src/components/Router.tsx`

### Environment Variables Not Working

- Make sure they're added to Vercel environment variables
- Redeploy after adding variables
- Variable names must match exactly (case-sensitive)

## Need Help?

- [Vercel Docs](https://vercel.com/docs)
- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## What's Included

✅ Astro 4.2.0 with SSR  
✅ React 18 integration  
✅ TypeScript  
✅ Tailwind CSS  
✅ Framer Motion animations  
✅ React Router  
✅ UI components (Radix UI)  
✅ Responsive design  
✅ Vercel deployment ready  
✅ Git hooks with pre-commit linting  

Happy coding! 🚀
