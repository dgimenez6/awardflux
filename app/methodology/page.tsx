export default function MethodologyPage() {
  return (
    <main className="subpage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="AwardFlux home">
          <span className="brandMark">A</span>
          <span>AwardFlux</span>
        </a>
        <a className="navCta" href="/signals">See sample signals</a>
      </header>

      <section className="subHero shell">
        <div className="eyebrow">Methodology &amp; sources</div>
        <h1>Evidence first. Inference second.</h1>
        <p>
          AwardFlux is designed to reduce the noise in public federal award
          data. We do not treat every award as proof that a company needs a
          specific vendor.
        </p>
      </section>

      <section className="methodologyGrid shell">
        <article>
          <h2>1. Detect fresh events</h2>
          <p>
            We monitor public federal and agency sources for newly published or
            newly confirmed awards, first-time recipients, and meaningful phase
            or funding transitions.
          </p>
        </article>

        <article>
          <h2>2. Resolve award history</h2>
          <p>
            We compare the company against available public history to identify
            whether the event appears to be a first award, repeat award, or
            transition. When that cannot be established confidently, we do not
            present it as confirmed.
          </p>
        </article>

        <article>
          <h2>3. Match requirement context</h2>
          <p>
            Different agencies, phases, and award instruments create different
            obligations. AwardFlux uses official program and acquisition
            guidance when evaluating whether an award creates a plausible
            accounting, timekeeping, compliance, or operations need.
          </p>
        </article>

        <article>
          <h2>4. Assign service fit</h2>
          <p>
            HIGH indicates stronger requirement-backed or context-backed evidence
            of a potential need. MEDIUM indicates a meaningful transition with
            less direct evidence. Weak generic inferences are excluded from the
            paid feed rather than labeled as opportunities.
          </p>
        </article>

        <article>
          <h2>5. Human verification</h2>
          <p>
            During Founding Access, every published signal is reviewed before
            delivery. The goal is not maximum volume; it is a smaller set of
            defensible opportunities.
          </p>
        </article>

        <article>
          <h2>Primary public sources</h2>
          <ul>
            <li><a href="https://www.sbir.gov/" target="_blank" rel="noreferrer">SBIR.gov ↗</a></li>
            <li><a href="https://www.usaspending.gov/" target="_blank" rel="noreferrer">USAspending.gov ↗</a></li>
            <li>Official agency award announcements and program guidance</li>
            <li>Public business information published in official award records</li>
          </ul>
          <p>
            AwardFlux is not affiliated with, endorsed by, or sponsored by the
            U.S. Government or any federal agency.
          </p>
        </article>
      </section>

      <footer className="footer shell">
        <a className="brand footerBrand" href="/">
          <span className="brandMark">A</span><span>AwardFlux</span>
        </a>
        <div className="footerLinks">
          <a href="/signals">Signals</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <span>© 2026 AwardFlux</span>
      </footer>
    </main>
  );
}
