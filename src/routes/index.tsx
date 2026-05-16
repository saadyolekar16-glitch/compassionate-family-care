import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import drGawas from "@/assets/dr-gawas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gawas Clinic Belagavi — Dr. Ziya Gawas | Family Medicine" },
      {
        name: "description",
        content:
          "Compassionate family medicine and diagnostic care by Dr. Ziya Gawas in Raviwar Peth, Belagavi. 5.0 rated. Call 089513 70104.",
      },
      { property: "og:title", content: "Gawas Clinic Belagavi — Dr. Ziya Gawas" },
      {
        property: "og:description",
        content:
          "Patient-first family medicine and diagnostic consultation in Raviwar Peth, Belagavi.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Diagnostic Consultation",
    body: "In-depth, patient-first diagnostics focused on understanding the core root of your medical concerns.",
  },
  {
    title: "Family Healthcare",
    body: "Comprehensive and personalized medical care solutions curated for all ages within your household.",
  },
  {
    title: "Expert Treatment",
    body: "Skillful treatment planning using trusted protocols to ensure effective, safe, and long-term healing.",
  },
];

const testimonials = [
  {
    quote:
      "Excellent consultation and treatment at Gawas Clinic. Dr. Ziya Gawas listens carefully to patients and provides accurate guidance. The service is very professional and the overall experience was very comfortable.",
    name: "Ateef Shaikh",
    highlight: false,
  },
  {
    quote:
      "I have been consulting Dr. Gawas for the past few months and I'm really satisfied with the results. The doctor listens attentively, understands the root cause of the problem, and suggests medicines that actually work.",
    name: "Simran Nissar Ahmed Shaikh",
    highlight: true,
  },
  {
    quote:
      "He is a wonderful doctor who treats with great skill. God has placed (Shifa) healing in his hands. May he continue to help others.",
    name: "Zoya Doni",
    highlight: false,
  },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 px-6 py-4 backdrop-blur-md md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          GAWAS CLINIC
        </a>
        <div className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Visit</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 rounded-full border border-foreground/5 bg-secondary px-3 py-1.5 text-xs font-medium lg:flex">
            <span className="text-amber-500">★ 5.0</span>
            <span className="text-muted-foreground/40 text-[10px]">|</span>
            <span>PATIENT RATING</span>
          </span>
          <a
            href="tel:08951370104"
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            089513 70104
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="home" className="relative px-6 pb-24 pt-16 md:px-10 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent">
              Official Medical Partner • Belagavi
            </div>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Compassionate <br />
              Medical{" "}
              <span className="font-normal italic text-accent">Expertise</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
              Dr. Ziya Gawas provides dedicated family medicine and diagnostic
              consultations tailored to your unique wellness journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-accent"
              >
                Request Appointment
              </a>
              <a
                href="#services"
                className="rounded-full border border-foreground/10 px-7 py-3.5 font-medium transition-colors hover:bg-secondary"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={clinicInterior}
              alt="Sunlit interior of Gawas Clinic in Belagavi"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-8 -left-4 max-w-xs rounded-2xl border border-foreground/5 bg-card p-7 shadow-xl shadow-foreground/5 md:-left-8">
              <p className="mb-4 text-sm italic leading-relaxed text-foreground/80">
                "A patient-first approach is the core of modern medicine. We
                listen to the root cause of every concern."
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                — Dr. Ziya Gawas
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="mx-4 my-12 rounded-[3rem] bg-secondary px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <img
          src={drGawas}
          alt="Dr. Ziya Gawas portrait"
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover"
        />
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Meet Dr. Ziya Gawas
          </span>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            A Patient-First Approach to Modern Medicine
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Gawas Clinic, we believe healthcare begins with communication. We
            place patient comfort, detailed listening, and accurate medical
            guidelines at the absolute center of our approach. Dr. Ziya Gawas
            specializes in identifying the root causes of medical concerns,
            providing treatments that work effectively for long-term wellness.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Conveniently situated in the heart of Belagavi at Raviwar Peth, our
            clinic provides an accessible, warm, and highly professional
            environment for patients seeking trusted family healthcare.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl font-semibold tracking-tight">
              Core Medical Services
            </h2>
            <p className="text-muted-foreground">
              Dedicated expertise for your family's wellness.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-foreground/5 bg-card p-10 transition-all hover:border-accent/30"
            >
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <div className="size-2 rounded-full bg-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Verified Google Reviews
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Hear From Our Patients
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={
                t.highlight
                  ? "rounded-2xl bg-accent p-8 text-accent-foreground"
                  : "rounded-2xl border border-foreground/5 bg-secondary/60 p-8"
              }
            >
              <p
                className={
                  t.highlight
                    ? "mb-6 text-lg italic leading-relaxed"
                    : "mb-6 text-sm leading-relaxed"
                }
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={
                    t.highlight
                      ? "size-8 rounded-full bg-white/20"
                      : "size-8 rounded-full bg-accent/10"
                  }
                />
                <span className="text-xs font-bold uppercase tracking-wider">
                  — {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer
      id="contact"
      className="mt-12 rounded-t-[4rem] bg-primary px-6 pb-12 pt-24 text-primary-foreground md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 pb-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Visit Us in <br />
              <span className="text-accent">Raviwar Peth</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-5">
                <span className="pt-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Location
                </span>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  Khadak Galli, opposite Ek-Kaman Masjid,
                  <br />
                  Khade Bazar, Raviwar Peth,
                  <br />
                  Belagavi, Karnataka 590001
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
                <iframe
                  title="Gawas Clinic location map"
                  src="https://www.google.com/maps?q=Gawas+Clinic+Khadak+Galli+Raviwar+Peth+Belagavi&output=embed"
                  width="100%"
                  height="240"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-0"
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Gawas+Clinic+Khadak+Galli+Raviwar+Peth+Belagavi+Karnataka+590001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-primary-foreground/5 px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-accent hover:bg-primary-foreground/10"
                >
                  Get Directions →
                </a>
              </div>
              <div className="flex gap-5">
                <span className="pt-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Contact
                </span>
                <a
                  href="tel:08951370104"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                >
                  Mobile: 089513 70104
                </a>
              </div>
              <div className="flex gap-5">
                <span className="pt-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Hours
                </span>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  Monday – Saturday: 12:00 PM – 11:00 PM
                  <br />
                  Sunday: Opens 12:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary-foreground/10 bg-primary-foreground/5 p-8 md:p-10">
            <h3 className="mb-8 text-2xl font-semibold">Request Appointment</h3>
            {submitted ? (
              <div className="rounded-2xl bg-accent/20 p-6 text-sm">
                Thank you. We will contact you shortly to confirm your visit.
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                      Full Name
                    </label>
                    <input
                      required
                      maxLength={100}
                      type="text"
                      className="w-full border-b border-primary-foreground/20 bg-transparent py-2 outline-none transition-colors focus:border-primary-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                      Phone
                    </label>
                    <input
                      required
                      maxLength={20}
                      type="tel"
                      className="w-full border-b border-primary-foreground/20 bg-transparent py-2 outline-none transition-colors focus:border-primary-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                    Reason for Visit
                  </label>
                  <select className="w-full appearance-none border-b border-primary-foreground/20 bg-transparent py-2 outline-none transition-colors focus:border-primary-foreground">
                    <option className="bg-primary">General Checkup</option>
                    <option className="bg-primary">Follow-up</option>
                    <option className="bg-primary">Specific Treatment</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-primary-foreground py-4 font-bold text-primary transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  Confirm Request
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-10 md:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/40">
            © 2026 Gawas Clinic Belagavi · Trusted Medical Care
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
            ★ 5.0 Google Rating
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
