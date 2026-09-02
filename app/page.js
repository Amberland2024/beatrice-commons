import Image from "next/image";
import InterestForm from "./interest-form";

const driveTimes = [
  { place: "Beatrice High School", time: "3 min" },
  { place: "Landmark Snacks", time: "8 min" },
  { place: "Beatrice Community Hospital", time: "10 min" },
  { place: "Exmark Manufacturing", time: "10 min" },
  { place: "Walmart", time: "10 min" },
];

export default function Home() {
  return (
    <>
      <header className="site">
        <div className="wrap nav-row">
          <a href="#" className="site-logo" aria-label="Beatrice Commons — Live Well. Together.">
            <Image
              src="/images/bc-logo.png"
              alt="Beatrice Commons — Live Well. Together."
              width={182}
              height={64}
              priority
            />
          </a>
          <nav className="nav-links">
            <a href="#homes">The Homes</a>
            <a href="#community">Community</a>
            <a href="#location">Location</a>
            <a href="#financing">Financing</a>
          </nav>
          <a href="#reserve" className="btn btn-small">
            Join the Reservation List
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <Image
            src="/images/hero-dark.jpg"
            alt="New duplex home at Beatrice Commons with black siding and stone accents"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-overlay" />
          <div className="wrap hero-content">
            <span className="eyebrow">Now Taking Reservations &middot; Beatrice, Nebraska</span>
            <h1>
              Brand-new duplex homes,
              <br />
              priced from the mid&nbsp;$200Ks.
            </h1>
            <p className="lede">
              Beatrice Commons brings 32 new-construction, single-level homes to
              401 S 22nd Street — with the first eight homes arriving spring
              2027.
            </p>
            <div className="hero-ctas">
              <a href="#reserve" className="btn">
                Join the Reservation List
              </a>
              <a href="#homes" className="btn btn-ghost">
                See the Homes
              </a>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="stats">
          <div className="wrap stats-row">
            <div className="stat">
              <strong>32</strong>
              <span>new homes</span>
            </div>
            <div className="stat">
              <strong>Mid $200Ks</strong>
              <span>starting price</span>
            </div>
            <div className="stat">
              <strong>Spring 2027</strong>
              <span>first homes ready</span>
            </div>
            <div className="stat">
              <strong>1-level</strong>
              <span>living + attached garage</span>
            </div>
          </div>
        </section>

        {/* THE HOMES */}
        <section className="homes" id="homes">
          <div className="wrap">
            <span className="eyebrow">The Homes</span>
            <h2>Two floor plans. Two signature exteriors.</h2>
            <p className="section-lede">
              The first release includes eight homes — four of each plan — in a
              mix of crisp white farmhouse and bold modern-dark exteriors.
            </p>
            <div className="plan-grid">
              <article className="plan-card">
                <div className="plan-img">
                  <Image
                    src="/images/exterior-front.jpg"
                    alt="White duplex exterior with black brick accents at Beatrice Commons"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div className="plan-body">
                  <h3>3 Bed &middot; 2 Bath</h3>
                  <p className="plan-tag">with full basement</p>
                  <p>
                    Room to grow: three bedrooms, two full baths, and a full
                    basement for storage, a rec room, or future finish.
                  </p>
                  <p className="plan-count">4 available in the first release</p>
                </div>
              </article>
              <article className="plan-card">
                <div className="plan-img">
                  <Image
                    src="/images/exterior-white.jpg"
                    alt="White farmhouse-style duplex home at Beatrice Commons"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div className="plan-body">
                  <h3>2 Bed &middot; 1 Bath</h3>
                  <p className="plan-tag">efficient single-level living</p>
                  <p>
                    Right-sized and low-maintenance: two bedrooms and a full
                    bath, all on one level with an attached garage.
                  </p>
                  <p className="plan-count">4 available in the first release</p>
                </div>
              </article>
            </div>
            <p className="coming-soon">
              Detailed floor plans coming soon — join the reservation list and
              we&apos;ll send them to you first.
            </p>
          </div>
        </section>

        {/* CRAFTSMANSHIP */}
        <section className="craft">
          <div className="wrap craft-grid">
            <div className="craft-copy">
              <span className="eyebrow">Built to Last</span>
              <h2>Quality you can see in the details.</h2>
              <ul className="craft-list">
                <li>Class 4 impact-resistant asphalt shingles</li>
                <li>Brick veneer with horizontal lap siding</li>
                <li>Attached garage with 8&apos; door on every home</li>
                <li>Energy-efficient vinyl windows</li>
                <li>Single-level layouts — no stairs to daily living</li>
                <li>Private entrances, driveways, and yards</li>
              </ul>
            </div>
            <div className="craft-img">
              <Image
                src="/images/sketch.jpg"
                alt="Architectural drawing of a Beatrice Commons duplex home"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="community" id="community">
          <div className="community-img">
            <Image
              src="/images/aerial.jpg"
              alt="Aerial rendering of the Beatrice Commons neighborhood"
              fill
              sizes="100vw"
            />
          </div>
          <div className="wrap community-copy">
            <span className="eyebrow">The Neighborhood</span>
            <h2>A brand-new community, planned from the ground up.</h2>
            <p>
              Beatrice Commons is a master-planned neighborhood with quiet
              streets, sidewalks, and green space throughout — new construction
              from end to end, minutes from everything in Beatrice.
            </p>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location" id="location">
          <div className="wrap">
            <span className="eyebrow">Location</span>
            <h2>401 S 22nd Street, Beatrice, Nebraska</h2>
            <div className="location-grid">
              <div className="map-frame">
                <iframe
                  title="Map of Beatrice Commons at 401 S 22nd St, Beatrice, NE"
                  src="https://www.google.com/maps?q=401+S+22nd+St,+Beatrice,+NE+68310&z=14&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="drive-times">
                <h3>Minutes from where Beatrice works</h3>
                <ul>
                  {driveTimes.map((d) => (
                    <li key={d.place}>
                      <span>{d.place}</span>
                      <strong>{d.time}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FINANCING */}
        <section className="financing" id="financing">
          <div className="wrap">
            <span className="eyebrow">Financing</span>
            <h2>Paths to make it yours.</h2>
            <p className="section-lede">
              Preferred lender announcement coming soon. In the meantime,
              Beatrice-area buyers may qualify for these homeownership programs:
            </p>
            <div className="finance-cards">
              <a
                href="https://www.rd.usda.gov/programs-services/single-family-housing-programs"
                target="_blank"
                rel="noopener noreferrer"
                className="finance-card"
              >
                <h3>USDA Rural Development</h3>
                <p>
                  Single-family housing loan programs, including options with
                  low or no down payment for eligible rural buyers.
                </p>
                <span className="finance-link">Learn more &rarr;</span>
              </a>
              <a
                href="https://www.nifa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="finance-card"
              >
                <h3>NIFA</h3>
                <p>
                  Nebraska Investment Finance Authority homebuyer programs with
                  competitive rates and down-payment assistance.
                </p>
                <span className="finance-link">Learn more &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* RESERVATION FORM + BROKER */}
        <section className="form-section" id="reserve">
          <div className="wrap ethos-wrap">
            <Image
              src="/images/bc-ethos.png"
              alt=""
              width={190}
              height={67}
              className="ethos-mark"
            />
          </div>
          <div className="wrap reserve-grid">
            <div className="broker-card">
              <div className="broker-photo">
                <Image
                  src="/images/jack-hill.jpg"
                  alt="Jack Hill, broker for Beatrice Commons"
                  fill
                  sizes="(max-width: 800px) 40vw, 20vw"
                />
              </div>
              <h3>Jack Hill</h3>
              <p className="broker-role">Broker &middot; Beatrice Commons</p>
              <p className="broker-blurb">
                Questions about plans, pricing, or timing? Reach out directly —
                Jack will get you answers and a spot on the list.
              </p>
              <div className="broker-links">
                <a href="tel:402-525-3462">(402) 525-3462</a>
                <a href="mailto:Jack@Amberland.Co">Jack@Amberland.Co</a>
              </div>
            </div>
            <InterestForm />
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap footer-row">
          <div>
            <Image
              src="/images/bc-logo-white.png"
              alt="Beatrice Commons — Live Well. Together."
              width={220}
              height={77}
              className="footer-brand"
            />
            <p>401 S 22nd St, Beatrice, NE 68310</p>
          </div>
          <div className="footer-right">
            <a
              href="https://amberlandco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-logo"
              aria-label="Amberland Companies"
            >
              <Image
                src="/images/amberland-white.png"
                alt="Amberland Companies"
                width={210}
                height={33}
              />
            </a>
            <p>
              A development by{" "}
              <a
                href="https://amberlandco.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amberland Companies
              </a>
            </p>
            <p className="fine">
              &copy; {new Date().getFullYear()} Beatrice Commons. All rights
              reserved. Prices, plans, and availability subject to change.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
