import "./index.css";

const highlights = [
  { label: "Focus", value: "Product engineering" },
  { label: "Systems", value: "HR · Payroll · Workforce" },
  { label: "Approach", value: "Build · Deploy · Improve" },
];

const work = [
  {
    number: "01",
    title: "Seminal",
    subtitle: "Multi-country HR & payroll platform",
    body: "Contributing to product development and country-specific payroll implementation for a platform that supports people management, attendance, contracts and payroll.",
    details: ["Python", "React", "JavaScript", "Supabase", "Vercel"],
    outcome: "Rollout support across Uganda, Kenya, South Sudan, Tanzania and Rwanda.",
  },
  {
    number: "02",
    title: "FLIP Africa",
    subtitle: "Production platform operations",
    body: "Supported a live recruitment and gig-work platform by investigating application defects, restoring critical workflows and translating operational issues into practical technical improvements.",
    details: ["React", "Python", "Django", "AWS", "Flutterwave"],
    outcome: "Resolved registration and payment workflow issues in a live environment.",
  },
  {
    number: "03",
    title: "Delivery systems",
    subtitle: "From code change to production",
    body: "Implemented a structured staging-to-production deployment workflow and worked on infrastructure recovery and credential rotation to improve the platform’s operational footing.",
    details: ["GitHub Actions", "AWS EC2", "RDS", "S3", "IAM"],
    outcome: "More reliable releases, stronger operational continuity.",
  },
];

const capabilities = [
  ["Software development", "Python, Django, React and JavaScript for practical business software."],
  ["Cloud & delivery", "AWS operations, GitHub Actions CI/CD, release workflows and production support."],
  ["Enterprise systems", "Payroll, attendance, contracts, people management and multi-country implementation."],
  ["Product thinking", "Turning user and business problems into clear, testable technical work."],
];

function App() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Primary navigation">
        <a className="brand" href="#top">TA<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SYSTEMS DEVELOPER · UGANDA</p>
          <h1>I build the systems behind <em>real work.</em></h1>
          <p className="lede">
            Tabshilla Adong is a Systems Developer working across software development,
            product technology and cloud operations—helping teams turn complex business
            processes into dependable digital products.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#work">Explore selected work <span>↓</span></a>
            <a className="button button-quiet" href="https://github.com/Tabshilla" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Professional focus">
          <p className="panel-label">CURRENTLY WORKING ON</p>
          <p className="panel-title">Enterprise HR &amp;<br />payroll systems.</p>
          <div className="signal"><i /> Available for thoughtful product work</div>
        </aside>
      </section>

      <section className="intro wrap">
        <p className="section-kicker">01 / PROFILE</p>
        <div className="intro-grid">
          <h2>Engineering is most valuable when it makes work <em>simpler.</em></h2>
          <div>
            <p>I bring a product-minded view to development: understand the people and the business process first, then build technology that can be trusted in production.</p>
            <p>My experience spans full-stack development, production troubleshooting, cloud infrastructure, CI/CD and the implementation of workforce systems across African markets.</p>
          </div>
        </div>
        <div className="stat-grid">
          {highlights.map((item) => <div className="stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="section-kicker">02 / SELECTED WORK</p><h2>Built around<br /><em>real operations.</em></h2></div>
            <p>Selected examples of work across enterprise software, platform reliability and delivery systems.</p>
          </div>
          <div className="work-list">
            {work.map((item) => (
              <article className="work-card" key={item.number}>
                <div className="work-meta"><span>{item.number}</span><span>CASE STUDY</span></div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                {item.title === "Seminal" && <a className="project-link" href="https://seminal.qsourcing.com/" target="_blank" rel="noreferrer">Visit Seminal <span>↗</span></a>}
                {item.title === "FLIP Africa" && <a className="project-link" href="https://www.flipafrica.app/" target="_blank" rel="noreferrer">Visit FLIP Africa <span>↗</span></a>}
                <p>{item.body}</p>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="outcome"><span>IMPACT</span>{item.outcome}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience wrap" id="experience">
        <p className="section-kicker">03 / EXPERIENCE</p>
        <div className="experience-grid">
          <h2>From product questions to <em>production systems.</em></h2>
          <div className="timeline">
            <article><p>NOW</p><div><h3>Systems Developer</h3><h4>Q-Sourcing IT</h4><span>Developing and rolling out HR, people and payroll capabilities while supporting implementation across multiple countries.</span></div></article>
            <article><p>PREVIOUSLY</p><div><h3>Platform &amp; Product Operations</h3><h4>FLIP Africa / Q-Sourcing</h4><span>Worked at the intersection of operations, product decisions and a live technical platform.</span></div></article>
            <article><p>FOUNDATION</p><div><h3>Software Engineering</h3><h4>Refactory</h4><span>Built the foundation for a career focused on useful, business-ready software.</span></div></article>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="wrap">
          <p className="section-kicker">04 / CAPABILITIES</p>
          <div className="capability-grid">
            {capabilities.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <p className="section-kicker">05 / CONTACT</p>
        <h2>Let&apos;s build something<br /><em>that works beautifully.</em></h2>
        <p>I’m open to conversations about product engineering, enterprise systems and practical technology for growing teams.</p>
        <div className="contact-links">
          <a href="mailto:adongtm@gmail.com">Start a conversation <span>↗</span></a>
          <a href="https://github.com/Tabshilla" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </section>

      <footer className="wrap"><span>© {new Date().getFullYear()} TABSHILLA ADONG</span><span>DESIGNED FOR REAL-WORLD SYSTEMS</span></footer>
    </main>
  );
}

export default App;
