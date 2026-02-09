# Hi, I'm Parth Chandak 👋

I'm a **Creative Technologist at Zoox**, where I design and prototype experiences for autonomous vehicles. My work sits at the intersection of hardware, software, and design—building UX-focused platforms that reduce iteration time from weeks to days while helping shape the future of transportation.

Before diving into creative technology, I spent years as a Manufacturing Engineer at Zoox and worked on Tesla's Supercharger infrastructure. I hold a **BS in Mechanical Engineering** from Washington State University (with minors in Computer Science and Mathematics) and studied **UX Design at UC Berkeley Extension**.

Beyond my day job, I've spoken at international conferences, have a **patent pending** for audio prioritization technology, and recently led a fundraising campaign that **raised $55,000 to build a school in Nepal**, impacting 210+ students.

This portfolio is my way of sharing my journey through interactive 3D storytelling. Feel free to explore, fork, and make it your own.

---

## ✨ What Makes This Portfolio Special

This isn't just another static portfolio site—it's an **interactive 3D experience** built with:

- Real-time **light refraction physics** through a 3D prism
- **Mouse-controlled light beam** with lens flare effects
- **Dual interaction modes**: Play mode (immersive 3D) and Resume mode (timeline view)
- **Glass-morphism UI** with dark/light theme support
- Zero backend required—fully static and blazing fast

**Live Demo:** [parthchandak.info](https://parthchandak.info)

---

## 🚀 Quick Start

```bash
# Clone this repository
git clone https://github.com/parthchandak02/Portfolio.git
cd Portfolio

# Install dependencies
npm ci

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build
```

---

## 🏗 Tech Stack

- **Framework:** React 19 (Create React App)
- **3D Graphics:** Three.js + React Three Fiber
- **Effects:** @react-three/drei, @react-three/postprocessing
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages
- **Package Manager:** npm

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Canvas3D.js     # 3D canvas + post-processing
│   ├── Scene.js        # 3D scene orchestration
│   ├── Beam.js         # Interactive light beam
│   ├── Prism.js        # 3D prism model (GLTF)
│   ├── Rainbow.js      # Refraction effects
│   ├── Timeline.js     # Resume content
│   └── ...             # UI components
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
├── data/
│   └── timelineData.js # YOUR CONTENT GOES HERE
└── App.js              # Root component

public/
├── gltf/               # 3D models
├── textures/           # Materials & textures
├── logos/              # Company/school logos
├── images/             # Project screenshots
└── fonts/              # Custom fonts
```

---

## 🎨 Making It Yours

### 1. Update Your Content

Edit `src/data/timelineData.js`:

```javascript
export const timelineDataByCategory = {
  experience: [
    {
      title: "Your Job Title",
      company: "Company Name",
      companyLogo: "/logos/company-logo.png",
      date: "Jan 2020 - Present",
      location: "City, State",
      description: "What you accomplished...",
      skills: ["React", "Node.js", "Design"],
      typewriterTitle: "Software Engineer",
      typewriterPrefix: "I am a"
    }
  ],
  education: [...],
  projects: [...],
  // 9 categories: experience, education, patent, projects, 
  //               speaking, awards, research, media, volunteering
};
```

### 2. Add Your Assets

**Logos** (`public/logos/`):
- Add company/school logos as PNG files
- Reference them in your timeline data

**Project Images** (`public/images/`):
- Add project screenshots
- Use descriptive filenames

**3D Model** (optional):
- Replace `public/gltf/prism.glb` with your own model
- Update the reference in `src/components/Prism.js`

### 3. Customize Branding

**Domain:**
- Update `homepage` in `package.json`
- Replace `public/CNAME` with your domain

**Social Links:**
- Edit `src/components/RightSidebar.js`

**Theme:**
- Customize colors in `src/styles.css`
- Adjust glass-morphism in component CSS files

### 4. Icon Mapping

Map skills to icons in `src/data/timelineData.js`:

```javascript
export const iconMap = {
  'React': Zap,
  'Python': Code,
  'Figma': Figma,
  // Add your skills
};
```

Browse available icons: [lucide.dev](https://lucide.dev)

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

**Initial Setup:**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create
2. Select **Pages** → **Connect to Git**
3. Choose your GitHub repository
4. Configure build settings:
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
5. Click **Save and Deploy**

Your site will be live at `<project-name>.pages.dev` in ~2 minutes.

**Add Custom Domain:**

1. Go to your Pages project → **Custom domains**
2. Click **Set up a domain**
3. Enter your domain
4. Cloudflare auto-configures DNS and SSL

**Auto-Deployments:**

Every push to `main` automatically triggers a rebuild and deploys to production.

**Skip Builds for Docs-Only Changes:**

```bash
# Use [skip ci] or [ci skip] in commit message
git commit -m "docs: update README [skip ci]"
git push

# This prevents unnecessary rebuilds for:
# - README updates
# - Documentation changes
# - Comment-only changes
```

**When to Skip vs. Build:**

✅ **Skip builds for:**
- README/documentation updates
- Code comments
- .gitignore changes
- Non-code files

❌ **Always build for:**
- Source code changes (src/)
- Asset updates (public/)
- Dependency changes (package.json)
- Configuration changes

**Rollback if Needed:**

1. Go to Pages project → **Deployments**
2. Find last working deployment
3. Click **⋮** → **Rollback to this deployment**

### Alternative Hosts

Works with any static host:
- **Vercel:** Auto-detects Create React App
- **Netlify:** Build command `npm run build`, publish dir `build`
- **GitHub Pages:** Requires `gh-pages` package (not included)

---

## 💡 Development Tips

### Available Scripts

```bash
npm run dev          # Start dev server (kills port 3000 first)
npm run build        # Production build (no source maps)
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
npm run clean        # Remove build directory
npm run health       # Check dependencies + security
```

### Local Build Verification

```bash
npm run clean
npm run build
npx serve -s build -l 8080
# Visit http://localhost:8080
```

### Performance Tips

- Optimize images before adding (use WebP when possible)
- Keep 3D model under 5MB
- Test on mobile devices
- Use Chrome DevTools Lighthouse for performance audits

### Security Best Practices

- Never commit API keys or secrets
- Use environment variables (prefix with `REACT_APP_`)
- Run `npm audit fix` regularly
- Keep dependencies updated

### Accessibility Considerations

- Provide fallback for users without WebGL support
- Ensure keyboard navigation works
- Test with screen readers
- Maintain sufficient color contrast

---

## 🐛 Troubleshooting

**Build fails with "out of memory":**
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

**3D scene not rendering:**
- Check browser console for WebGL errors
- Verify `public/gltf/prism.glb` exists
- Test on different browsers (Chrome, Firefox, Safari)

**Assets return 404:**
- Verify `homepage` in `package.json` matches deployment URL
- Check file paths in code
- Ensure files exist in `public/` directory

**Cloudflare build fails:**
- Ensure only one lockfile exists (`package-lock.json`)
- Verify build command is `npm run build`
- Check Node version compatibility (>=16.0.0)

---

## 📚 Learning Resources

**React & Three.js:**
- [React Documentation](https://react.dev)
- [Three.js Journey](https://threejs-journey.com) (excellent course)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)

**Deployment:**
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)

**Design:**
- [Lucide Icons](https://lucide.dev)
- [Glass-morphism Generator](https://hype4.academy/tools/glassmorphism-generator)

---

## 🤝 Contributing

Found a bug or have a feature suggestion? Feel free to:
1. Open an issue on GitHub
2. Submit a pull request
3. Fork and customize for your own use

---

## 📄 License

MIT License - free to use for personal and commercial projects.

---

## 💬 Let's Connect

If you found this useful or built something cool with it, I'd love to hear about it!

- **Portfolio:** [parthchandak.info](https://parthchandak.info)
- **GitHub:** [@parthchandak02](https://github.com/parthchandak02)
- **LinkedIn:** [linkedin.com/in/parthchandak02](https://linkedin.com/in/parthchandak02)

---

<div align="center">
  <p>Built with React, Three.js, and too much coffee ☕</p>
  <p>Made with ❤️ by Parth Chandak</p>
</div>
