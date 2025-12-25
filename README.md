# Denver Backflow Testing Website

A professional Jekyll website for Denver Backflow Testing - backflow prevention testing, repair, and certification services.

## Quick Start

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Push this code to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main` (or `master`)
5. Your site will be live at `https://yourusername.github.io/repo-name`

To use your custom domain (denverbackflowtest.com):
1. In repo Settings → Pages, add your custom domain
2. Update your domain's DNS:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IPs (see GitHub docs)

### Option 2: Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Customization

### Update Business Information

Edit `_config.yml`:

```yaml
business:
  name: Denver Backflow Testing
  phone: "(303) 555-0123"        # Update with real phone
  email: "info@denverbackflowtest.com"  # Update with real email
  address: "Denver, CO"
  service_area: "Denver Metro & Front Range"
  hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM"
  license: "CO Lic #12345"      # Update with real license
```

### Contact Form

The contact form needs a form backend. Options:

1. **Formspree** (easiest): 
   - Sign up at formspree.io
   - Replace `YOUR_FORM_ID` in `contact.md` with your form endpoint

2. **Netlify Forms** (if hosting on Netlify):
   - Add `data-netlify="true"` to the form tag
   - Forms work automatically

3. **Basin, Getform, or similar services**

### Adding Images

Place images in `assets/images/` and reference them:

```html
<img src="{{ '/assets/images/your-image.jpg' | relative_url }}" alt="Description">
```

### Modifying Styles

Edit `assets/css/main.css`. Key sections:
- CSS variables at the top control colors, fonts, spacing
- Each component has its own section

### Adding New Pages

Create a new `.md` file in the root:

```yaml
---
layout: page
title: Your Page Title
permalink: /your-url/
---

Your content here...
```

## File Structure

```
denverbackflowtest/
├── _config.yml          # Site settings
├── _layouts/
│   ├── default.html     # Base layout
│   └── page.html        # Page layout
├── _includes/
│   ├── header.html      # Site header
│   └── footer.html      # Site footer
├── assets/
│   ├── css/main.css     # Styles
│   ├── js/main.js       # JavaScript
│   └── images/          # Images
├── index.html           # Homepage
├── services.md          # Services page
├── about.md             # About page
├── contact.md           # Contact page
├── faq.md               # FAQ page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## SEO

The site includes:
- jekyll-seo-tag plugin for meta tags
- jekyll-sitemap plugin for sitemap.xml
- Semantic HTML structure
- Mobile-responsive design

Update the `title` and `description` in `_config.yml` and on each page's front matter for best SEO results.

## Support

For questions about Jekyll: https://jekyllrb.com/docs/
For GitHub Pages: https://docs.github.com/en/pages
