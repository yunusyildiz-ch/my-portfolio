# Yunus YILDIZ - Full-Stack Developer Portfolio

This is my personal portfolio website, showcasing my skills, projects, and background. Built with **React**, **Bootstrap**, and various supporting libraries, it provides a concise overview of who I am and what I do.

## Table of Contents

- [Yunus YILDIZ - Full-Stack Developer Portfolio](#yunus-yildiz---full-stack-developer-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Pages \& Components](#pages--components)
  - [Technologies Used](#technologies-used)
  - [Installation \& Setup](#installation--setup)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Contact](#contact)
  - [License](#license)
    - [Acknowledgments](#acknowledgments)

---

## Overview

- **Purpose**: Demonstrate my experience in front-end and back-end development, and provide a central place for potential employers or collaborators to learn more about my work.
- **Live Demo**: [YunusYildiz-Portfolio (Netlify)](https://yunusyildiz-portfolio.netlify.app/)

---

## Features

1. **Responsive Design**
   - Built using CSS and Bootstrap classes for a responsive layout.
2. **Sidebar Navigation**
   - Quick navigation between pages (Home, About, Projects, Contact) and a direct link to download my CV.
3. **Project Showcase**
   - Cards displaying key details about my projects, including images, features, and GitHub/live links.
4. **Social & Contact Links**
   - Integrated icons for LinkedIn, GitHub, and email, making it easy for visitors to connect.
5. **Downloadable CV**
   - A direct link for users to download my CV (`CV_YunusYildiz.pdf`).

---

## Pages & Components

1. **`Home.jsx`**

   - Introduces who I am and what I do.
   - Displays a profile image and my social links.
   - Emphasizes my passion for continuous learning and problem-solving.

2. **`About.jsx`**

   - Contains a short bio, details on my education, and certifications from HiCoders IT Academy.
   - Lists my technical skills with corresponding icons (HTML, CSS, JavaScript, React, Node.js, Arduino, etc.).
   - Mentions my hobbies and interests (chess, running, etc.).

3. **`Projects.jsx`**

   - Dynamically renders project cards via `ProjectCard` component.
   - Showcases different projects such as:
     - **School Management System** (front-end)
     - **School Management System REST API** (Node.js + MySQL)
     - **Heating System Optimization** with Arduino integration
   - Each project displays features, live site links, and GitHub repositories.

4. **`Contact.jsx`**

   - Provides ways to reach me (email, LinkedIn, GitHub, personal website).
   - Incorporates icons for visual clarity.

5. **`Sidebar.jsx`** (Component)

   - Navigation menu using icons (`react-icons`).
   - Handles CV download functionality via a simple `handleCVDownload` method.

6. **`ProjectCard.jsx`** (Component)

   - Generic component to display a single project card.
   - Shows project image, title, description, features, and relevant buttons (live demo & GitHub link).

7. **`App.jsx`**

   - Main layout that wraps content in a sidebar + content area.
   - Implements client-side routing via `react-router-dom`.

8. **`main.jsx`**
   - Entrypoint rendering the `App` component inside a `BrowserRouter` for routing.
   - Imports global styles (`index.css`) and Bootstrap.

---

## Technologies Used

- **Front-End**
  - [React](https://reactjs.org/) (Components, Hooks, React Router)
  - [Bootstrap](https://getbootstrap.com/) + custom CSS
  - [React Icons](https://react-icons.github.io/react-icons/) for icon sets
- **Back-End (Referenced in Projects)**
  - [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MySQL](https://www.mysql.com/)
  - Arduino integration for IoT-related functionality
- **Hosting**
  - [Netlify](https://www.netlify.com/) for the front-end
- **Version Control**
  - [Git & GitHub](https://github.com/yunusyildiz-ch)

---

## Installation & Setup

1. **Clone the Repository**

```bash
   git clone https://github.com/yunusyildiz-ch/your-portfolio.git
   cd your-portfolio
```

2. **Install Dependencies**

```bash
   npm install
```

3. **Run the Development Server**
   
```bash
   npm run dev
   ```

The app will typically run at http://localhost:5173.

1. **Build for Production**
   
```bash
   npm run build 
   ```
   
This will create an optimized build in the dist directory.

## Usage

- **Navigation**: Use the sidebar icons to move between Home, About, Projects, and Contact pages.
- **CV Download**: Click the CV icon in the sidebar to automatically download `CV_YunusYildiz.pdf`.
- **Project Links**: Each project card may have a live demo (`TbWorldWww` icon) and a GitHub repository (`FaGithub` icon).

---

## Deployment

- **Netlify**

  1. Push your code to GitHub (main or any branch).
  2. Create a new site on Netlify and connect to your GitHub repo.
  3. Set the build command to `npm run build` and the publish directory to `dist`.
  4. Deploy and access your published site via the generated Netlify URL.

- **Alternatively**, you can deploy to any static hosting service (e.g., Vercel, GitHub Pages) by serving the built `dist` folder.

---

## Contact

**Email**: [yunusyildiz@swissmail.com](mailto:yunusyildiz@swissmail.com)  
**LinkedIn**: [linkedin.com/in/yunusyildiz-ch/](https://www.linkedin.com/in/yunusyildiz-ch/)  
**GitHub**: [github.com/yunusyildiz-ch](https://github.com/yunusyildiz-ch)  
**Portfolio Live Link**: [yunusyildiz-portfolio.netlify.app](https://yunusyildiz-portfolio.netlify.app/)

---

## License

This project is open source under the [MIT License](LICENSE). Feel free to fork, modify, and share it. If you do, giving a reference or credit is always appreciated.

---

### Acknowledgments

- **HiCoders IT Academy** for the training and certificates mentioned in the About section.
- **React Icons**, **Bootstrap**, and other open-source libraries that make development more efficient.
- Thanks to everyone who has supported and inspired my journey in web development.

---

**Thank You for Checking Out My Portfolio!**

If you have any questions, suggestions, or would like to collaborate, don’t hesitate to reach out. Happy coding!
