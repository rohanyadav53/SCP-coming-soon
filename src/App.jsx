import { useState } from "react";
import {
  Bell,
  X,
  Droplet,
  Layers,
  Recycle,
  ShieldCheck,
  Truck,
  MapPin,
  Phone,
  Mail,
  Globe,
  Plus,
  Minus,
  Settings,
  ArrowRight,
} from "lucide-react";

const LOGO = "/SCP(WIthout text).png";

/* ---------------------------------------------------------------- data --- */

const PRODUCTS = [
  {
    icon: Droplet,
    tint: "text-ink-600 bg-ink-50",
    title: "Offset Printing Inks",
    body: "High-gloss, vibrant and dimensionally stable inks engineered for commercial offset presses, high-volume packaging and publications.",
  },
  {
    icon: Layers,
    tint: "text-ink-700 bg-ink-100",
    title: "Flexographic Inks",
    body: "Fast-drying, flexible inks with sharp registration — formulated for film, foil and corrugated substrates that keep print crisp at speed.",
  },
  {
    icon: Recycle,
    tint: "text-emerald-600 bg-emerald-50",
    title: "Sustainability",
    body: "Eco-friendly, water-based and bio-based ink formulations — reducing impact while keeping your packaging fit for a circular economy.",
  },
];

const FAQS = [
  {
    q: "Can I still place bulk orders during the upgrade?",
    a: "Yes. Our automated manufacturing facility in Jaipur is operating at full capacity throughout the upgrade. Reach out to our sales desk directly and we'll process your order without delay.",
  },
  {
    q: "Are your inks compliant with international standards?",
    a: "Absolutely. Inkotek is triple ISO certified — ISO 9001, ISO 14001 and ISO 27001 — and we supply REACH-compliant formulations that are ready for the European market.",
  },
  {
    q: "How fast is your delivery?",
    a: "Our average domestic turnaround is just 4 days. With in-house automation and a disciplined batch process, we ship refined, consistent ink far faster than the industry standard.",
  },
  {
    q: "Do you supply internationally and handle export documentation?",
    a: "Yes. We currently export to South Africa and are actively expanding across the Middle East, Southeast Asia and Africa. Our team handles all compliance and shipping logistics end-to-end.",
  },
  {
    q: "Do you offer custom ink formulations?",
    a: "Yes. Our dedicated R&D lab develops new, substrate-specific custom formulations on a weekly cadence — measuring density, viscosity and adhesion so every batch matches your exact print specification.",
  },
];

/* ------------------------------------------------------------- helpers --- */

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-ink-600/50" />
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-ink-600">
        {children}
      </span>
      <span className="h-px w-8 bg-ink-600/50" />
    </div>
  );
}

/* ----------------------------------------------------------- component --- */

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [notified, setNotified] = useState(false);
  const [sent, setSent] = useState(false);

  const openModal = () => {
    setNotified(false);
    setModalOpen(true);
  };

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* ============================================================ NAV = */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO} alt="Inkotek logo" className="h-16 w-16 object-contain" />
            <div className="leading-none">
              <span className="block text-xl font-extrabold tracking-tight text-ink-900">
                INKOTEK
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Shyam Chemical &amp; Polymers
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {[
              ["About", "about"],
              ["Products", "products"],
              ["FAQ", "faq"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={scrollTo(id)}
                className="text-sm font-semibold text-slate-600 transition hover:text-ink-600"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={openModal}
            className="rounded-full bg-ink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-ink-600/30 transition hover:bg-ink-700"
          >
            Notify Me
          </button>
        </nav>
      </header>

      {/* =========================================================== HERO = */}
      <section id="top" className="relative overflow-hidden bg-ink-950">
        {/* dot + grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(143,182,255,0.25) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,139,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,139,255,0.06) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* glow accents */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ink-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ink-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ink-400" />
            Site Under Maintenance
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Our Website is
            <br />
            <span className="text-ink-300">Under Maintenance</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-100/80 sm:text-lg">
            We're upgrading the Inkotek digital experience to showcase our
            premium offset, flexo and industrial ink solutions even better. Our
            factory never stops —{" "}
            <span className="font-semibold text-white">
              production and support continue as usual.
            </span>
          </p>

          {/* glassmorphism loading card */}
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-left shadow-2xl shadow-black/30 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white/10 text-ink-200">
                <Settings className="h-6 w-6 animate-spin [animation-duration:6s]" />
              </div>
              <div>
                <p className="text-base font-bold text-white">Upgrade in Progress</p>
                <p className="text-sm text-ink-100/70">Precision in Every Drop</p>
              </div>
            </div>

            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-ink-400 to-ink-300 animate-ink-progress" />
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-100/70">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
              Our team is on it — production &amp; support continue as usual
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-full bg-ink-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-ink-600/30 transition hover:bg-ink-500"
            >
              <Bell className="h-4 w-4" /> Notify Me at Launch
            </button>
            <a
              href="#products"
              onClick={scrollTo("products")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================= PRODUCTS = */}
      <section id="about" className="scroll-mt-20 bg-white py-24">
        <div id="products" className="mx-auto max-w-7xl scroll-mt-20 px-6">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Chemistry Meets Craftsmanship
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-500">
            Inkotek is a premium manufacturer of high-performance inks —
            engineered for the food, agriculture, commercial printing and
            industrial sectors. From a modern automated plant in Jaipur, we
            engineer confidence into every print.
          </p>

          {/* product cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRODUCTS.map(({ icon: Icon, tint, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-600/5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${tint}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* stat blocks */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-5 rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-ink-600 text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink-900">
                  Triple ISO Certified
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  ISO 9001 · ISO 14001 · ISO 27001 — plus REACH compliance
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-ink-600 text-white">
                <Truck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink-900">
                  4-Day Delivery
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Average domestic turnaround — 13× faster innovation cadence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ FAQ = */}
      <section id="faq" className="scroll-mt-20 bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionLabel>Questions &amp; Answers</SectionLabel>
          <h2 className="mt-5 text-center text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-500">
            The site is being rebuilt — but the business isn't pausing. Here's
            what you need to know.
          </p>

          <div className="mt-12 space-y-4">
            {FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                  >
                    <span className="text-base font-semibold text-ink-900">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition ${
                        open ? "bg-ink-600 text-white" : "bg-ink-50 text-ink-600"
                      }`}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-500">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== CONTACT = */}
      <section id="contact" className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          {/* info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink-600">
              Get in Touch
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Let's Talk Chemistry
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
              Bulk orders, samples and quotes are open throughout the upgrade.
              Reach our team directly and we'll respond within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard icon={MapPin} label="Address">
                F-612, Manda Industrial Area, 2nd Phase, Jaipur, Rajasthan
                303712, India
              </ContactCard>
              <ContactCard icon={Phone} label="Phone" href="tel:+919314430566">
                +91 93144 30566
              </ContactCard>
              <ContactCard
                icon={Mail}
                label="Email"
                href="mailto:shyamchemicaljpr@gmail.com"
              >
                shyamchemicaljpr@gmail.com
              </ContactCard>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-ink-200 bg-ink-50/50 p-5 text-sm text-slate-600">
              <span className="font-semibold text-ink-900">Need a datasheet?</span>{" "}
              Mention your substrate and press type in the form — our R&amp;D desk
              will match a formulation and send technical specs.
            </div>
          </div>

          {/* form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50">
            {sent ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-900">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-slate-500">
                  Thanks for reaching out. Our sales desk will get back to you
                  within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-ink-600 hover:text-ink-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      type="text"
                      placeholder="Company name"
                      className={inputCls}
                    />
                  </Field>
                </div>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                </Field>
                <Field label="Message" required>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your substrate, press type, quantities and timeline…"
                    className={`${inputCls} resize-y`}
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-ink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ink-600/25 transition hover:bg-ink-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= FOOTER = */}
      <footer className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(143,182,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Inkotek logo"
                className="h-20 w-20 object-contain"
              />
              <div>
                <p className="text-lg font-extrabold">
                  INKOTEK <span className="text-ink-400">Group</span>
                </p>
                <p className="text-sm text-ink-100/60">
                  Shyam Chemical &amp; Polymers · Precision in Every Drop
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm font-semibold">
              <a
                href="mailto:shyamchemicaljpr@gmail.com"
                className="text-ink-100/80 transition hover:text-white"
              >
                Email
              </a>
              <a
                href="tel:+919314430566"
                className="text-ink-100/80 transition hover:text-white"
              >
                Call
              </a>
              <button
                onClick={openModal}
                className="text-ink-100/80 transition hover:text-white"
              >
                Notify Me
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-ink-100/50">
            © 2026 Inkotek. All rights reserved. · We're upgrading — thank you
            for your patience.
          </div>
        </div>
      </footer>

      {/* ========================================================== MODAL = */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="animate-fade-up relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 transition hover:text-slate-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {notified ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Bell className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-ink-900">
                  You're on the list!
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  We'll email you the moment we go live — with your priority
                  access and free technical consultation reserved.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-7 w-full rounded-xl bg-ink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-700"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-50 text-ink-600">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-ink-900">
                  Be First in Line
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Get <span className="font-semibold text-ink-700">priority access</span>{" "}
                  and a free technical consultation the moment we go live. Tell us
                  your industry and we'll tailor it to you.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNotified(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <Field label="Work email" required>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Primary industry of interest" required>
                    <select required defaultValue="" className={`${inputCls} appearance-none`}>
                      <option value="" disabled>
                        Select an industry…
                      </option>
                      <option>Packaging</option>
                      <option>Commercial Printing</option>
                      <option>Textiles</option>
                      <option>Industrial</option>
                    </select>
                  </Field>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-ink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ink-600/25 transition hover:bg-ink-700"
                  >
                    Claim Priority Access
                  </button>
                </form>
                <p className="mt-4 text-center text-xs text-slate-400">
                  No spam. One notification when we launch. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------- small pieces --- */

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-ink-500 focus:bg-white focus:ring-2 focus:ring-ink-500/20";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-900">
        {label}
        {required && <span className="text-ink-600"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, label, href, children }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-ink-200 hover:bg-ink-50/50">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-ink-50 text-ink-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-ink-900">{children}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
