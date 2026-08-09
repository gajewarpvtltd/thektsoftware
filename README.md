# Keystonetech Software Pvt Ltd — Website

A static marketing site for **Keystonetech Software Private Limited**, an IT services company offering
website building, data migration, data analytics, and data engineering.

No build step, no framework, no dependencies — plain HTML/CSS/JS, ready for GitHub Pages.

## Structure

```
.
├── index.html          # all page content
├── css/style.css        # design system + layout
├── js/main.js           # nav toggle, scroll reveal, form handler
└── README.md
```

## Running it locally

Just open `index.html` in a browser, or serve it so relative paths and fonts behave the same as in
production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying on GitHub Pages

1. Push this folder to a GitHub repo.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. The site will publish at `https://<your-username>.github.io/<repo-name>/`.

If you'd rather use a custom domain, add a `CNAME` file at the repo root containing your domain, and point
your DNS at GitHub Pages (an `A` record to GitHub's IPs, or a `CNAME` record if using a subdomain).

## Things to fill in before going live

- **Contact details** — the footer currently shows a placeholder city/state. Update `index.html` (footer
  section) with the real registered address.
- **Contact form** — the form in `index.html` (`#contact-form`) currently just shows an alert on submit.
  To make it actually send messages without a backend, the easiest options are:
  - [Formspree](https://formspree.io) — add `action="https://formspree.io/f/YOUR_FORM_ID"` and
    `method="POST"` to the `<form>` tag, and delete the `preventDefault()` handling in `js/main.js`.
  - [Getform](https://getform.io) or similar — same idea, different endpoint.
  - Your own backend — point `action` at your API and adjust `main.js` accordingly.
- **Favicon** — none is included yet. Drop a `favicon.ico` or `favicon.svg` in the root and link it in
  `<head>`.
- **Real domain email** — once the domain is registered, swap in an address like `hello@keystonetech.in`
  wherever you want a direct contact line.
- **Analytics** — if you want visit tracking, add your analytics snippet (e.g. Plausible, GA4) just before
  `</head>` in `index.html`.

## Design notes

The visual identity is built around the company name: the hero diagram is a schematic stone arch, where
each of the four services is a stone and "Keystonetech" is the keystone holding them together. Colors and
type:

- **Colors** — deep ink-blue background (`--ink`), warm stone-paper for light sections (`--paper`), and a
  single gold accent (`--gold`) reserved for the keystone and primary actions.
- **Type** — Space Grotesk for headings, IBM Plex Sans for body copy, IBM Plex Mono for labels and the
  numbered pipeline steps.

Edit the CSS custom properties at the top of `css/style.css` to adjust the palette or type scale globally.
