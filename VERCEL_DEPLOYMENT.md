# Vercel Deployment Guide

This project is configured for deployment on Vercel's free tier. Follow these steps:

## Prerequisites

- Node.js 18+ installed
- Git repository connected to GitHub, GitLab, or Bitbucket
- Vercel account (free) at https://vercel.com

## Deployment Steps

### 1. Connect Your Repository

1. Push this code to your GitHub/GitLab/Bitbucket repository
2. Visit https://vercel.com/new
3. Import your repository

### 2. Environment Variables (Optional)

If you need to connect to a backend service:

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add any required variables (API keys, database URLs, etc.)
3. Common variables:
   - `DATABASE_URL` - Your database connection string
   - `API_KEY` - Any API keys needed

### 3. Build Settings

The build settings are already configured in `vercel.json`:

- **Build Command**: `npm run build`
- **Output Directory**: `.astro/output/client`
- **Development Command**: `npm run dev`

### 4. Deploy

Click "Deploy" and Vercel will automatically:

1. Install dependencies
2. Build your project
3. Deploy to a live URL

Your site will be live at `https://your-project.vercel.app`

## Connecting to a Backend

This template includes stub implementations for data fetching. To add real data:

### Option 1: Firebase (Recommended for free tier)

```typescript
// integrations/cms/service.ts - Replace with Firebase calls
import { collection, getDocs } from 'firebase/firestore';

export class BaseCrudService {
  static async getAll<T>(collectionId: string) {
    const querySnapshot = await getDocs(collection(db, collectionId));
    const items = querySnapshot.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
    return { items, length: items.length };
  }
  // ... implement other methods
}
```

### Option 2: MongoDB Atlas + Next.js API Routes

Create API routes in `src/pages/api/` to handle database operations.

### Option 3: Supabase (PostgreSQL)

Use Supabase client to query data from your database.

## Performance Optimization

- **Images**: Hosted on CDN (static.wixstatic.com, images.unsplash.com, etc.)
- **Static Generation**: Vercel automatically optimizes static assets
- **Serverless Functions**: API routes scale automatically

## Free Tier Limits

Vercel's free tier includes:

- Unlimited deployments
- Unlimited domains
- 100GB bandwidth/month
- Serverless functions with 10-second timeout
- Build time up to 45 seconds

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Ensure all imports are correct (especially Wix imports removed)

### Page Not Found (404)

- Verify the Astro file routing matches your URL structure
- Check that fallback routes are configured in `Router.tsx`

### Environment Variables Not Working

- Redeploy after adding new environment variables
- Check variable names match exactly (case-sensitive)

## Next Steps

1. Replace mock data services with real backend
2. Add environment variables if needed
3. Set up custom domain
4. Configure CI/CD for automated deployments

## Support

- Vercel Docs: https://vercel.com/docs
- Astro Docs: https://docs.astro.build
- Discord Community: https://astro.build/chat
