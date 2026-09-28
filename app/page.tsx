const Check = () => (
  <span className="check" aria-hidden="true">✓</span>
);

const CheckoutButton = ({
  className = "button primary",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <a className={className} href="/checkout">
    {children}
  </a>
);

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#" aria-label="AwardFlux home">
          <span className="brandMark">A</span>
          <span>AwardFlux</span>
        </a>

        <nav className="navLinks" aria-label="Primary navigation">
          <a href="/signals">Sample signals</a>
          <a href="/methodology">Methodology</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="navCta" href="/signals">
          See 3 sample signals
        </a>
      </header>

      <section className="hero shell">
        <div className="eyebrow">Post-award need intelligence</div>
        <h1>
          Know who just got funded
          <span> — and why they may need you now.</span>
        </h1>
        <p className="heroCopy">
          AwardFlux turns fresh federal awards into verified sales signals for
          accounting, compliance, and GovCon service firms — with the evidence
          behind every why-now.
        </p>
        <div className="heroActions">
          <a className="button primary" href="/signals">
            See 3 sample signals
          </a>
          <a className="button secondary" href="#pricing">
            View Founding Access
          </a>
        </div>
        <div className="trustStrip" aria-label="AwardFlux trust principles">
          <span>Official federal sources</span>
          <span>Human-verified signals</span>
          <span>Refreshed weekly</span>
        </div>
      </section>

      <section className="proof shell" aria-label="Product example">
        <div className="sectionIntro">
          <div className="kicker">What you receive</div>
          <h2>Not another award list. A need signal with evidence.</h2>
          <p>
            Public award data tells you who received funding. AwardFlux adds the
            timing, award history, service fit, and requirement context that
            explain why a company may be worth contacting now.
          </p>
        </div>

        <article className="signalCard">
          <div className="signalTop">
            <div>
              <div className="signalBadge">HIGH-FIT SIGNAL</div>
              <h3>First-time NSF SBIR recipient</h3>
              <p>Newly funded small business · Massachusetts</p>
            </div>
            <div className="freshness">
              <span className="pulse" />
              Example award signal
            </div>
          </div>

          <div className="metrics metricsFive">
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
              <span>Prior SBIRs</span>
              <strong>0</strong>
            </div>
            <div>
              <span>Reported employees</span>
              <strong>2</strong>
            </div>
          </div>

          <div className="signalFit">
            <div>
              <span className="fitLabel">SERVICE FIT</span>
              <strong>Accounting &amp; compliance</strong>
            </div>
            <span className="fitPill">HIGH</span>
          </div>

          <div className="why">
            <span className="whyLabel">WHY THIS MAY MATTER NOW</span>
            <div className="whyGrid">
              <p><Check /> First SBIR award detected</p>
              <p><Check /> NSF Phase I accounting and timekeeping guidance applies</p>
              <p><Check /> Small reported team may have limited back-office capacity</p>
              <p><Check /> Official public award record available</p>
            </div>
          </div>

          <div className="sourceNote">
            AwardFlux signals indicate timing and potential service fit. They do
            not imply an existing vendor relationship, guaranteed need, or
            guaranteed purchase.
          </div>
        </article>

        <div className="proofActions">
          <a className="textLink" href="/signals">
            View 3 sample signals →
          </a>
          <a className="textLink mutedLink" href="/methodology">
            See how we score signals
          </a>
        </div>
      </section>

      <section className="weekly shell">
        <div className="sectionIntro">
          <div className="kicker">What you get every week</div>
          <h2>A short list your team can actually use.</h2>
          <p>
            We would rather send seven defensible signals than pad a feed with
            thirty weak ones.
          </p>
        </div>

        <div className="valueGrid">
          <article>
            <span className="valueIcon">01</span>
            <h3>Fresh</h3>
            <p>
              Newly published or newly confirmed awards, prioritized while the
              underlying event is still recent.
            </p>
          </article>
          <article>
            <span className="valueIcon">02</span>
            <h3>Qualified</h3>
            <p>
              First-time recipients, phase transitions, company context, and
              service-fit screening remove low-value noise.
            </p>
          </article>
          <article>
            <span className="valueIcon">03</span>
            <h3>Explained</h3>
            <p>
              Every signal includes a why-now and links back to the official
              evidence behind the award and requirement context.
            </p>
          </article>
          <article>
            <span className="valueIcon">04</span>
            <h3>Usable</h3>
            <p>
              Company, award, amount, date, public business contact where
              available, service fit, evidence, and CSV-ready fields.
            </p>
          </article>
        </div>
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
              We monitor federal award activity and agency announcements for new
              awards, first-time recipients, and meaningful funding transitions.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Verify</h3>
            <p>
              We check award history, company context, program details, and
              official guidance before a record becomes a signal.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Explain</h3>
            <p>
              We classify potential service fit and show the evidence behind the
              why-now instead of asking your team to research every award.
            </p>
          </article>
        </div>
      </section>

      <section className="difference shell">
        <div className="comparison">
          <div className="compareMuted">
            <span className="compareLabel">Typical award database</span>
            <h3>“Here are thousands of federal awards.”</h3>
            <ul>
              <li>Large result sets</li>
              <li>Little service-specific context</li>
              <li>Your team interprets the award</li>
              <li>Timing and fit are easy to miss</li>
            </ul>
          </div>
          <div className="compareStrong">
            <span className="compareLabel">AwardFlux</span>
            <h3>“These companies may have a need you solve now.”</h3>
            <ul>
              <li>Fresh award event</li>
              <li>Service-fit classification</li>
              <li>Why-now explanation</li>
              <li>Official evidence behind the signal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="audience shell">
        <div className="sectionIntro narrow">
          <div className="kicker">Accounting &amp; Compliance Edition</div>
          <h2>Built first for firms serving federal awardees.</h2>
          <p>
            The initial feed is intentionally narrow so we can optimize signal
            quality before expanding to additional post-award needs.
          </p>
        </div>
        <div className="chips">
          <span>DCAA &amp; SBIR accounting</span>
          <span>Timekeeping systems</span>
          <span>GovCon compliance</span>
          <span>Contract operations</span>
          <span>Specialized advisory</span>
        </div>
      </section>

      <section className="pricing shell" id="pricing">
        <div className="sectionIntro narrow">
          <div className="kicker">Founding Access</div>
          <h2>Simple founding pricing.</h2>
          <p>
            No annual contract, no credits, and no setup fee. Founding pricing
            stays locked while your subscription remains active.
          </p>
        </div>

        <div className="pricingCard">
          <div className="priceTop">
            <div>
              <span className="priceLabel">AwardFlux Accounting &amp; Compliance</span>
              <div className="price">
                <strong>$149</strong>
                <span>/ month</span>
              </div>
              <p>Cancel anytime.</p>
            </div>
            <div className="foundingBadge">FOUNDING ACCESS</div>
          </div>

          <div className="includedGrid">
            <p><Check /> Fresh verified signals, refreshed weekly</p>
            <p><Check /> First-time awardees and phase transitions prioritized</p>
            <p><Check /> Service-fit and why-now analysis</p>
            <p><Check /> Official evidence and source links</p>
            <p><Check /> Public business contact where officially available</p>
            <p><Check /> CSV-ready structured fields</p>
          </div>

          <div className="priceActions">
            <CheckoutButton>Get Founding Access — $149/month</CheckoutButton>
            <a className="button secondary" href="/signals">
              See 3 signals first
            </a>
          </div>

          <p className="priceFine">
            Signals are non-exclusive and represent commercial intelligence, not
            guaranteed sales or guaranteed purchasing intent.
          </p>
        </div>
      </section>

      <section className="methodPreview shell">
        <div className="methodBox">
          <div>
            <div className="kicker">Transparent methodology</div>
            <h2>We show the evidence, not just a score.</h2>
            <p>
              AwardFlux uses public government records and official agency
              guidance. We distinguish confirmed awards from selections, avoid
              treating every award as the same need, and exclude weak signals
              that cannot be supported.
            </p>
          </div>
          <a className="button secondary" href="/methodology">
            Read methodology &amp; sources
          </a>
        </div>
      </section>

      <section className="faq shell">
        <div className="sectionIntro narrow">
          <div className="kicker">FAQ</div>
          <h2>What AwardFlux is — and is not.</h2>
        </div>
        <div className="faqList">
          <details>
            <summary>Are these exclusive leads?</summary>
            <p>
              No. AwardFlux sells non-exclusive intelligence derived from public
              sources. The value is in screening, timing, context, and evidence.
            </p>
          </details>
          <details>
            <summary>Does a HIGH signal mean the company will buy my service?</summary>
            <p>
              No. A HIGH signal means the award and company context provide
              stronger evidence of a potential service need. It never guarantees
              demand, vendor switching, or a sale.
            </p>
          </details>
          <details>
            <summary>Where does the data come from?</summary>
            <p>
              We use public federal and agency sources such as SBIR/STTR program
              records, USAspending data, agency award announcements, and official
              program guidance. Our methodology page explains the approach.
            </p>
          </details>
          <details>
            <summary>Why not just search USAspending or SBIR.gov myself?</summary>
            <p>
              You can. AwardFlux is for teams that do not want to monitor,
              reconcile, filter, interpret, and verify raw award records every
              week. We sell the screened conclusion and its evidence.
            </p>
          </details>
          <details>
            <summary>How is the first version delivered?</summary>
            <p>
              Founding customers receive a refreshed weekly feed with structured
              fields suitable for CSV export. We are keeping delivery simple
              while validating which signals drive real value.
            </p>
          </details>
        </div>
      </section>

      <section className="cta shell">
        <div className="ctaCard">
          <div>
            <div className="kicker light">Founding Access</div>
            <h2>See the signals while they are still fresh.</h2>
            <p>
              Start with the three public samples. If the quality is useful to
              your team, Founding Access delivers the verified feed every week.
            </p>
          </div>
          <div className="ctaButtons">
            <a className="button inverted" href="/signals">
              See 3 sample signals
            </a>
            <CheckoutButton className="button ghostLight">
              Get Founding Access
            </CheckoutButton>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand footerBrand" href="#">
          <span className="brandMark">A</span>
          <span>AwardFlux</span>
        </a>
        <div className="footerLinks">
          <a href="/signals">Signals</a>
          <a href="/methodology">Methodology</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <span>© 2026 AwardFlux</span>
      </footer>
    </main>
  );
}
