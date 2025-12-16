# 🔥 Run These Commands After Creating GitHub Repository

## Step 1: Create GitHub Repository First
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name: `vendigo-landing-page`
4. Click "Create repository"

## Step 2: Copy Your Repository URL
After creating, GitHub will show you a URL like:
```
https://github.com/YOUR_ACTUAL_USERNAME/vendigo-landing-page.git
```

## Step 3: Run These Commands (Replace YOUR_ACTUAL_USERNAME)

```bash
# Add your GitHub repository (REPLACE YOUR_ACTUAL_USERNAME!)
git remote add origin https://github.com/YOUR_ACTUAL_USERNAME/vendigo-landing-page.git

# Rename branch to main
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Example (if your username was "john123"):
```bash
git remote add origin https://github.com/john123/vendigo-landing-page.git
git branch -M main
git push -u origin main
```

## ⚠️ Important:
- Replace `YOUR_ACTUAL_USERNAME` with your real GitHub username
- Make sure you created the repository on GitHub first
- The repository should be empty (don't initialize with README)

## After Pushing Successfully:
✅ Your code will be on GitHub
✅ You can then deploy to Vercel
✅ Your Vendigo landing page will be live!

Need help? Tell me your GitHub username and I can give you the exact commands!