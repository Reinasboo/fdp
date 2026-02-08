# Contributing to Flying Drone Pig ($FDP)

First off, thanks for considering contributing to the FDP project! It's people like you that make FDP such a great site.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details (OS, browser, etc.)**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript/React styleguides
* Include appropriate test cases if applicable
* Document new code
* End all files with a newline

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/fdp-site.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start development: `npm run dev`
6. Make your changes
7. Test thoroughly: `npm run build`
8. Commit with clear messages: `git commit -m "Add feature description"`
9. Push to your fork: `git push origin feature/your-feature-name`
10. Create a Pull Request

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:
```
Add flying pig animation to hero section

- Create new animation keyframes
- Add animation trigger on scroll
- Update component styles
```

### TypeScript/React Code Style

* Use functional components with React hooks
* Use TypeScript for type safety
* Use meaningful variable and function names
* Add comments for complex logic
* Follow existing code patterns in the project

Example:
```tsx
interface AnimationProps {
  duration: number;
  delay?: number;
}

export function FloatingPig({ duration, delay }: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation logic here
  return <div>Flying Pig</div>;
}
```

### CSS/Tailwind Style Guide

* Use Tailwind utility classes primarily
* Create custom classes in global CSS only when necessary
* Use CSS variables for consistent theming
* Mobile-first approach with responsive modifiers
* Meaningful class names when creating custom styles

Example:
```css
.glass {
  background: rgba(20, 20, 32, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
}
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
└── components/
    ├── Navbar.tsx       # Navigation
    ├── Hero.tsx         # Hero section
    ├── News.tsx         # News section
    ├── Quotes.tsx       # Quotes carousel
    ├── Gallery.tsx      # Image gallery
    ├── TokenInfo.tsx    # Token details
    ├── Community.tsx    # Community section
    └── Footer.tsx       # Footer
```

## Testing

Before submitting a pull request:

1. Run the linter: `npm run lint`
2. Build the project: `npm run build`
3. Test in development: `npm run dev`
4. Check responsive design on mobile
5. Test on multiple browsers if possible

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested

## Questions?

Feel free to open an issue with the `question` label or reach out to the maintainers.

---

**Built with ❤️ for the herd. When pigs fly, we grow together.**
