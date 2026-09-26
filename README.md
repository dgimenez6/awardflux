# AwardFlux

AwardFlux is a post-award need-intelligence product. The first commercial validation edition turns fresh federal awards into screened Accounting & Compliance sales signals for firms serving SBIR/STTR and GovCon customers.

## Validation scope

The current site intentionally includes only the commercial surface needed to validate willingness to pay:

- one-page positioning and pricing
- three public sample signals
- methodology and source transparency
- minimal Privacy and Terms pages
- Stripe-ready checkout route
- responsive layout

It intentionally does **not** include authentication, Supabase, CRM, dashboard, API, automated outreach, or a large ingestion engine.

## Run locally

```bash
npm install
npm run dev -- -p 3015
```

Open http://localhost:3015.

## Stripe

All paid CTAs point to `/checkout`.

Set the server environment variable below to the Stripe subscription Payment Link when it is created:

```bash
STRIPE_PAYMENT_LINK=https://buy.stripe.com/...
```

If the variable is not configured, `/checkout` safely returns visitors to the pricing section.

## Founding offer

**AwardFlux Accounting & Compliance — Founding Access**

- $149/month
- cancel anytime
- fresh verified signals refreshed weekly
- first-time awardees and phase transitions prioritized
- service-fit and why-now analysis
- official evidence
- public business contact where officially available
- CSV-ready fields
- non-exclusive intelligence
