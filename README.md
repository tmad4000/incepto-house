# Incepto House Website

> **This is the current, active Incepto House website.** The old Next.js version is archived at [inceptowebsitebentoclone-old](https://github.com/tmad4000/inceptowebsitebentoclone-old).

A beautiful, static Bento-style grid layout site for Incepto House.

- **Live site**: https://incepto.house
- **GitHub**: https://github.com/tmad4000/incepto-house
- **Based on**: https://bento.me/incepto

## 🏠 About Incepto House

Heart-centered intellectual house in Menlo Park, CA, near Stanford University.

## ✨ Features

- **Modern Bento Grid Layout**: Clean, card-based design inspired by the original
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
- **No CMS Required**: Pure HTML/CSS/JS for easy updates via Claude Code
- **Image Gallery**: Interactive lightbox for viewing photos
- **Dark Mode Support**: Automatically adapts to system preferences
- **Performance Optimized**: Fast loading with lazy-loaded images
- **Smooth Animations**: Subtle fade-in and hover effects
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
incepto-house-clone/
├── index.html            # Main HTML file
├── styles.css            # All styling (modern CSS with variables)
├── script.js             # Interactive features
├── assets/
│   ├── css/              # External stylesheets (Inter font, etc.)
│   ├── images/           # All images (91 files, ~12MB)
│   │   ├── Favicons
│   │   ├── Photos
│   │   ├── Screenshots
│   │   └── Icons
│   └── url-mapping.json  # Original URL → local path mapping
└── README.md             # This file
```

## 🚀 Getting Started

### Local Development

1. **Open in Browser**:
   ```bash
   open index.html
   ```

2. **Or use a local server**:
   ```bash
   python3 -m http.server 8739 --bind 127.0.0.1
   # Then visit: http://127.0.0.1:8739/index.html (check the port is free first)
   ```

### Deployment Options

#### Option 1: Vercel
```bash
npm i -g vercel
vercel --prod
```

#### Option 2: Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done!

#### Option 3: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo>
git push -u origin main
# Enable GitHub Pages in repository settings
```

#### Option 4: AWS S3
```bash
aws s3 sync . s3://your-bucket-name --exclude "*.md" --exclude ".git/*"
aws s3 website s3://your-bucket-name --index-document index.html
```

## 🎨 Customization with Claude Code

This site is designed to be easily updated using Claude Code. Here are common tasks:

### Update Content
```
"Update the bio text to say [new text]"
"Add a new startup card for [company name] with description [...]"
"Change the contact email to [new email]"
```

### Add New Sections
```
"Add a new section called 'Events' with upcoming event cards"
"Create a blog section with the latest 3 posts"
```

### Styling Changes
```
"Change the accent color to purple"
"Make the cards have more rounded corners"
"Adjust spacing between sections"
```

### Add Features
```
"Add a contact form at the bottom"
"Implement a search function for startups"
"Add social media share buttons"
```

## 📊 Assets Downloaded

- **Total URLs**: 97
- **Successfully Downloaded**: 91 assets
- **Total Size**: 12 MB
- **CSS Files**: 2 (Inter font, Mapbox styles)
- **Images**: 89 (photos, screenshots, icons)

## 🎯 Design Principles

1. **Clarity**: Clean, readable typography using Inter font
2. **Hierarchy**: Clear visual hierarchy with proper spacing
3. **Responsiveness**: Mobile-first design approach
4. **Performance**: Optimized images and minimal dependencies
5. **Accessibility**: Semantic HTML and ARIA labels
6. **Maintainability**: Well-organized code with comments

## 🛠 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, CSS Variables)
- **Vanilla JavaScript**: No frameworks needed
- **Inter Font**: Clean, professional typography

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 16+; CSS container query units)
- Chrome Mobile (Android 8+)

## 🔧 Maintenance

### Adding New Images
1. Place images in `assets/images/`
2. Reference in HTML: `assets/images/your-image.jpg`
3. Add alt text for accessibility

### Updating Links
1. Open `index.html`
2. Find the relevant card
3. Update the `href` and text content

### Style Updates
1. Open `styles.css`
2. Modify CSS variables in `:root` for global changes
3. Or update specific component styles

## 📝 License

This is a clone for educational/personal use. Original content and design belong to Incepto House.

## 🙏 Acknowledgments

- Original design: Bento.me platform
- Incepto House community
- Built with ❤️ using Claude Code

## 📧 Contact

For inquiries about Incepto House: incepto.house@gmail.com

---

**Built with Claude Code** - Making website updates as easy as having a conversation!

## Backyard image repair (v1.0.1)

The redundant broken backyard card was removed. It referenced a missing image containing the same patio photo plus an old title overlay. The clean patio photo remains, labeled `Backyard`, with its existing lightbox.

This static site needs no environment variables or build. For a smoke check, open `/`, verify the Backyard image loads, then click it and verify the full image in the lightbox. Check desktop and mobile layouts.

Production is Vercel project `incepto-house-clone` under scope `unlinkedai`, serving `https://incepto.house/`. The canonical project directory is Jacob’s profile at `https://social.ideaflow.app/u/jacob`.

### Photo grid correction (v1.0.2)

Workspace and backyard now span two columns so removing the duplicate does not leave a hole. The house-map card fills the remaining half-row beside the kitchen, and the quote spans the full grid. Verify these opening rows at desktop, tablet and mobile widths; retain the existing source order and lightboxes.

### Neighborhood map correction (v1.0.3)

The top-left card now uses the embed generated by Google Maps Share → Embed a map for **West Menlo Park, CA**, replacing a scraped directions-interface image. The embed identifies the public neighborhood (Google place ID `0x808fa4b041c23c6b:0xa4438c48dbbfb3b5`), not the house. Do not replace it with an address, house coordinate, directions route, or device location. The neighborhood link remains usable if the embed is blocked. Google supplies the map controls and attribution. No API key or new dependency is required.

The original Bento desktop/tablet/mobile screenshots are in `screenshots/`, captured February 11, 2026. Its original map was a square Mapbox card in the upper right, with a broad blue halo and the caption “West Menlo Park, CA, USA”. The archived map link used zoom 13. The current layout retains the gap correction from v1.0.2.

Smoke check: open `/` and confirm actual neighborhood map tiles appear with the West Menlo Park boundary; no walking directions screenshot or house pin. Check desktop and mobile, map attribution, the neighborhood link and image lightboxes. Official embed workflow: https://support.google.com/maps/answer/7101463

### Original Bento restoration (v1.1.0)

Restores the archived desktop and mobile hero card positions, proportions, wider gaps, left-aligned sidebar, and square link cards. The original title-image card is recovered byte-for-byte from the Bento export as `assets/images/incepto-title.png`; it now has an intentional place above the living room. Current links, photo lightboxes and light/dark/system controls remain. The House Map link is in Useful Links.

The neighborhood map recreates Bento’s soft colors and blue halo with direct OpenStreetMap tiles and CSS. It is an approximation of the original Mapbox styling. The public area center is deliberately rounded to **37.43, -122.20**, zoom 13, in a logical 512 × 512 pixel viewport. The nine intersecting 256px tiles are positioned as percentages so the square map scales with the card. Tile indices and offsets follow https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames. The halo is decorative and does not represent a residence or device location. No house address, boundary overlay, geolocation permission, API key or map SDK is used. Clicking opens the public West Menlo Park neighborhood in Google Maps.

Tiles load directly in the browser with its normal cache and a valid Referer; do not bulk-download, prefetch beyond the viewport, or archive them. Keep the visible OpenStreetMap attribution and copyright link. Tile service policy: https://operations.osmfoundation.org/policies/tiles/. If tiles cannot load, the labeled neighborhood link remains usable.

Smoke checks: compare the hero against `screenshots/bento-original-desktop-1280.png` and `screenshots/bento-original-mobile-375.png`; verify square map/living-room cards and all nine map tiles, desktop/mobile grid positions without horizontal overflow, title and backyard lightboxes, and theme cycling. No build or environment variables required. Deploy only `index.html`, `styles.css`, `script.js`, and `assets/` to Vercel; keep archived HTML/MHTML, screenshots, and Beads files out of the public deployment.

### Lower-section design review (v1.2.0)

Useful Links, Built by Inceptans, projects and playlists now have semantic sections with their own responsive grids. Resource/project links use compact horizontal cards, companies use three columns on desktop and two on mobile, and the three music cards share a row on desktop and stack on mobile. Consistent heading spacing, readable titles/domains, contained icons, media captions and keyboard focus states replace the oversized square-card treatment. The art lightbox is now a native keyboard-accessible button. The restored hero/map geometry is unchanged.

All 34 link destinations are preserved. Five broken thumbnail references are replaced by the existing Ideaflow favicon, decorative document/research icons, and a neutral AH monogram; every remaining local image path resolves. The useful-link map and Qigong illustrations are inline SVG rather than tiny webpage screenshots. No new dependencies.

Check `/#useful-links`, `/#built-by-inceptans`, `/#community-projects`, and `/#playlists` at desktop and narrow mobile widths. Verify no horizontal overflow or clipped cards, both themes, visible keyboard focus, Enter/Escape on the art lightbox, and local image loading. Deployment uses the same public-only Vercel staging procedure described above.
