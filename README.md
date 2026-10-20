# KPS Enterprises — Integrated Facility Management Website

A responsive, production-oriented React + Vite frontend for KPS Enterprises. The site includes company introduction, service cards, package pricing, a 100-flat pricing example, benefits, contact information and a validated inquiry form.

## Stack

- React 18
- Vite 6
- Lucide React icons
- CSS custom properties and responsive CSS (no UI framework required)

## Prerequisites

- Node.js 20.19+ or 22.12+ recommended
- npm 10+
- Git (optional)

Check versions:

```bash
node --version
npm --version
```

## Install and run locally

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, copy the environment example with:

```powershell
Copy-Item .env.example .env
```

Vite prints the local URL, usually `http://localhost:5173`. To test from another device on the same network, use the network URL shown by Vite (or run `npm run dev -- --host 0.0.0.0`).

## Build and preview production output

```bash
npm run build
npm run preview
```

The production-ready static files are generated in `dist/`. The preview command is for local verification, not a permanent production server.

## Environment configuration

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_API_URL` | Optional HTTPS endpoint accepting `POST` JSON inquiries |
| `VITE_COMPANY_PHONE` | Public phone number displayed on the site |
| `VITE_COMPANY_EMAIL` | Public inquiry email displayed on the site |
| `VITE_SERVICE_LOCATION` | Public service area displayed on the site |

Only put public frontend configuration in `VITE_*` variables. **Never put API secrets, SMTP credentials, passwords or private tokens in a Vite environment variable**; they are included in browser code.

### Contact form integration

The form validates the user's name, Indian mobile number, optional email and optional unit count. With no `VITE_CONTACT_API_URL`, it operates in demo mode and clearly tells the visitor that no message was sent. A validated payload is logged in the browser console for development only.

Configure `VITE_CONTACT_API_URL` to point to your backend endpoint. The backend should:
- accept `POST` with JSON;
- validate the payload again server-side;
- apply rate limiting, spam protection and request-size limits;
- send/record the inquiry securely;
- return a successful 2xx response only after the inquiry is accepted;
- never expose email or database credentials to the browser.

Expected payload shape:

```json
{
  "name": "Example Name",
  "phone": "9876543210",
  "email": "person@example.com",
  "propertyType": "Residential society",
  "flats": "100",
  "plan": "Professional",
  "message": "Please call after 5 PM",
  "submittedAt": "2026-10-15T10:00:00.000Z",
  "source": "kps-website"
}
```

## Project structure

```text
kps-enterprises-website/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── PricingCard.jsx
│   │   ├── SectionHeading.jsx
│   │   └── ServiceCard.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── services/
│   │   └── contactService.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### Where to make changes

- **Services and package features/rates:** `src/data/siteData.js`
- **Company contact details:** `.env`
- **Site-wide colors and styles:** `src/styles/global.css` (`:root` variables at the top)
- **Contact API integration:** `src/services/contactService.js`
- **Page layout and navigation:** `src/App.jsx`

## Test and quality checks

```bash
npm run lint
npm run build
```

Manually test:
- desktop, tablet and mobile widths;
- navigation links and mobile menu;
- package buttons selecting the relevant package in the inquiry form;
- required field and invalid phone/email/unit-count validation;
- form behavior with and without a configured API endpoint;
- keyboard navigation and visible focus states.

## Deployment

This is a static frontend after `npm run build`. Deploy the contents of `dist/` to any static hosting provider or serve them with Nginx, IIS, Apache, Azure Static Web Apps, Netlify or Vercel.

### Netlify / Vercel / static host

1. Push the project to your Git provider.
2. Set build command to `npm run build`.
3. Set publish/output directory to `dist`.
4. Configure the public `VITE_*` environment variables in the hosting dashboard.
5. Trigger a fresh deployment after changing environment variables.

### Windows Server with IIS

1. Install IIS and the IIS Static Content feature.
2. Run `npm install` and `npm run build` on a build machine.
3. Copy the **contents of `dist/`** to a dedicated site directory, e.g. `C:\inetpub\wwwroot\kps`.
4. In IIS Manager, create a website pointing to that directory and bind the desired host name/port.
5. Allow inbound HTTP/HTTPS only as appropriate; configure TLS using your organization's approved certificate process.
6. If using React Router in the future, add an IIS URL Rewrite fallback to `index.html`. The current one-page anchor-based site does not require this.
7. Configure the contact backend separately and set `VITE_CONTACT_API_URL` at build time, then rebuild and redeploy. Vite variables are baked into the build.

For a public production deployment, serve HTTPS, configure domain/DNS, set suitable cache headers, keep the contact API protected, and establish monitoring/backups for any backend used.

## Before launch checklist

- Replace placeholder phone, email and service location with verified business details.
- Confirm all package rates, package inclusions and pricing assumptions with KPS.
- Replace the sample image URLs with licensed company photography or approved image assets.
- Connect and test a real backend/email service. Demo mode does not deliver enquiries.
- Add a privacy policy and any legally required business disclosures.
- Verify image licensing, content, accessibility and performance on target devices.

## Pricing assumptions

The package rates in `src/data/siteData.js` are illustrative placeholders for design/demo purposes, not verified company pricing. For 100 flats, the site calculates monthly estimates as per-flat rate × 100. Confirm final rates, GST treatment, staffing scope and exclusions before publishing.
