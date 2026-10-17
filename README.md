# MyPortfolio

Personal portfolio of **Viyaas K G E**, Member Technical Staff at Zoho (ZohoLogs).

Live site: https://viyaas.github.io/MyPortfolio/

## Sections

Home, Experience, Education, About and Skills, Certifications, Projects, Contact.

## Tech stack

- HTML5, Bootstrap 5, Sass
- Font Awesome 5 (local)
- Vanilla JavaScript (no build step for scripts)
- Contact form sent through [FormSubmit](https://formsubmit.co)

## Project structure

```
index.html            Page markup
custom-timeline.css   Timeline, skills and mobile overrides
custom-timeline.js    Scroll effects, mobile menu, contact form
assets/               Compiled CSS, Bootstrap JS, web fonts
scss/                 Sass sources for assets/css/style.css
images/               Logos, certificates and project images
```

## Run locally

```bash
git clone https://github.com/viyaas/MyPortfolio.git
cd MyPortfolio
python3 -m http.server 8000
```

Open http://localhost:8000.

## Edit styles

Sass sources are in `scss/`. Install dependencies once, then compile:

```bash
npm install
npm run compile:sass   # watch mode
npm run build:sass     # one-off compressed build
```

Small overrides live in `custom-timeline.css`, which is loaded after `style.css`.

## Contact form

Messages are posted to `https://formsubmit.co/ajax/<email>` from `custom-timeline.js`. After deploying, submit the form once and click the activation link FormSubmit emails to the recipient.

## Deployment

The site is static and deployed with GitHub Pages from the `main` branch root. Push to the branch to publish.

## License

[MIT](LICENSE)
