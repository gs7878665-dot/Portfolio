# Gaurav Shukla — Creative Portfolio

A premium, modern portfolio designed with high-end editorial aesthetics inspired by award-winning visual layouts. Features a GPU-accelerated 3D liquid silk blueprint background, physical spring-magnetic interactions, 3D perspective card warping, and kinetic parallax text marquees.

Live Demo: **[gauravshukla.vercel.app](https://gauravshukla.vercel.app)** *(Deploying on Vercel)*

---

## ✨ Features

*   **GPU-Accelerated 3D Liquid Terrain**: An undulating 3D silk mesh backdrop mapped as a digital wireframe blueprint, driven by custom GLSL vertex and fragment shaders that deform organically in real-time on vertical scroll.
*   **Parallax Scroll-Linked Kinetic Typography**: Giant, hollow outline text marquee lines running in alternating horizontal directions across layout boundaries, reacting smoothly to page scroll speed and vector directions.
*   **Tactile 3D Card Tilting**: Skill profiles and project listings warp in 3D perspective relative to your mouse angle, layered with a glossy moving spotlight sheen tracker.
*   **Physical Mouse Magnetic Attraction**: Navigation menu links, custom contact elements, and primary call-to-actions glide dynamically and attract toward the user's cursor range, snapping back instantly with spring physics on hover release.
*   **High-End Reveal Transition**: Smooth, viewport-linked fading and un-blurring scroll reveal transitions, bringing content from foggy blurs into crystal-clear focus.
*   **Ultra-Clean Dark Mode Only Layout**: Inspired by editorial agency designs, locked into a high-contrast absolute black backdrop with sleek neon-blue highlights and high-density typography.

---

## 🛠️ Tech Stack

### Frontend & Rendering
*   **Core**: React (Vite / Single Page Application)
*   **Styling**: Tailwind CSS & Modern Custom CSS Variables
*   **3D Graphics**: Three.js & React Three Fiber (R3F)
*   **Physics & Animation**: Framer Motion & custom spring-coefficient scripts

### Backend (Local Testing)
*   **Environment**: Node.js & Express.js
*   **API Endpoints**: Local Contact mail submissions (convertible to Formspree/Web3Forms for serverless live hostings)

---

## 🚀 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/gs7878665-dot/portfolio.git
cd portfolio
```

### 2. Run the Frontend (Vite)
```bash
cd client
npm install
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 3. Run the Backend Server (Optional)
```bash
cd ../server
npm install
node server.js
```

---

## 🌐 Free Production Hosting (Vercel)

This project is fully optimized to run on **Vercel's Hobby Tier** with 100% free hosting and continuous integration from your GitHub repository.

1. Create a free account at [Vercel](https://vercel.com).
2. Connect your GitHub account and import this repository.
3. Configure settings:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**!
