

# Kaleido Folio Hub - Portfolio Project

Welcome to the **Kaleido Folio Hub**, a professional portfolio project currently serving as the official website for **Nandini Khandelwal**. 

**Live URL:** [nandinikhandelwal120603.github.io](https://nandinikhandelwal120603.github.io/)

---

## 🏗️ Project Architecture (In-Depth)

This portfolio is built as a **Single-Page Application (SPA)** using a modular component-driven architecture. Each section of the website resides in its own React component file within `src/components/`, allowing for easy isolated updates and rapid maintenance.

### Core Structure:
- **`src/App.tsx`**: The main entry point that configures the React Router and global providers (Toasts, Tooltips, Query Client).
- **`src/pages/Index.tsx`**: The layout orchestrator that stacks all sections (Hero, Skills, Projects, etc.) vertically on the main page.
- **`src/components/ui/`**: Low-level accessible primitives (buttons, dialogs, etc.) based on **Radix UI** and styled with **Shadcn UI**.

---

## 📁 Page & Component Deep-Dive

### 1. **Navigation (`src/components/Navigation.tsx`)**
- **Function:** Handles the sticky header and mobile navigation menu.
- **Features:** 
  - Glassmorphic transparency that appears on scroll.
  - Responsive hamburger menu for mobile devices.
  - Smooth anchor-link scrolling to section IDs.

### 2. **Hero Section (`src/components/Hero.tsx`)**
- **Function:** The "first impression" above-the-fold content.
- **Features:**
  - **Auto-Typing Text:** Dynamically types "Robotics & AI Engineer" on page load.
  - **Animated Background:** Multi-layer CSS gradient flow for a premium feel.
  - **Social Integration:** Quick links to GitHub, LinkedIn, and Email.

### 3. **Skills & Expertise (`src/components/Skills.tsx`)**
- **Function:** Categorized technical toolkit visualization.
- **Features:** 
  - **Intersection Observer:** Components slide up and fade in only when they enter the viewport.
  - **Categorization:** Skills are grouped by domain (Programming, AI/CV, Robotics, etc.).
  - **Dynamic Highlighting:** Interactive hover states for each skill card.

### 4. **Experience Timeline (`src/components/Experience.tsx`)**
- **Function:** Vertical timeline of career milestones (ISRO R&D Intern).
- **Features:**
  - **Dot Timeline Layout:** Responsive timeline line that disappears on smaller screens for readability.
  - **Rich Text Support:** Highlighting key keywords within bullet points.
  - **Document Links:** Direct links to certificates (e.g., ISRO completion letter).

### 5. **Projects Showcase (`src/components/Projects.tsx`)**
- **Function:** Showcase of technical projects with descriptions, tags, and code links.
- **Features:**
  - **Featured Project Logic:** Capability to highlight specific high-impact projects.
  - **Tech Stack Mapping:** Automatically renders technical tags based on an array.
  - **Animated Cards:** Staggered entry animations as the user scrolls.

### 6. **Gallery Archive (`src/components/Gallery.tsx`)**
- **Function:** Visual portfolio of awards, life at college/ISRO, and CAD models.
- **Features:**
  - **Category Filtering:** Filterable grid (Awards, Robotics, CAD Models).
  - **Lightbox Modal:** Custom modal to view images in full-screen with metadata detail.

### 7. **Contact & Connectivity (`src/components/Contact.tsx`)**
- **Function:** Unified section for outreach and social follow links.
- **Features:** 
  - **Direct Email Links:** Pre-configured mailto links.
  - **Responsive Layout:** Grid-based organization for mobile vs. desktop view.

---

## 🛠️ How to Make Changes

### Changing Text or Data
All data is centralized at the **top of each component file**. 
1. Open the file (e.g., `src/components/Projects.tsx`).
2. Locate the `projectsData` constant.
3. Edit the strings (title, description, URL) directly in the array.

### Adding Images
1. Place your new image in `public/images/gallery/` or a similar folder.
2. Update the `galleryImages` array in `src/components/Gallery.tsx` with the new file path.

### Theme & Colors
1. Open `src/index.css`.
2. Update the HSL values for `--primary`, `--background`, or other tokens under the `:root` selector.
3. The entire site will update automatically due to Tailwind's variable references.

---

## 🚀 Development & Deployment

### Local Development
```sh
npm install      # Install dependencies
npm run dev      # Start local server at http://localhost:5173
```

### Build & Deploy
This project uses **gh-pages** for deployment.
```sh
npm run build    # Create production bundle in /dist
npm run deploy   # Push build to gh-pages branch
```

---

## 📝 Best Practices Used
- **TypeScript** for type safety and code clarity.
- **Semantic HTML** (sections, headers, main) for better SEO/Accessibility.
- **Modular Components** to prevent "Spaghetti Code."
- **Performance Optimization** via image lazy-loading and Vite-based asset bundling.



