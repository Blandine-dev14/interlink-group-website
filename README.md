# INTERLINK GROUP React Website

A responsive corporate website built with React and Vite.

## Requirements
- Node.js (LTS recommended)
- npm

## Run on Windows

1. Extract `interlink-group-react.zip`.
2. Open the extracted `interlink-group-react` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local address printed in the terminal, normally:

```text
http://localhost:5173
```

## Create a production build

```bash
npm run build
```

Vite creates the production website in the `dist` folder.

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
interlink-group-react/
├── public/
│   └── images/
│       ├── interlink-profile-cover.jpg
│       ├── interlink-logo.jpg
│       ├── interlink-brand.jpg
│       ├── sabes-numerique.jpg
│       ├── nextgen.jpg
│       ├── info-booster.jpg
│       ├── ca-bouge-ou.jpg
│       └── interlink-travel.jpg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Contact functionality

- Phone links use the supplied official phone numbers.
- WhatsApp buttons open the supplied numbers.
- The contact form opens the visitor's email application with a pre-filled message addressed to the official company email.

The contact form does not store submissions on a server. To collect enquiries without relying on the visitor's email application, connect a backend or form service.

## Branding note

The supplied company profile cover is a flattened image. The included logo files are crops from that image and may not be as sharp as the original individual logo files. Replace them with high-resolution official logo files when available.

## Free hosting

This project is a static React/Vite website and can be deployed to a static hosting provider. Run `npm run build` and deploy the generated `dist` folder. Cloudflare Pages and Netlify are suitable options; check their current free-plan terms and limits before publishing for a company.
