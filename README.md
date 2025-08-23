

# Welcome to your Portfolio Project

## Project info

**Live URL**: [https://nandinikhandelwal120603.github.io/](https://nandinikhandelwal120603.github.io/)

This is a personal portfolio website built to showcase skills, experience, projects, and contact information.

---

## How can I edit this code?

You can edit the project in multiple ways depending on your workflow:

### **1. Work Locally with your IDE**

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### **2. Edit Directly in GitHub**

* Navigate to the file you want to edit.
* Click the **Edit** button (pencil icon) at the top right.
* Commit changes directly to the repository.

### **3. Use GitHub Codespaces**

* Go to the repository on GitHub.
* Click the green **Code** button → **Codespaces** tab.
* Launch a new Codespace to edit and run the project in the cloud.

---

## Tech Stack

This project is built with:

* **Vite**
* **TypeScript**
* **React**
* **shadcn-ui**
* **Tailwind CSS**

---

## Deployment

The portfolio is deployed with **GitHub Pages**.

To publish changes:

```sh
npm run build
npm run deploy
```

---

## Custom Domain

If you want to connect a custom domain (e.g., `yourname.com`), go to your **GitHub repository settings → Pages → Custom domain** and configure it with your DNS provider.

---

## 🔧 How to Update Sections

This portfolio is modular. Each section has its own file under `src/components/`.

### 1. **Skills**

* **File:** `src/components/Skills.tsx`
* **Where:** `const skillsData = [...]`
* **How:** Add, remove, or edit skills (icon, name, description).
* **Icons:** Imported from [Lucide Icons](https://lucide.dev/icons). Example:

  ```tsx
  { name: 'Python', icon: Python, description: 'Automation, ML, Computer Vision' }
  ```

### 2. **Experience**

* **File:** `src/components/Experience.tsx`
* **Where:** `const experiences = [...]`
* **How:** Add each role with `role`, `company`, `period`, `location`, and `bullets`.

### 3. **Projects**

* **File:** `src/components/Projects.tsx`
* **Where:** `const projectsData = [...]`
* **How:** Add new projects with `title`, `description`, `image`, `technologies`, `githubUrl`, `liveUrl`, and `category`.
* **Images:** Place in `public/images/projects/`.

### 4. **Gallery**

* **File:** `src/components/Gallery.tsx`
* **Where:** `const galleryImages = [...]`
* **How:** Add entries with `id`, `src`, `alt`, and `category`.
* **Images:** Place in `public/images/gallery/`.

### 5. **Hero Section**

* **File:** `src/components/Hero.tsx`
* **How:** Edit name, tagline, and background (gradient, image, or animation).

### 6. **Colors**

* **File:** `src/index.css` (CSS variables)
* **How:** Change `--primary`, `--secondary`, `--accent` tokens.
* **Note:** Tailwind config references these variables → consistent theme updates.

---

## 📝 Best Practices

* Use **PascalCase** for components (`Hero.tsx`, `Skills.tsx`).
* Use **kebab-case** for image files (`voice-controlled-robot.jpg`).
* Always include **alt text** for images in projects/gallery.
* Keep descriptions **short (1–2 lines)**.
* Test changes with `npm run dev` before deploying.
* Optimize images (use `.webp` when possible).


