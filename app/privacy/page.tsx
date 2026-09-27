export default function PrivacyPage() {
  return (
    <main className="subpage">
      <header className="nav shell">
        <a className="brand" href="/">
          <span className="brandMark">A</span><span>AwardFlux</span>
        </a>
      </header>

      <article className="legal shell">
        <div className="kicker">Privacy</div>
        <h1>Privacy Policy</h1>
        <p>Last updated: September 26, 2026.</p>

        <h2>Who this policy covers</h2>
        <p>
          This policy describes how the operator of AwardFlux, reachable at
          {" "}<a href="mailto:hello@awardflux.com">hello@awardflux.com</a>,
          handles information when you visit awardflux.com, contact us, or buy
          the AwardFlux subscription.
        </p>

        <h2>What we collect</h2>
        <p>
          We may collect information you provide directly, such as your name,
          work email, company name, company website, and service category. When
          you purchase a subscription, payment information is processed by
          Stripe. We may receive billing and subscription details from Stripe,
          such as your contact information, billing address, plan, payment
          status, and transaction identifiers; AwardFlux does not store full
          payment-card details. Hosting systems may also record basic request
          information, such as IP address, browser details, and access times,
          for site operation and security.
        </p>

        <h2>How we use it</h2>
        <p>
          We use customer information to provide and support AwardFlux, deliver
          subscribed feeds, communicate about the service, prevent abuse, and
          improve signal quality. We may also use billing records to manage the
          subscription and comply with applicable recordkeeping obligations.
        </p>

        <h2>Public-source data</h2>
        <p>
          AwardFlux analyzes company and award information published in public
          government records and official program sources. Our initial product
          is focused on business and award intelligence, not the sale of private
          consumer information.
        </p>

        <h2>Service providers</h2>
        <p>
          Stripe hosts checkout and processes subscription payments. Our website
          also relies on hosting and infrastructure providers for delivery and
          security. We share information with these providers as needed to
          operate the service, and may disclose it where required by law or to
          protect the service and its users. Stripe handles information on its
          hosted pages under its own privacy notice.
        </p>

        <h2>Cookies and external sites</h2>
        <p>
          This site does not currently run advertising pixels or third-party
          analytics scripts. When you follow the checkout link, Stripe may use
          cookies or similar technologies on its own pages. Links to official
          sources and other third-party sites are governed by those sites&apos;
          privacy practices.
        </p>

        <h2>Storage and international processing</h2>
        <p>
          We take reasonable steps to protect the information we handle.
          Providers may store or process information in countries other than
          your own; privacy protections can differ by location. We keep billing
          and customer records for as long as reasonably needed to operate the
          subscription, address disputes, and meet legal obligations, then
          delete or de-identify them when no longer needed.
        </p>

        <h2>Retention and requests</h2>
        <p>
          You may ask to access, correct, or delete information about you,
          subject to applicable legal exceptions. For privacy questions or
          requests, contact
          {" "}<a href="mailto:hello@awardflux.com">hello@awardflux.com</a>.
          We may need to verify your identity before acting on a request.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy as AwardFlux evolves. Material changes will
          be reflected on this page with a revised date.
        </p>
      </article>
    </main>
  );
}
