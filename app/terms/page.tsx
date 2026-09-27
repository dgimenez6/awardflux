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

        <p>
          AwardFlux is operated by Damian Leonardo Gimenez, based in the state of Rio de
          Janeiro, Brazil.
        </p>

        <h2>Service</h2>
        <p>
          AwardFlux provides commercial intelligence derived from public award
          records, official sources, and our own screening and analysis. Signals
          are intended to help business users prioritize research and outreach.
          By purchasing a subscription, you agree to these terms on behalf of
          yourself or the organization you represent, and confirm you have
          authority to do so.
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

        <h2>Permitted use and ownership</h2>
        <p>
          During an active subscription, you may use the feed within your own
          organization for internal business research, prospecting, and lawful
          outreach. You may share it with employees and contractors working for
          that organization who follow these terms. AwardFlux retains its rights
          in its original selection, analysis, presentation, and service; public
          records remain subject to their own applicable terms. Your subscription
          does not transfer ownership of AwardFlux content or give you exclusive
          rights to any signal.
        </p>
        <p>
          Do not publish, sublicense, resell, or redistribute the feed or
          substantial portions of our analysis to third parties, or use the
          service unlawfully. You may reference individual public facts in your
          own work, subject to the original sources and applicable law.
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
          Founding Access is billed at $149 per month through Stripe, unless a
          different price is shown at checkout. The subscription renews monthly
          until canceled. There is no annual commitment or setup fee. The
          founding price remains the same while the subscription stays active,
          unless you agree to a change. Taxes, if applicable, are shown at
          checkout.
        </p>
        <p>
          You can cancel at any time through the Stripe subscription management
          option provided after purchase. Stripe will show when the cancellation
          takes effect. Cancel before the next renewal to avoid the next charge.
          Unless required by law or stated otherwise at checkout, fees already
          charged for a billing period are not automatically refundable.
        </p>

        <h2>Sources and availability</h2>
        <p>
          Public datasets can contain errors, revisions, or reporting delays.
          AwardFlux may update, correct, add, or remove signals as better
          information becomes available. We do not guarantee a minimum number of
          signals in any given week. We may temporarily interrupt the service
          for maintenance or circumstances outside our control; we will use
          reasonable efforts to restore it.
        </p>

        <h2>Suspension and termination</h2>
        <p>
          We may suspend access for nonpayment, unlawful use, redistribution in
          breach of these terms, or conduct that materially harms the service or
          others. Where practical, we will give notice and an opportunity to
          resolve the issue. You may end your subscription as described above.
        </p>

        <h2>Professional advice and warranties</h2>
        <p>
          AwardFlux provides research and commercial intelligence, not legal,
          accounting, tax, or compliance advice. You must independently assess
          any opportunity and seek qualified advice when needed. To the extent
          permitted by law, the service and signals are provided as available,
          without a warranty of accuracy, completeness, uninterrupted access,
          fitness for a particular purpose, or commercial results.
        </p>

        <h2>Liability</h2>
        <p>
          To the extent permitted by applicable law, AwardFlux is not liable
          for indirect, incidental, consequential, or lost-profit damages
          arising from use of the service. Our total liability for claims
          relating to the service is limited to the fees you paid AwardFlux in
          the 12 months before the event giving rise to the claim. These limits
          do not apply where the law prohibits them.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms as the service evolves. The date above will
          reflect revisions. For material changes affecting an active paid
          subscription, we will notify the customer before they take effect;
          changes will not retroactively alter an already paid billing period.
        </p>

        <h2>Government affiliation</h2>
        <p>
          AwardFlux is not affiliated with, endorsed by, or sponsored by the
          U.S. Government or any federal agency.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Brazil, subject to any
          mandatory protections that apply in your location. Disputes will be
          brought before a court with jurisdiction under applicable law.
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
