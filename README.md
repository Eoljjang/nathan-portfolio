# Portfolio Website

A clean, modern portfolio website built with React and Vite. Perfect for showcasing your projects and skills as a software developer.

## Features

- 🎨 Clean, modern design
- 📱 Fully responsive
- ⚡ Fast and lightweight
- 🚀 Easy to customize
- 📦 Simple project management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Adding Projects

Adding new projects is super easy! Just edit `src/data/projects.js` and add a new project object to the array:

```javascript
{
  id: 4, // Unique ID
  title: "My New Project",
  description: "A brief description of your project",
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://yourproject.com", // Optional
  imageUrl: "https://your-image-url.com/image.jpg" // Optional
}
```

### Project Object Fields

- `id` (required): Unique identifier for the project
- `title` (required): Project name
- `description` (required): Brief description of the project
- `technologies` (required): Array of technologies used
- `githubUrl` (optional): Link to GitHub repository
- `liveUrl` (optional): Link to live demo
- `imageUrl` (optional): URL to project image

## Customization

### Personal Information

Update the following files with your information:

1. **About Section**: `src/components/About.jsx`
   - Update name, subtitle, description, and skills

2. **Contact Section**: `src/components/Contact.jsx`
   - Update email, phone, LinkedIn, and GitHub links

3. **Header**: `src/components/Header.jsx`
   - Update the brand name

### Colors

Edit the CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## Project Structure

```
portfolio_site/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/           # Data files
│   │   └── projects.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
