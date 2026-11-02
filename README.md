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
- Mobile Safari (iOS 12+)
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
