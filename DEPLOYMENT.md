# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages at `carolinacraftsites.com/extremeap`.

## What's Been Configured

### 1. Vite Configuration
- Added `base: '/extremeap/'` to handle the subdirectory path
- Configured build output to `dist/` directory

### 2. GitHub Actions Workflow
- Created `.github/workflows/deploy.yml`
- Automatically builds and deploys on push to `main` branch
- Can also be triggered manually via GitHub Actions UI

### 3. Custom Domain Setup
- Added `CNAME` file pointing to `carolinacraftsites.com`
- Added `.nojekyll` file to prevent GitHub from ignoring files starting with underscore

### 4. Assets
- Copied `attached_assets` folder to `public/` so it's included in the build
- Hero image path: `/attached_assets/generated_images/extreme.png`

## Deployment Steps

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit with GitHub Pages configuration"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it whatever you like (e.g., `extremeap`)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - The workflow will automatically run and deploy your site

5. **Configure Custom Domain** (if needed):
   - Make sure your DNS settings for `carolinacraftsites.com` point to GitHub Pages:
     - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - Or CNAME record pointing to your GitHub Pages domain
   - In GitHub repository Settings > Pages, verify the custom domain is set to `carolinacraftsites.com`

## Accessing Your Site

Once deployed, your site will be available at:
- **With custom domain**: `https://carolinacraftsites.com/extremeap`
- **Without custom domain**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the built files at `http://localhost:4173/extremeap/`

## Troubleshooting

### Build Failures
- If the GitHub Actions workflow fails, check the Actions tab in your repository
- Common issues:
  - Missing dependencies: The workflow runs `npm ci` which requires a clean install
  - TypeScript errors: We've configured the build to skip type checking for now

### 404 Errors
- Make sure the base path `/extremeap/` is correctly set in `vite.config.ts`
- Verify all asset paths are relative or use the correct base path

### Custom Domain Issues
- Verify DNS records are correctly configured
- It may take up to 24 hours for DNS changes to propagate
- Check that HTTPS is enabled in GitHub Pages settings

## Making Changes

After the initial deployment, simply push to the `main` branch to trigger a new deployment:

```bash
git add .
git commit -m "Your commit message"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.
