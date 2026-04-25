# War & Perception — Research Project Website

A static academic research website exploring how U.S. military conflicts in Muslim-majority countries have shaped American perceptions of Muslims. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies.

---

## Quick Deploy

### Option A — GitHub Pages (free, recommended)

1. Go to [github.com](https://github.com) and create a new **public** repository (e.g. `war-and-perception`).
2. Upload all three files from this folder: `index.html`, `style.css`, `script.js`.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Set branch to `main` (or `master`) and folder to `/ (root)`. Click **Save**.
6. After ~60 seconds, your site is live at:
   ```
   https://YOUR-USERNAME.github.io/war-and-perception/
   ```

> **Tip:** You can also drag-and-drop files using the GitHub web UI — no git knowledge required. On the repository page, click **Add file → Upload files**.

---

### Option B — Netlify (instant, zero config)

1. Go to [netlify.com](https://www.netlify.com) and sign in (free tier is fine).
2. From the **Sites** dashboard, drag this entire folder onto the page.
3. Netlify deploys instantly and gives you a shareable URL like `https://random-name-123.netlify.app`.
4. Optional: click **Site settings → Change site name** for a cleaner URL, or connect a custom domain.

---

## How to Add YouTube Videos

Each of the five video cards in the **Media Representation** section contains a placeholder. Replacing a placeholder with a real video takes about 30 seconds.

### Step 1 — Get the YouTube video ID

Find the video on YouTube. The ID is the string after `?v=` in the URL:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                ^^^^^^^^^^^^^^^^^^^
                                This is the video ID → dQw4w9WgXcQ
```

### Step 2 — Open `index.html` and search for the placeholder

Search for `REPLACE_WITH_YOUTUBE_ID` (Ctrl+F / Cmd+F). You'll find five occurrences:

```html
<div class="video-ph" data-video-id="REPLACE_WITH_YOUTUBE_ID_1" ...>
<div class="video-ph" data-video-id="REPLACE_WITH_YOUTUBE_ID_2" ...>
...
```

### Step 3 — Replace the value

Change the `data-video-id` attribute to your real video ID:

```html
<!-- Before -->
<div class="video-ph" data-video-id="REPLACE_WITH_YOUTUBE_ID_1" ...>

<!-- After -->
<div class="video-ph" data-video-id="dQw4w9WgXcQ" ...>
```

Save the file. When a visitor clicks that card, the video loads automatically with autoplay. No other code changes needed.

> **Note:** If you want to update the card's title or analysis text, they're in `.video-title` and `.video-analysis` inside the same `.video-card` div, just below the ratio wrapper.

---

## Editing Content

All content is in `index.html`. Every section is clearly marked with an HTML comment:

```html
<!-- SECTION 1: HOME / HERO -->
<!-- SECTION 2: THE ARGUMENT -->
<!-- SECTION 3: THE EVIDENCE -->
  <!-- EVIDENCE 2A: POLLING DATA -->
  <!-- EVIDENCE 2B: POLICY -->
  <!-- EVIDENCE 2C: MEDIA REPRESENTATION -->
<!-- SECTION 4: SOURCES -->
<!-- SECTION 5: ABOUT -->
```

Search for the comment to jump to the section you want to edit.

---

## File Structure

```
research-site/
├── index.html   — all content and page structure
├── style.css    — all visual styling and layout
├── script.js    — navigation, video loading, scroll behavior
└── README.md    — this file
```

---

## Customization Reference

| What to change | Where |
|---|---|
| Site name in the nav | `.nav-brand` in `index.html` |
| Hero headline | `.hero-title` in `index.html` |
| Color palette | CSS variables at the top of `style.css` (`--navy`, `--accent`, etc.) |
| Fonts | Google Fonts `<link>` in the `<head>` of `index.html` |
| Video card titles / analysis | `.video-title` and `.video-analysis` inside each `.video-card` |
| Source citations / annotations | `.source-citation` and `.source-annotation` inside each `.source-card` |
| About section text | `#about` section in `index.html` |

---

*Built for REL226 · Emory University (Oxford College)*
