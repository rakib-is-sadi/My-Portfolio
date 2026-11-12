# Rakibul Sadi | Portfolio

A modern, responsive personal portfolio website with a dark glassmorphism design, built with React and Tailwind CSS.

<!-- Add a screenshot after deploying: ![Portfolio preview](./screenshots/preview.png) -->

## Features

- **Glassmorphism UI:** frosted-glass cards, soft background glows and rounded corners on a dark theme
- **Smart navbar:** floating glass navbar that hides on scroll down, reappears on scroll up, and highlights the active section
- **Fully responsive:** designed for mobile, tablet and desktop, with a mobile menu
- **Data-driven sections:** skills, quick facts, navigation and social links are plain arrays that are easy to edit
- **Working contact form:** messages are delivered straight to my inbox through EmailJS, no backend required
- **Smooth navigation:** smooth scrolling between sections with offset handling for the fixed navbar

## Tech Stack

- [React](https://react.dev/) (with [Vite](https://vite.dev/))
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`)
- [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

## Project Structure

```
src/
├── assets/
│   ├── profile.png        # Hero portrait
│   └── about.png          # About section portrait
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Skills.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css              # Tailwind theme (colors, font) and the glass utility
└── main.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rakib-is-sadi/my-portfolio.git

# Move into the project folder
cd my-portfolio

# Install dependencies
npm install
```

### Environment Variables

The contact form uses EmailJS. Create a file named `.env.local` in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should use these variables: `{{name}}`, `{{email}}` and `{{message}}`.

> `.env.local` is ignored by Git, so your keys are not committed. When deploying, add the same three variables in your hosting provider's environment settings.

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

| What to change   | Where                                                     |
| ---------------- | --------------------------------------------------------- |
| Colors and font  | `@theme` block in `src/index.css`                         |
| Navigation links | `NAV_LINKS` in `Navbar.jsx` (add a matching section `id`) |
| Skills           | `SKILLS` array in `Skills.jsx`                            |
| About facts      | `FACTS` array in `About.jsx`                              |
| Social links     | `LINKS` in `Contact.jsx` and `SOCIALS` in `Footer.jsx`    |
| Images           | `src/assets/`                                             |

## Contact

- GitHub: [@rakib-is-sadi](https://github.com/rakib-is-sadi)
- Use the contact form on the website to send me a message.
