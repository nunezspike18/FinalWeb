PIKE-PIKE REACT PORTFOLIO

The portfolio is built with React and Vite. Its reusable page components are in
src/components/, with the application entry point in src/main.jsx. The existing
visual design is in css/style.css, and the supplied photos/screens remain in
assets/.

Run locally:
1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL shown by Vite.

Create a production build with `npm run build`. Vite writes the deployable
website to `dist/`. Pushing to the `main` branch builds the site and publishes
it to GitHub Pages using `.github/workflows/deploy-pages.yml`. Enable GitHub
Pages with the GitHub Actions source in the repository's Pages settings if it
is not already enabled. Run `npm run preview` to test the production build
locally.

The contact form currently displays a confirmation message and is not connected
to an email service. The Facebook name is displayed as provided; replace its #
link in src/components/ContactSection.jsx with the actual Facebook profile URL
if desired.
