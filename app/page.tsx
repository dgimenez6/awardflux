const Check = () => (
  <span className="check" aria-hidden="true">
    ✓
  </span>
);

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#" aria-label="AwardFlux home">
          <span className="brandMark">A</span>
          <span>AwardFlux</span>
        </a>
        <a
          className="navCta"
          href="mailto:hello@awardflux.com?subject=AwardFlux%20early%20access"
        >
          Early access
        </a>
      </header>

      <section className="hero shell">
        <div className="eyebrow">Fresh federal award intelligence</div>
        <h1>
          Know who just got funded
          <span> before they start shopping.</span>
        </h1>
        <p className="heroCopy">
          AwardFlux finds newly funded federal awardees, verifies the signal, and
          explains what they are likely to need next — so your team can reach
          them at the right moment.
        </p>
        <div className="heroActions">
          <a
            className="button primary"
            href="mailto:hello@awardflux.com?subject=Send%20me%20current%20AwardFlux%20opportunities"
          >
            Get current opportunities
          </a>
          <a className="button secondary" href="#how">
            See how it works
          </a>
        </div>
        <p className="micro">
          Built first for SBIR/STTR accounting, compliance, and GovCon service
          firms.
        </p>
      </section>

      <section className="proof shell" aria-label="Product example">
        <div className="sectionIntro">
          <div className="kicker">What you receive</div>
          <h2>Not another list. A buying-window signal.</h2>
          <p>
            We combine public award data with company context and recency to
            surface businesses that have just entered a new operating moment.
          </p>
        </div>

        <article className="signalCard">
          <div className="signalTop">
            <div>
              <div className="signalBadge">HIGH-CONFIDENCE SIGNAL</div>
              <h3>First-time SBIR recipient</h3>
              <p>Newly funded small business · Massachusetts</p>
            </div>
            <div className="freshness">
              <span className="pulse" />
              Recently detected
            </div>
          </div>

          <div className="metrics">
            <div>
              <span>Agency</span>
              <strong>NSF</strong>
            </div>
            <div>
              <span>Phase</span>
              <strong>Phase I</strong>
            </div>
            <div>
              <span>Award</span>
              <strong>$304,943</strong>
            </div>
            <div>
              <span>Team size</span>
              <strong>2</strong>
            </div>
          </div>

          <div className="why">
            <span className="whyLabel">WHY THIS MATTERS NOW</span>
            <div className="whyGrid">
              <p>
                <Check /> First SBIR award detected
              </p>
              <p>
                <Check /> New accounting &amp; timekeeping requirements
              </p>
              <p>
                <Check /> Small team with limited back-office capacity
              </p>
              <p>
                <Check /> Public business contact available
              </p>
            </div>
          </div>

          <div className="sourceNote">
            Public-source verified. Signals indicate timing and potential need;
            they do not imply an existing vendor relationship or guaranteed
            purchase.
          </div>
        </article>
      </section>

      <section className="how shell" id="how">
        <div className="sectionIntro narrow">
          <div className="kicker">How AwardFlux works</div>
          <h2>From public award to actionable opportunity.</h2>
        </div>
        <div className="steps">
          <article>
            <span>01</span>
            <h3>Detect</h3>
            <p>
              We monitor fresh federal funding activity and identify new awards,
              first-time recipients, and meaningful funding transitions.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Verify</h3>
            <p>
              We filter out stale or low-value records and add company size,
              award history, timing, contacts, and evidence behind the signal.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Prioritize</h3>
            <p>
              You get a short list of businesses worth contacting now, with a
              clear reason why each one may need your service.
            </p>
          </article>
        </div>
      </section>

      <section className="difference shell">
        <div className="comparison">
          <div className="compareMuted">
            <span className="compareLabel">Typical lead database</span>
            <h3>“Here are 10,000 government contractors.”</h3>
            <ul>
              <li>Large static lists</li>
              <li>Little context on timing</li>
              <li>Your team does the research</li>
              <li>Most records are not ready now</li>
            </ul>
          </div>
          <div className="compareStrong">
            <span className="compareLabel">AwardFlux</span>
            <h3>“These 12 companies just entered a buying window.”</h3>
            <ul>
              <li>Fresh award event</li>
              <li>Why-now explanation</li>
              <li>Relevant public contact</li>
              <li>Evidence behind every signal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="audience shell">
        <div className="sectionIntro narrow">
          <div className="kicker">Built for high-value service firms</div>
          <h2>Win the relationship when the need is new.</h2>
        </div>
        <div className="chips">
          <span>DCAA &amp; SBIR accounting</span>
          <span>Timekeeping systems</span>
          <span>GovCon compliance</span>
          <span>Contract operations</span>
          <span>Specialized advisory</span>
        </div>
      </section>

      <section className="cta shell">
        <div className="ctaCard">
          <div>
            <div className="kicker light">Private early access</div>
            <h2>See the current opportunities before we build the full platform.</h2>
            <p>
              We are validating AwardFlux with a small group of firms. Ask for
              the current batch and judge the signal quality yourself.
            </p>
          </div>
          <a
            className="button inverted"
            href="mailto:hello@awardflux.com?subject=AwardFlux%20current%20opportunities"
          >
            Show me the current batch
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand footerBrand" href="#">
          <span className="brandMark">A</span>
          <span>AwardFlux</span>
        </a>
        <p>Fresh funding. Timely opportunities.</p>
        <span>© 2026 AwardFlux</span>
      </footer>
    </main>
  );
}
