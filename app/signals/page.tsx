const samples = [
  {
    company: "Orion Wave Technology Corporation",
    badge: "HIGH-FIT SIGNAL",
    agency: "NSF",
    phase: "Phase I",
    award: "$304,943",
    employees: "2 reported",
    first: "First SBIR",
    why: [
      "First SBIR award detected.",
      "NSF Phase I accounting and employee timekeeping guidance applies.",
      "Small reported team may have limited back-office capacity.",
    ],
    awardSource: "https://www.sbir.gov/portfolio/1697943",
  },
  {
    company: "Yadonai LLC",
    badge: "HIGH-FIT SIGNAL",
    agency: "NSF",
    phase: "Phase I",
    award: "$304,990",
    employees: "1 reported",
    first: "First SBIR",
    why: [
      "First SBIR award detected.",
      "NSF Phase I accounting and employee timekeeping guidance applies.",
      "A very small reported team may increase the relevance of external back-office support.",
    ],
    awardSource: "https://www.sbir.gov/portfolio/2659728",
  },
  {
    company: "UltraMend",
    badge: "HIGH-FIT SIGNAL",
    agency: "NSF",
    phase: "Phase I",
    award: "$305,000",
    employees: "2 reported",
    first: "First SBIR",
    why: [
      "First SBIR award detected.",
      "NSF Phase I accounting and employee timekeeping guidance applies.",
      "Small reported team may make specialized outside support more relevant.",
    ],
    awardSource: "https://www.sbir.gov/portfolio/1302121",
  },
];

export default function SignalsPage() {
  return (
    <main className="subpage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="AwardFlux home">
          <span className="brandMark">A</span>
          <span>AwardFlux</span>
        </a>
        <a className="navCta" href="/#pricing">
          Founding Access
        </a>
      </header>

      <section className="subHero shell">
        <div className="eyebrow">3 current sample signals</div>
        <h1>Judge the signal before you pay.</h1>
        <p>
          These examples show the type of public award event AwardFlux screens
          for Accounting &amp; Compliance Edition. Public samples intentionally
          omit full contact details.
        </p>
      </section>

      <section className="signalList shell">
        {samples.map((signal) => (
          <article className="sampleSignal" key={signal.company}>
            <div className="sampleSignalHead">
              <div>
                <div className="signalBadge">{signal.badge}</div>
                <h2>{signal.company}</h2>
                <p>Potential service fit: Accounting &amp; compliance</p>
              </div>
              <span className="fitPill">HIGH</span>
            </div>

            <div className="sampleMeta">
              <div><span>Agency</span><strong>{signal.agency}</strong></div>
              <div><span>Phase</span><strong>{signal.phase}</strong></div>
              <div><span>Award</span><strong>{signal.award}</strong></div>
              <div><span>Context</span><strong>{signal.first} · {signal.employees}</strong></div>
            </div>

            <div className="why">
              <span className="whyLabel">WHY THIS MAY MATTER NOW</span>
              <ul className="evidenceList">
                {signal.why.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="sourceLinks">
              <a href={signal.awardSource} target="_blank" rel="noreferrer">
                Official SBIR record ↗
              </a>
              <a
                href="https://seedfund.nsf.gov/resources/awardees/phase-1/accounting/"
                target="_blank"
                rel="noreferrer"
              >
                NSF accounting guidance ↗
              </a>
            </div>
          </article>
        ))}

        <div className="pricingCard">
          <div className="kicker">Want the verified weekly feed?</div>
          <div className="price">
            <strong>$149</strong><span>/ month</span>
          </div>
          <p>
            Founding Access includes fresh verified signals, why-now analysis,
            official evidence, public business contacts where available, and
            CSV-ready fields.
          </p>
          <div className="priceActions">
            <a className="button primary" href="/checkout">
              Get Founding Access
            </a>
            <a className="button secondary" href="/methodology">
              Read methodology
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand footerBrand" href="/">
          <span className="brandMark">A</span><span>AwardFlux</span>
        </a>
        <div className="footerLinks">
          <a href="/methodology">Methodology</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <span>© 2026 AwardFlux</span>
      </footer>
    </main>
  );
}
