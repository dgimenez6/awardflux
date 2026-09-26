export default function TermsPage() {
  return (
    <main className="subpage">
      <header className="nav shell">
        <a className="brand" href="/">
          <span className="brandMark">A</span><span>AwardFlux</span>
        </a>
      </header>

      <article className="legal shell">
        <div className="kicker">Terms</div>
        <h1>Terms of Service</h1>
        <p>Last updated: September 26, 2026.</p>

        <h2>Service</h2>
        <p>
          AwardFlux provides commercial intelligence derived from public award
          records, official sources, and our own screening and analysis. Signals
          are intended to help business users prioritize research and outreach.
        </p>

        <h2>No guarantee of need or sale</h2>
        <p>
          A signal is not a representation that a company is actively seeking a
          vendor, will purchase a service, or will respond to outreach.
          Classifications such as HIGH or MEDIUM describe the strength of the
          supporting context, not a guaranteed buying decision.
        </p>

        <h2>Non-exclusive intelligence</h2>
        <p>
          Unless a separate written agreement states otherwise, AwardFlux
          signals are non-exclusive and may be provided to more than one
          customer.
        </p>

        <h2>Customer responsibility</h2>
        <p>
          Customers are responsible for their own use of the information,
          including verifying facts before relying on them and conducting sales
          outreach in compliance with applicable laws, platform rules, and
          professional obligations.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Founding Access is billed monthly through Stripe and may be canceled
          for future billing. Unless required by law or stated otherwise at
          checkout, fees already charged for a billing period are not
          automatically refundable.
        </p>

        <h2>Sources and availability</h2>
        <p>
          Public datasets can contain errors, revisions, or reporting delays.
          AwardFlux may update, correct, add, or remove signals as better
          information becomes available. We do not guarantee a minimum number of
          signals in any given week.
        </p>

        <h2>Government affiliation</h2>
        <p>
          AwardFlux is not affiliated with, endorsed by, or sponsored by the
          U.S. Government or any federal agency.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to
          {" "}<a href="mailto:hello@awardflux.com">hello@awardflux.com</a>.
        </p>
      </article>
    </main>
  );
}
