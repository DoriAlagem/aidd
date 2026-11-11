# Dor Alagem — Personal Portfolio

My personal portfolio site, built from scratch as my first web development project.

## Tech Stack

- **Next.js 16** — React framework with App Router
- **Tailwind CSS v4** — utility-first styling
- **TypeScript** — type safety
- **Vercel** — deployment

## Pages

- **Home** — intro and hero
- **About** — background, skills, and what I'm looking for
- **Projects** — selected work with GitHub links
- **Contact** — social links and contact form

## Environment Variables

Set these in Vercel (Project → Settings → Environment Variables, for Production and Preview):

| Variable | Used by | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | the contact form (`app/actions/sendEmail.ts`) | [Resend](https://resend.com) |

The "ask about dor" chat needs no key: it calls the Vercel AI Gateway, which authenticates with the deployment's OIDC token. It uses a zero-priced model (`nvidia/nemotron-3.5-lightning-free`) because the gateway's free tier rejects paid models.

## Live Site

[dor-alagem.com](https://dor-alagem.com)
