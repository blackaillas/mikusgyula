# Mikusgyula

Virtuális galéria és emlékoldal Mikus Gyula festőművész tiszteletére.

## Live Demo

🌐 **[https://blackaillas.github.io/mikusgyula/](https://blackaillas.github.io/mikusgyula/)**

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Building for GitHub Pages

To build for GitHub Pages deployment:

```bash
npm run build:prod
```

## Deployment to GitHub Pages

### One-Time Setup

1. Create a new repository on GitHub named `mikusgyula`
2. Push your code to GitHub:

```bash
git remote add origin https://github.com/blackaillas/mikusgyula.git
git branch -M master
git push -u origin master
```

3. Enable GitHub Pages in repository settings:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)` → Save

### Deploying Updates

To build and deploy to GitHub Pages:

```bash
npm run deploy
```

This will:
- Build the application in production mode
- Set the correct base href for GitHub Pages
- Deploy to the `gh-pages` branch
- Your site will be available at: `https://blackaillas.github.io/mikusgyula/`

**Note:** First deployment may take a few minutes to go live.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Features

- 🎨 **Masonry Gallery Layout** - Responsive image gallery with dynamic loading
- 📱 **Mobile-First Design** - Fully responsive across all devices
- 🔍 **Category Filtering** - Filter artworks by type (landscape, portrait, still life, etc.)
- ⚡ **Performance Optimized** - Lazy loading and efficient rendering
- 🎯 **Hash Navigation** - Deep linking to specific sections

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
