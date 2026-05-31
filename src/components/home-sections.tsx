"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/motion/blur-text";
import { FadeContent } from "@/components/motion/fade-content";
import {
  beginnerSteps,
  brand,
  caseStudyGroups,
  creatorLogos,
  existingSteps,
  faqs,
  heroCards,
  plans,
  processIcons,
  services,
  stats,
  testimonials,
  workRowOne,
  workRowTwo,
} from "@/lib/site-data";

const accentChip =
  "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/86 backdrop-blur";

function SectionHeading({
  kicker,
  title,
  accent,
  description,
  center = false,
}: {
  kicker: string;
  title: string;
  accent?: string;
  description: string;
  center?: boolean;
}) {
  return (
    <FadeContent blur className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111315] sm:text-4xl">
        {title}
        {accent ? <span className="text-[#FF2E2E]"> {accent}</span> : null}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
    </FadeContent>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-12 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {heroCards.map((card, index) => {
          const positions = [
            "left-[8%] top-[24%]",
            "right-[9%] top-[22%]",
            "left-[13%] bottom-[18%]",
            "right-[13%] bottom-[18%]",
          ];
          return (
            <div
              key={card.title}
              className={`float-outer absolute ${positions[index]}`}
              style={{ "--depth": 0.7 + index * 0.12 } as React.CSSProperties}
            >
              <div className="float-inner" style={{ "--t": `${9 + index}s`, "--d": `${index * -1.4}s` } as React.CSSProperties}>
                <FadeContent delay={0.2 + index * 0.08} blur>
                  <div className="glass-panel max-w-[15rem] rounded-lg p-4 text-white">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/14 bg-white/10 text-[#24D17E]">
                      <card.Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold">{card.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/68">{card.description}</p>
                  </div>
                </FadeContent>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl items-center">
        <div className="mx-auto max-w-4xl text-center text-white">
          <FadeContent blur>
            <div className={accentChip}>
              <span className="h-2 w-2 rounded-full bg-[#24D17E]" />
              Trusted by 100+ YouTubers
            </div>
          </FadeContent>

          <h1 className="mx-auto mt-6 max-w-full text-3xl font-black leading-[1.05] tracking-tight min-[420px]:text-4xl sm:text-5xl lg:text-7xl">
            <BlurText text="Scale Your" as="span" animateBy="words" className="justify-center text-[#F7FAF8]" />
            <BlurText
              text="YouTube Channel"
              as="span"
              animateBy="words"
              delay={85}
              className="mt-1 justify-center text-[#FF2E2E]"
            />
          </h1>

          <FadeContent delay={0.25} blur>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              Professional video editing, automation, and growth services that help creators focus on what matters most - creating amazing content.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="w-full rounded-full bg-[#FF2E2E] px-6 py-6 text-base font-bold text-white shadow-xl shadow-[#FF2E2E]/20 transition hover:-translate-y-0.5 hover:bg-[#e92828] sm:w-auto"
              >
                <Link href={brand.phoneHref}>
                  Start now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/18 bg-white/10 px-6 py-6 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
              >
                <Link href={brand.workUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4" />
                  See Our Work
                </Link>
              </Button>
            </div>
          </FadeContent>

          <FadeContent delay={0.38} blur>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 rounded-lg border border-white/12 bg-white/[0.08] p-3 backdrop-blur-md sm:gap-4 sm:p-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md bg-white/[0.08] px-3 py-4">
                  <div className="text-2xl font-black text-[#24D17E] sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold text-white/62">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}

export function TrustedByStrip() {
  const logos = [...creatorLogos, ...creatorLogos];

  return (
    <section className="overflow-hidden border-y border-white/8 bg-[#111315]/70 py-12 backdrop-blur">
      <FadeContent blur className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/68">Trusted by 100+ YouTubers</p>
      </FadeContent>
      <div className="pause-marquee mt-8 flex overflow-hidden">
        <div className="marquee-row flex min-w-max gap-5 pr-5 [--marquee-duration:34s]">
          {logos.map((logo, index) => (
            <div key={`${logo.src}-${index}`} className="relative h-24 w-36 shrink-0 overflow-hidden rounded-lg border border-white/12 bg-white/8 transition hover:-translate-y-1 hover:border-[#24D17E]/50">
              <Image src={logo.src} alt={logo.alt} fill className="object-cover" sizes="144px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="relative bg-[#F7FAF8] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Services"
          title="YouTube Automation Services:"
          accent="Step-by-Step"
          description="Complete end-to-end YouTube automation solutions. From niche research to growth tracking - we handle everything."
          center
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeContent key={service.title} delay={index * 0.04}>
              <article className="premium-card group h-full rounded-lg p-5">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#111315] text-[#24D17E] ring-1 ring-black/10 transition group-hover:scale-105">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-[#111315]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-[#24D17E]/12 px-3 py-1 text-[11px] font-bold text-[#16653f] ring-1 ring-[#24D17E]/20">
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeImageRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const duplicated = [...images, ...images];
  return (
    <div className="pause-marquee flex overflow-hidden py-2">
      <div className={`marquee-row flex min-w-max gap-5 pr-5 ${reverse ? "reverse" : ""}`}>
        {duplicated.map((src, index) => (
          <Link key={`${src}-${index}`} href={brand.workUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative h-48 w-80 shrink-0 overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-xl transition hover:-translate-y-1 hover:border-[#34C7F3]/60">
              <Image src={src} alt={`Work sample ${index + 1}`} fill className="object-cover" sizes="320px" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function WorkGallery() {
  return (
    <section id="work" className="relative overflow-hidden px-4 py-20 text-white sm:py-24">
      <FadeContent blur className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#24D17E]">Portfolio</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          Some of Our <span className="text-[#FF2E2E]">Work!!</span>
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/70">
          Take a look at some of our premium quality thumbnail designs and videos we&apos;ve made for our clients!
        </p>
      </FadeContent>
      <div className="mt-12 space-y-4">
        <MarqueeImageRow images={workRowOne} />
        <MarqueeImageRow images={workRowTwo} reverse />
      </div>
    </section>
  );
}

export function CaseStudies() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = useMemo(
    () =>
      caseStudyGroups.flatMap((group) =>
        group.images.map((image, index) => ({
          image,
          label: `${group.channel} thumbnail ${index + 1}`,
        }))
      ),
    []
  );

  return (
    <section id="case-studies" className="relative bg-[#F7FAF8] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Results"
          title="Real Results,"
          accent="Real Growth"
          description="See how we've helped creators transform their channels."
          center
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {images.map((item, index) => (
            <FadeContent key={item.image} delay={Math.min(index * 0.015, 0.25)}>
              <button
                type="button"
                className="premium-card relative aspect-square w-full overflow-hidden rounded-lg p-0"
                onClick={() => setSelectedImage(item.image)}
              >
                <Image src={item.image} alt={item.label} fill className="object-cover transition duration-300 hover:scale-105" sizes="(max-width: 768px) 45vw, 180px" />
              </button>
            </FadeContent>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/84 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage} alt="Full size case-study image" width={1000} height={720} className="max-h-[84vh] w-auto rounded-lg object-contain" />
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export function HowItWorks() {
  const [showBeginners, setShowBeginners] = useState(true);
  const activeSteps = showBeginners ? beginnerSteps : existingSteps;
  const Icon = showBeginners ? processIcons.beginner : processIcons.existing;

  return (
    <section id="process" className="relative bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Process"
          title="How It"
          accent="Works"
          description="A simple and smooth process to scale your YouTube automation channel."
          center
        />
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-bold ${showBeginners ? "text-[#111315]" : "text-slate-400"}`}>Beginners</span>
          <button
            type="button"
            aria-label="Toggle process type"
            onClick={() => setShowBeginners((value) => !value)}
            className="relative h-8 w-16 rounded-full bg-[#111315] p-1 ring-1 ring-black/10"
          >
            <span className={`block h-6 w-6 rounded-full bg-[#24D17E] transition ${showBeginners ? "translate-x-0" : "translate-x-8"}`} />
          </button>
          <span className={`text-sm font-bold ${!showBeginners ? "text-[#111315]" : "text-slate-400"}`}>Existing Channels</span>
        </div>
        <FadeContent blur className="mx-auto mt-10 max-w-3xl text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#FF2E2E] text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-2xl font-black text-[#111315]">
            {showBeginners ? "For Beginners (Starting From Scratch)" : "For Existing Channels"}
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {showBeginners
              ? "Perfect for creators who want to start their YouTube journey with professional help"
              : "Optimize and scale your current YouTube channel with our proven automation system"}
          </p>
        </FadeContent>
        <div className="relative mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {activeSteps.map((step, index) => (
            <FadeContent key={`${step.number}-${step.title}`} delay={index * 0.05}>
              <article className="premium-card h-full rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-[#FF2E2E]">{step.number}</span>
                  <div>
                    <h4 className="text-lg font-black text-[#111315]">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              </article>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#F7FAF8] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Pricing"
          title="Professional"
          accent="Video Packages"
          description="Choose the package that fits your content needs. All packages include high-quality production and unlimited revisions."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <FadeContent key={plan.name} delay={index * 0.06}>
              <article className={`premium-card relative flex h-full flex-col rounded-lg p-5 ${plan.popular ? "ring-2 ring-[#FF2E2E]/35" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FF2E2E] px-4 py-2 text-xs font-black text-white shadow-lg">
                    <Sparkles className="mr-1 inline h-3.5 w-3.5" />
                    Most Popular
                  </div>
                )}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#24D17E] px-4 py-2 text-xs font-black text-[#111315] shadow-lg">
                    <Check className="mr-1 inline h-3.5 w-3.5" />
                    Recommended
                  </div>
                )}
                <div className="pt-3">
                  <h3 className="text-xl font-black text-[#111315]">{plan.name}</h3>
                  <p className="mt-2 min-h-10 text-sm text-slate-600">{plan.description}</p>
                </div>
                <div className="mt-6">
                  <span className="text-lg font-bold text-slate-400 line-through">${plan.originalPrice}</span>
                  <span className="ml-3 text-4xl font-black text-[#16653f]">${plan.discountedPrice}</span>
                  <p className="mt-2 text-xs font-bold text-[#16653f]">Limited Time - More Than 10% Discount Included</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF2E2E]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full rounded-full bg-[#111315] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF2E2E]">
                  <Link
                    href={`/cart?plan=${encodeURIComponent(plan.name)}&price=${plan.discountedPrice}&description=${encodeURIComponent(
                      plan.description
                    )}&features=${encodeURIComponent(JSON.stringify(plan.features))}`}
                  >
                    Get Started
                  </Link>
                </Button>
              </article>
            </FadeContent>
          ))}
        </div>
        <FadeContent blur className="mt-12 text-center">
          <p className="mb-4 text-base text-slate-600">Need a custom plan? Let&apos;s talk about your specific requirements.</p>
          <Button asChild variant="outline" className="rounded-full border-[#111315]/15 bg-white px-6 font-bold text-[#111315] hover:bg-[#111315] hover:text-white">
            <Link href={brand.emailHref}>
              Contact Sales
            </Link>
          </Button>
        </FadeContent>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="relative px-4 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeContent blur className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#24D17E]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            What <span className="text-[#FF2E2E]">Creators Say</span>
          </h2>
          <p className="mt-3 text-base text-white/70">Don&apos;t just take our word for it. Here&apos;s what our clients have to say.</p>
        </FadeContent>
        <FadeContent blur className="mt-12">
          <div className="glass-panel relative overflow-hidden rounded-lg p-6 sm:p-8">
            <Quote className="absolute right-6 top-6 h-14 w-14 text-white/10" />
            <div className="relative">
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-[#24D17E] text-[#24D17E]" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-white/88 sm:text-xl">{active.content}</blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FF2E2E] text-lg font-black text-white">{active.avatar}</div>
                <div>
                  <div className="font-bold text-white">{active.name}</div>
                  <div className="text-sm text-white/60">
                    {active.role} • {active.channel}
                  </div>
                  <div className="text-sm font-bold text-[#24D17E]">{active.subscribers} Subscribers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/16 bg-white/8 text-white hover:bg-white/14"
              aria-label="Previous testimonial"
              onClick={() => setActiveIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition ${activeIndex === index ? "w-8 bg-[#FF2E2E]" : "w-2 bg-white/35"}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/16 bg-white/8 text-white hover:bg-white/14"
              aria-label="Next testimonial"
              onClick={() => setActiveIndex((value) => (value + 1) % testimonials.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}

export function FAQAccordion() {
  const [openItems, setOpenItems] = useState([0, 1]);

  const toggle = (index: number) => {
    setOpenItems((items) => (items.includes(index) ? items.filter((item) => item !== index) : [...items, index]));
  };

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="FAQ"
          title="Frequently Asked"
          accent="Questions"
          description="Everything you need to know before starting your YouTube automation workflow."
          center
        />
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openItems.includes(index);
            return (
              <FadeContent key={faq.question} delay={index * 0.05}>
                <div className="premium-card rounded-lg">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base font-black leading-snug text-[#111315]">{faq.question}</span>
                    {open ? <X className="h-5 w-5 shrink-0 text-[#FF2E2E]" /> : <ChevronDown className="h-5 w-5 shrink-0 text-[#FF2E2E]" />}
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-200 ease-in-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>
        <FadeContent blur className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button asChild className="rounded-full bg-[#FF2E2E] py-6 font-bold text-white hover:bg-[#e92828]">
            <Link href={brand.emailHref}>
              Have a different question?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#111315]/15 bg-white py-6 font-bold text-[#111315] hover:bg-[#111315] hover:text-white">
            <Link href="/cart?plan=Custom%20Package&price=0&description=Let's%20discuss%20your%20specific%20video%20production%20needs&features=%5B%5D">
              Get Started
            </Link>
          </Button>
        </FadeContent>
      </div>
    </section>
  );
}

export function Footer() {
  const footerLinks = [
    { title: "Services", links: ["Video Editing", "Automation", "Voiceover", "Scripts", "Thumbnails", "SEO"] },
    { title: "Company", links: ["About", "Case Studies", "Our Work", "Pricing"] },
    { title: "Resources", links: ["Blog", "FAQ", "Contact", "Privacy Policy"] },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#111315] px-4 pb-24 pt-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-16 w-52 overflow-hidden rounded-lg p-2">
                <Image src={brand.logo} alt="Bilancy Logo" fill className="object-contain p-2" sizes="208px" />
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Professional YouTube services to scale your channel and maximize growth.
            </p>
            <Link
              href={brand.emailHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/78 transition hover:bg-white/12 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#24D17E]" />
              {brand.email}
            </Link>
            <Link
              href={brand.phoneHref}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/78 transition hover:bg-white/12 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#24D17E]" />
              {brand.phone}
            </Link>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-black">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => {
                  const href = link === "Case Studies" ? "#case-studies" : link === "Our Work" ? "#work" : link === "Pricing" ? "#pricing" : link === "FAQ" ? "#faq" : "#services";
                  return (
                    <li key={link}>
                      <Link href={href} className="text-sm text-white/62 transition hover:text-white">
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 py-6 text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 {brand.name}. All rights reserved.</p>
          <p>YouTube automation, editing, thumbnails, scripts, SEO.</p>
        </div>
      </div>
    </footer>
  );
}
