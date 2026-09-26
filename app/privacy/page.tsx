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

        <h2>What we collect</h2>
        <p>
          We may collect information you provide directly, such as your name,
          work email, company name, company website, and service category. When
          you purchase a subscription, payment information is processed by
          Stripe; AwardFlux does not store full payment-card details.
        </p>

        <h2>How we use it</h2>
        <p>
          We use customer information to provide and support AwardFlux, deliver
          subscribed feeds, communicate about the service, prevent abuse, and
          improve signal quality.
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
          We may use service providers such as Stripe for payment processing and
          infrastructure providers necessary to operate the service. Those
          providers process information under their own terms and privacy
          commitments.
        </p>

        <h2>Retention and requests</h2>
        <p>
          We retain information only as reasonably necessary for the purposes
          described above and applicable obligations. For privacy questions or
          requests, contact <a href="mailto:hello@awardflux.com">hello@awardflux.com</a>.
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
