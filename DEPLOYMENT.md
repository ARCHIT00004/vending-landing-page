# Deployment Guide for Vercel

## Quick Deploy Options

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   vercel
   ```
   
4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **vendigo-landing** (or your preferred name)
   - In which directory is your code located? **./** 
   - Want to override the settings? **N**

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign in**

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Configure project settings:**
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

6. **Click "Deploy"**

## Environment Variables (if needed)

If you need to add environment variables:

1. In Vercel Dashboard: Go to Project Settings → Environment Variables
2. Via CLI: Use `vercel env add` command

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Configuration

The project includes:
- `vercel.json` - Vercel configuration
- `package.json` - Build scripts
- `.gitignore` - Excludes build files and dependencies

## Automatic Deployments

Once connected to Git:
- **Production**: Deployments from `main` branch
- **Preview**: Deployments from other branches and pull requests

Your site will be available at: `https://your-project-name.vercel.app`