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
| `GOOGLE_GENERATIVE_AI_API_KEY` | the "ask about dor" chat (`app/api/chat/route.ts`) | free key from [Google AI Studio](https://aistudio.google.com/apikey) |
| `RESEND_API_KEY` | the contact form (`app/actions/sendEmail.ts`) | [Resend](https://resend.com) |

## Live Site

[dor-alagem.com](https://dor-alagem.com)
