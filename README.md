# Interactive 3D Portfolio Template

An open-source portfolio website template featuring an interactive 3D prism visualization with light refraction effects. Built with React and Three.js, this template showcases your professional experience, education, research, and projects through an elegant glass-morphism UI with dual interaction modes.

## Features

- Interactive 3D prism with real-time light refraction and lens flare effects
- Dual mode system: Play mode (3D focus) and Resume mode (timeline view)
- Mouse-controlled light beam with lock/unlock functionality
- Dark/light theme toggle
- Category-based timeline filtering
- Scroll-based highlighting and typewriter animation
- Fully responsive glass-morphism design
- Zero backend required - fully static deployment

## Quick Start

```bash
# Install dependencies
npm ci

# Start development server (localhost:3000)
npm run dev

# Production build
npm run build
```

## Tech Stack

- **Frontend**: React 19.1.0 (Create React App)
- **3D Graphics**: Three.js 0.176.0, React Three Fiber 9.1.2
- **3D Effects**: @react-three/drei, @react-three/postprocessing
- **Icons**: Lucide React
- **Build Tool**: react-scripts (CRA)
- **Deployment**: Cloudflare Pages (or any static host)

## Project Structure

```
src/
├── components/          # React components
│   ├── Canvas3D.js     # 3D canvas container
│   ├── Scene.js        # 3D scene orchestration
│   ├── Beam.js         # Light beam effect
│   ├── Prism.js        # 3D prism model
│   ├── Rainbow.js      # Refraction effect
│   ├── Timeline.js     # Resume timeline
│   └── ...             # UI components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── data/
│   └── timelineData.js # YOUR PORTFOLIO CONTENT HERE
├── App.js              # Root component
├── index.js            # Entry point
└── styles.css          # Global styles

public/
├── gltf/               # 3D models
├── textures/           # Textures and materials
├── lut/                # Color grading
├── logos/              # Company/school logos
├── images/             # Project images
└── fonts/              # Custom fonts
```

## Customization Guide

### 1. Add Your Content

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
      description: "What you did...",
      skills: ["React", "Node.js", "AWS"],
      typewriterTitle: "Software Engineer",
      typewriterPrefix: "I am a"
    }
  ],
  education: [...],
  projects: [...],
  // 9 categories total
};
```

Categories: `experience`, `education`, `patent`, `projects`, `speaking`, `awards`, `research`, `media`, `volunteering`

### 2. Replace Assets

**Logos** (`public/logos/`):
- Add company/institution logos as PNG files
- Reference in `companyLogo` field in timeline data

**Project Images** (`public/images/`):
- Add project screenshots/thumbnails
- Keep descriptive filenames

**3D Model** (optional):
- Replace `public/gltf/prism.glb` with your own model
- Update reference in `src/components/Prism.js`

### 3. Update Branding

**Domain**:
- Update `homepage` in `package.json` to your domain
- Replace `public/CNAME` with your custom domain

**Social Links**:
- Edit `src/components/RightSidebar.js` to update social media URLs

**Colors/Theme**:
- Customize `src/styles.css` for color scheme
- Adjust glass-morphism styles in component CSS files

### 4. Icon Mapping

Icons are mapped in `src/data/timelineData.js`:

```javascript
export const iconMap = {
  'Python': Code,
  'JavaScript': Terminal,
  'React': Zap,
  // Add your skills and corresponding Lucide icons
};
```

Browse available icons at: https://lucide.dev

## Deployment

### Cloudflare Pages (Recommended)

1. **Connect to GitHub:**
   - Go to Cloudflare Dashboard > Workers & Pages > Create
   - Select "Pages" > "Connect to Git"
   - Choose your forked repository

2. **Build Settings:**
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** (leave blank)

3. **Deploy:**
   - Click "Save and Deploy"
   - Site live at `<project-name>.pages.dev`

4. **Custom Domain (Optional):**
   - Go to project > Custom domains > Set up a domain
   - Add your domain (DNS auto-configured if in Cloudflare)

### Alternative Hosts

Works with any static host:
- **Vercel**: Auto-detects Create React App
- **Netlify**: Build command `npm run build`, publish directory `build`
- **GitHub Pages**: Use `gh-pages` package (not included by default)

## Development

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
npm run clean        # Remove build directory
npm run health       # Check dependencies and security
```

### Local Build Verification

```bash
npm run clean
npm run build
npx serve -s build -l 8080
# Visit http://localhost:8080
```

## Best Practices

### Security

- Never commit API keys or secrets
- Use environment variables for sensitive data (prefix with `REACT_APP_`)
- Keep dependencies updated: `npm audit fix`

### Performance

- Optimize images before adding to `public/images/`
- Keep 3D model file sizes reasonable (<5MB)
- Test on mobile devices for performance

### Accessibility

- Provide fallback content for users without WebGL
- Ensure keyboard navigation works in Resume mode
- Test with screen readers

### Content Tips

- Keep descriptions concise and scannable
- Use consistent date formats
- Add alt text considerations for logos
- Test timeline scrolling with many entries

## Troubleshooting

**Build fails with "out of memory":**
- Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

**3D scene not rendering:**
- Check browser console for WebGL errors
- Verify `public/gltf/prism.glb` exists
- Test on different browsers

**Assets not loading (404 errors):**
- Verify `homepage` in `package.json` matches your deployment URL
- Check file paths are correct in code
- Ensure files exist in `public/` directory

**Cloudflare build fails:**
- Ensure only one lockfile exists (`package-lock.json` or `yarn.lock`)
- Check build command matches `npm run build`
- Verify Node version compatibility (>=16.0.0)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- WebGL required for 3D features

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Test thoroughly
4. Submit a pull request

## License

MIT License - free to use for personal and commercial projects.

## Credits

Built with:
- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Lucide Icons](https://lucide.dev/)

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the troubleshooting section above
