import { useState } from 'react'
import {
  Bell,
  Bot,
  Building2,
  CalendarRange,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  ConciergeBell,
  FileText,
  Hotel,
  Plane,
  ShieldCheck,
  Sparkles,
  Ticket,
  University,
} from 'lucide-react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'

const benefits = [
  {
    icon: <CheckCircle2 size={22} />,
    title: 'Easy to use',
    text: 'Launch in days with a clean workflow your team can use with minimal training.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Faster returns',
    text: 'Automate the follow-up cycle so owners get matched and notified quickly.',
  },
  {
    icon: <Bot size={22} />,
    title: 'Smart matching',
    text: 'AI-style routing helps staff prioritize the most likely item-owner matches.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Reduced workload',
    text: 'Replace scattered spreadsheets and inboxes with one coordinated process.',
  },
]

const features = [
  { icon: <ClipboardCheck size={20} />, label: 'Lost item tracking system' },
  { icon: <FileText size={20} />, label: 'Customer submission form' },
  { icon: <Building2 size={20} />, label: 'Smart categorization' },
  { icon: <Bell size={20} />, label: 'Notifications (conceptual)' },
  { icon: <ChartNoAxesCombined size={20} />, label: 'Reporting (conceptual)' },
]

const industries = [
  { icon: <Plane size={20} />, name: 'Airports' },
  { icon: <Hotel size={20} />, name: 'Hotels' },
  { icon: <Ticket size={20} />, name: 'Events' },
  { icon: <University size={20} />, name: 'Universities' },
]

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="logo">
            <ConciergeBell size={18} />
            Delayed Baggage Report
          </Link>
          <nav className="main-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* <NavLink to="/submit-item">Report Lost Item</NavLink> */}
          </nav>
          <Link to="/contact" className="btn btn-primary">
            Book a Demo
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <Link to="/contact" className="floating-contact">
        Contact Us
      </Link>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Delayed Baggage Report - Lost & Found Management Platform</p>
          <div className="footer-links">
            {/* <Link to="/contact">Book a Demo</Link> */}
            {/* <Link to="/submit-item">Report Lost Item</Link> */}
          </div>
        </div>
      </footer>
    </div>
  )
}

function LandingPage() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Reduce claim handling time by up to 60%</p>
            <h1>Delayed Baggage Report</h1>
            <h3>Recover Lost Items Faster with Smart Automation</h3>
            <p className="lead">
              Replace manual processes with one streamlined system that improves return
              rates, cuts operational overhead, and creates a better customer
              experience.
            </p>
            <div className="button-row">
              <Link to="/contact" className="btn btn-primary">
                Book a Demo
              </Link>
              {/* <Link to="/submit-item" className="btn btn-secondary">
                Report Lost Item
              </Link> */}
            </div>
          </div>
          <div className="hero-card">
            <h3>Operational ROI Snapshot</h3>
            <ul>
              <li>
                <strong>48%</strong> fewer manual follow-ups
              </li>
              <li>
                <strong>2.4x</strong> faster item-owner matching
              </li>
              <li>
                <strong>31%</strong> improvement in return satisfaction
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why teams choose Delayed Baggage Report</h2>
          <div className="card-grid four">
            {benefits.map((item) => (
              <article key={item.title} className="card">
                <span className="icon-wrap">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container split">
          <div>
            <h2>From manual chaos to predictable outcomes</h2>
            <p>
              Most teams still run lost and found through phone calls, inbox searches,
              and disconnected notes. That creates delays, missed matches, and avoidable
              labor costs.
            </p>
          </div>
          <div className="problem-solution">
            <div>
              <h4>Problem</h4>
              <p>Scattered records, slow handoffs, and no reliable follow-up system.</p>
            </div>
            <div>
              <h4>Solution</h4>
              <p>Centralized submissions, guided workflows, and automated updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Core platform capabilities</h2>
          <div className="feature-list">
            {features.map((feature) => (
              <div key={feature.label} className="feature-item">
                {feature.icon}
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <h2>Trusted by service-heavy operations</h2>
          <div className="card-grid four compact">
            {industries.map((industry) => (
              <article key={industry.name} className="card">
                <span className="icon-wrap">{industry.icon}</span>
                <h3>{industry.name}</h3>
              </article>
            ))}
          </div>
          <div className="testimonial-grid">
            <blockquote>
              "ReturnFlow helped our airport team cut claim resolution time in half."
            </blockquote>
            <blockquote>
              "The workflow is simple, and guests now get updates without extra staff."
            </blockquote>
            <blockquote>
              "We finally have visibility into lost-item operations across campus."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <h2>Ready to modernize your lost & found process?</h2>
          <p>Start capturing leads and recovering more items with less manual effort.</p>
          <div className="button-row center">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitted(true)
    setLoading(false)
    event.target.reset()
  }

  return (
    <Layout>
      <section className="section page-top">
        <div className="container narrow">
          <h1>Book a Demo</h1>
          <p className="lead">
            Tell us about your operation and we will show how ReturnFlow can increase
            return rates while reducing manual work.
          </p>
          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Company
              <input name="company" type="text" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Request'}
            </button>
            {submitted && (
              <p className="success-message">
                Thanks! Your demo request has been received.
              </p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  )
}

function SubmitItemPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitted(true)
    setLoading(false)
    event.target.reset()
  }

  return (
    <Layout>
      <section className="section page-top">
        <div className="container narrow">
          <h1>Report a Lost Item</h1>
          <p className="lead">
            Submit your details below and our team will follow up quickly if a potential
            match is found.
          </p>
          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Phone (optional)
              <input name="phone" type="tel" />
            </label>
            <label>
              Item description
              <textarea name="description" rows="4" required />
            </label>
            <label>
              Location lost
              <input name="location" type="text" required />
            </label>
            <label>
              Date lost
              <div className="date-field">
                <CalendarRange size={16} />
                <input name="date" type="date" required />
              </div>
            </label>
            <label>
              Upload image (optional)
              <input name="photo" type="file" accept="image/*" />
            </label>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Lost Item'}
            </button>
            {submitted && (
              <p className="success-message">
                Thanks! Your lost-item report has been submitted.
              </p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter basename="/delayedbagreport">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/submit-item" element={<SubmitItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
