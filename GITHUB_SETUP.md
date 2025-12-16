# 📂 Add Your Vendigo Landing Page to GitHub

## Step 1: Create GitHub Repository

### Option A: Via GitHub Website (Recommended)
1. Go to [github.com](https://github.com)
2. Click the **"+"** button in the top right
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `vendigo-landing-page`
   - **Description**: `Modern React landing page for Vendigo IT Health Check services with Tailwind CSS`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have files)
5. Click **"Create repository"**

### Option B: Via GitHub CLI (if installed)
```bash
gh repo create vendigo-landing-page --public --description "Modern React landing page for Vendigo IT Health Check services with Tailwind CSS"
```

## Step 2: Connect Local Repository to GitHub

After creating the GitHub repository, you'll see a page with commands. Use these:

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/vendigo-landing-page.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files:
   - ✅ `src/` folder with React components
   - ✅ `package.json` with dependencies
   - ✅ `tailwind.config.js` configuration
   - ✅ `README.md` documentation
   - ✅ All deployment files

## Step 4: Deploy to Vercel from GitHub

### Automatic Deployment Setup:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Find your `vendigo-landing-page` repository
5. Click **"Import"**
6. Vercel will auto-detect settings:
   - Framework: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
7. Click **"Deploy"**

### Result:
- ✅ Your site will be live in 2-3 minutes
- ✅ You'll get a URL like: `https://vendigo-landing-page.vercel.app`
- ✅ Auto-deployments on every push to main branch

## 🎯 Quick Commands Summary

```bash
# 1. Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vendigo-landing-page.git

# 2. Rename branch and push
git branch -M main
git push -u origin main

# 3. Future updates
git add .
git commit -m "Update message"
git push
```

## 🔗 What Happens Next

Once on GitHub:
- ✅ **Version Control** - Track all changes
- ✅ **Collaboration** - Share with team members  
- ✅ **Backup** - Code safely stored in cloud
- ✅ **Auto-Deploy** - Vercel deploys on every push
- ✅ **Professional** - Showcase your work

Your Vendigo landing page will be live and professional! 🚀