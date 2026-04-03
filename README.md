# Waha Cafe Lounge — الواحة

> London's finest breakfast & brunch destination.

---

## 📁 File Structure

```
waha-cafe-lounge/
├── index.html              ← Main page (edit content here)
├── css/
│   ├── style.css           ← Variables, nav, footer, buttons
│   ├── hero.css            ← Hero section styles
│   └── sections.css        ← About, menu, gallery, etc.
├── js/
│   └── main.js             ← All interactions
├── assets/
│   ├── logo.jpg            ← Waha logo
│   └── hero-bg.png         ← Hero background image
└── README.md
```

---

## 🚀 Deploy on GitHub Pages (Free)

### 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it `waha-cafe-lounge` · Set to **Public** · Click **Create repository**

### 2 — Upload all files keeping folder structure

**Via GitHub web:**
1. In your repo click **Add file → Upload files**
2. Unzip the project folder, then drag ALL contents into GitHub:
   `index.html`, the `css/` folder, `js/` folder, `assets/` folder
3. Click **Commit changes**

> ⚠️ Upload the **contents** of the folder — not the folder itself

**Via Git (terminal):**
```bash
git clone https://github.com/YOUR_USERNAME/waha-cafe-lounge.git
cd waha-cafe-lounge
# paste all project files here, then:
git add .
git commit -m "Initial commit"
git push origin main
```

### 3 — Enable GitHub Pages

1. In your repo → **Settings** → **Pages**
2. Source → **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)` → **Save**

Your site goes live at:
```
https://YOUR_USERNAME.github.io/waha-cafe-lounge/
```

---

## ✏️ Editing Content

Open `index.html` and search for these to update:

| Find | Replace with |
|---|---|
| `123 Example Street` | Your address |
| `London, E1 6RF` | Your postcode |
| `+44 (0)20 1234 5678` | Your phone |
| `hello@wahacafelounge.co.uk` | Your email |
| `@wahacafelounge` | Your Instagram |

## 🎨 Changing Colours

In `css/style.css`, find the `:root` block:
```css
:root {
  --gold:       #c9943e;
  --terracotta: #b85c30;
  --charcoal:   #1a1208;
}
```

## 🖼️ Swapping Images

Replace `assets/hero-bg.png` or `assets/logo.jpg` with your own files.

## 🌐 Custom Domain

Settings → Pages → enter domain → add CNAME at your registrar pointing to `YOUR_USERNAME.github.io`

---

*© 2025 Waha Cafe Lounge الواحة*
