# Joe O'Regan Games

![GitHub repo size](https://img.shields.io/github/repo-size/JoeORegan/joeoregan.github.io?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/JoeORegan/joeoregan.github.io?style=flat-square)
![Stars](https://img.shields.io/github/stars/JoeORegan/joeoregan.github.io?style=social)

![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222b35?style=flat-square)

Portfolio site for **Joe O'Regan Games** showcasing projects by platform/framework (Unity, JavaScript, Angular, Cocos2D-X, SDL2, RayLib).

## Live Site

- https://joeoregan.github.io/

## Tech Stack

- HTML5
- CSS3
- Vue 3 (CDN build, no bundler)
- Font Awesome

## Project Structure

```
.
├─ index.html
├─ about.html
├─ unity.html
├─ javascript.html
├─ angular.html
├─ cocos2dx.html
├─ sdl2.html
├─ raylib.html
├─ styles.css
├─ app.js
└─ components/
   └─ SiteFooter.js
```

## Development

This is a static site, so you can run it locally with any simple web server.

### Option 1: VS Code Live Server
1. Open the project in VS Code
2. Right-click `index.html`
3. Click **Open with Live Server**

### Option 2: Python
```bash
# from project root
python -m http.server 5500
```
Then open: `http://localhost:5500`

## Deployment (GitHub Pages)

1. Push changes to `main`
2. In **Settings → Pages**
3. Ensure source is set to **Deploy from a branch** (`main` / root)
4. Save and wait for the Pages build to complete

## Roadmap

- Add project cards for each platform page
- Add screenshots/videos for featured projects
- Add dedicated project detail pages
- Improve accessibility (labels, contrast, keyboard focus)
- Add automated link checking
