# Deployment Options for Island Simulation

## 🚀 Quick Setup Guides

### 1. **Cloudflare Pages** ⚡ (Recommended - Fastest)
**Pros:** Ultra-fast CDN, generous free tier, great performance
**Cons:** Less feature-rich than Vercel for some use cases

**Setup:**
1. Install Cloudflare CLI: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy: `npm run build && wrangler pages deploy dist`
4. Or connect via GitHub: https://dash.cloudflare.com/ → Pages → Connect GitHub repo

**Auto-deploy:** Connect GitHub repo, Cloudflare auto-deploys on push to main

---

### 2. **Netlify** 🟢 (Easiest Migration from Vercel)
**Pros:** Very similar to Vercel, great DX, free tier, easy GitHub integration
**Cons:** Slightly slower than Cloudflare

**Setup:**
1. Go to: https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repo: `Fortunate787/islandsim`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

**Auto-deploy:** Automatically enabled when connected to GitHub

---

### 3. **GitHub Pages** 📦 (Simplest, Integrated)
**Pros:** Free, integrated with GitHub, simple setup
**Cons:** No server-side features, custom domain needs setup

**Setup:**
1. Go to repo: https://github.com/Fortunate787/islandsim/settings/pages
2. Source: "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
4. Site will be at: `https://fortunate787.github.io/islandsim/`

---

### 4. **Surge.sh** ⚡ (CLI-Based, Super Simple)
**Pros:** Easiest CLI deployment, instant deploys, free tier
**Cons:** No GitHub integration, manual deploys

**Setup:**
1. Install: `npm install -g surge`
2. Deploy: `npm run build && surge dist islandsim.surge.sh`
3. Done! Site live instantly

**Note:** Free subdomain: `*.surge.sh` (or use custom domain)

---

### 5. **Render** 🎨 (Good for Full-Stack)
**Pros:** Free tier, good for static sites, auto-deploy
**Cons:** Slower builds than others

**Setup:**
1. Go to: https://render.com
2. New → Static Site
3. Connect GitHub repo
4. Build: `npm run build`
5. Publish: `dist`
6. Deploy!

---

## 📊 Comparison

| Platform | Speed | Free Tier | GitHub Integration | Ease |
|----------|-------|-----------|-------------------|------|
| **Cloudflare Pages** | ⚡⚡⚡ | ✅ Generous | ✅ Yes | Easy |
| **Netlify** | ⚡⚡ | ✅ Good | ✅ Yes | Very Easy |
| **GitHub Pages** | ⚡⚡ | ✅ Unlimited | ✅ Native | Easy |
| **Surge.sh** | ⚡⚡⚡ | ✅ Good | ❌ No | Very Easy |
| **Render** | ⚡ | ✅ Good | ✅ Yes | Easy |

---

## 🎯 Recommendation

**For your use case (Three.js static site):**
1. **Cloudflare Pages** - Best performance, free, fast CDN
2. **Netlify** - Easiest migration from Vercel
3. **GitHub Pages** - If you want it fully integrated with GitHub

All three will work perfectly with your current build setup!

