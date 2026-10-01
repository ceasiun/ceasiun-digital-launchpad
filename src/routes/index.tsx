"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, Minus, Plus } from "lucide-react";
import { Layout } from "@/components/site";
import { services } from "@/lib/site-data";
import { useState } from "react";

const serviceAreas = [
  { title: "Website Development", detail: "Websites and commerce experiences built around how your business needs to work.", tags: ["Websites", "E-commerce", "Web apps"] },
  { title: "Custom Software", detail: "Internal tools and software that remove friction from the way your team operates.", tags: ["Portals", "Dashboards", "SaaS"] },
  { title: "Branding", detail: "A clear identity system that makes every customer touchpoint feel connected.", tags: ["Identity", "Strategy", "Design systems"] },
  { title: "Social & Digital Marketing", detail: "Search, content and campaigns connected to real business goals.", tags: ["SEO", "Content", "Paid growth"] },
  { title: "AI Automation", detail: "Practical workflows and AI systems that reduce repetitive work and improve response time.", tags: ["Workflows", "Agents", "Integrations"] },
  { title: "Cybersecurity", detail: "Security reviews and defensive improvements for your website, systems and data.", tags: ["Audits", "Hardening", "Monitoring"] },
  { title: "Managed Services", detail: "Reliable technical capability for teams that need ongoing support without another full-time hire.", tags: ["DevOps", "QA", "Support"] },
];

const faqs = [
  ["What kind of businesses do you work with?", "Ceasiun supports traditional, growing and international businesses that need a dependable digital partner—from their first launch to ongoing technical operations."],
  ["How do you decide what to recommend?", "Services are selected according to your business requirements, current situation and final goals. We do not add unnecessary services or force you into irrelevant solutions."],
  ["How do projects begin?", "Every project starts with a conversation about the objective, current situation and desired outcome. From there, we define scope, milestones and a clear next step."],
  ["How are payments structured?", "Projects require a 30% advance followed by milestone-based payments. Local and international payment methods are available."],
];

function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const service = serviceAreas[active];
  return (
    <div className="service-explorer">
      <div className="service-list" role="tablist" aria-label="Service areas">
        {serviceAreas.map((item, index) => (
          <button key={item.title} role="tab" aria-selected={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><ArrowUpRight aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="service-detail" role="tabpanel">
        <p className="eyebrow">{String(active + 1).padStart(2, "0")} / 07</p>
        <h3>{service.title}</h3>
        <p>{service.detail}</p>
        <ul>{service.tags.map((tag) => <li key={tag}><Check size={16} />{tag}</li>)}</ul>
        <Link className="text-link" href={services[active]?.slug ? `/services/${services[active].slug}` : "/services"}>Explore capability <ArrowUpRight size={17} /></Link>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{faqs.map(([question, answer], index) => (
    <div className={`faq-item ${open === index ? "is-open" : ""}`} key={question}>
      <button aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span>{open === index ? <Minus size={20} /> : <Plus size={20} />}</button>
      {open === index && <p>{answer}</p>}
    </div>
  ))}</div>;
}

export default function HomePage() {
  return <Layout>
    <a className="skip-link" href="#main">Skip to content</a>
    <div id="top" className="new-home">
      <section className="new-hero" aria-labelledby="hero-title">
        <div className="hero-grid-mark" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="shell new-hero-inner">
          <p className="eyebrow">Digital growth partner / Pakistan + worldwide</p>
          <h1 id="hero-title">Take your business online.<br /><em>Build it to grow.</em></h1>
          <p className="hero-lede">Websites, software and automation that fit your business—chosen around what you actually need, not what a service menu says you should buy.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/start-project">Start a project <ArrowUpRight size={18} /></Link><a className="text-link" href="#approach">See how we work <ArrowUpRight size={17} /></a></div>
          <div className="hero-note"><span className="status-dot" /> Clear scope. Milestone delivery. Ongoing support when it helps.</div>
        </div>
        <div className="hero-index" aria-hidden="true">01 <span /> 07</div>
      </section>

      <section id="trust" className="trust-strip" aria-label="Ceasiun in numbers"><div className="shell trust-grid">{[["200+", "Campaigns launched"], ["50+", "Happy clients"], ["5+", "Years experience"], ["4.9", "Client rating"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

      <main id="main">
        <section id="problem" className="new-section problem-section"><div className="shell problem-grid"><div><p className="eyebrow">The gap</p><h2>Digital should make business clearer, not more complicated.</h2></div><div className="problem-copy"><p>Many businesses have a website that does not bring in the right opportunities, tools that do not talk to each other, or a growing list of tasks no one has time to own.</p><p>The answer is not always more software, more channels or more activity. It starts with understanding what is getting in the way.</p><Link className="text-link" href="/start-project">Talk through your situation <ArrowUpRight size={17} /></Link></div></div></section>

        <section id="approach" className="new-section approach-section"><div className="shell"><div className="section-intro"><p className="eyebrow">A considered approach</p><h2>Only what your business actually needs.</h2><p>We understand the business, the current situation and the final goal first. Then we recommend the right services and technology—without adding unnecessary pieces.</p></div><div className="approach-steps"><div><span>01</span><h3>Understand</h3><p>Your business, context and constraints.</p></div><div><span>02</span><h3>Shape</h3><p>A clear scope built around the outcome.</p></div><div><span>03</span><h3>Deliver</h3><p>Milestones, review and dependable support.</p></div></div></div></section>

        <section id="services" className="new-section services-section"><div className="shell"><div className="section-intro compact"><p className="eyebrow">Capabilities</p><h2>One partner across the digital work.</h2><p>Explore the areas we can bring together when the requirements call for it.</p></div><ServiceExplorer /></div></section>

        <section id="why" className="new-section why-section"><div className="shell why-grid"><div><p className="eyebrow">Why Ceasiun</p><h2>Technical depth, explained plainly.</h2></div><div className="why-list"><div><span>01</span><h3>Requirements before recommendations</h3><p>We start with the problem to solve, not a package to sell.</p></div><div><span>02</span><h3>Connected thinking</h3><p>Brand, software, marketing and infrastructure can work as one system.</p></div><div><span>03</span><h3>Clarity at every milestone</h3><p>You know what is being delivered, reviewed and decided next.</p></div></div></div></section>

        <section id="process" className="new-section process-section"><div className="shell"><div className="section-intro"><p className="eyebrow">How it works</p><h2>A simple path from question to delivery.</h2></div><div className="process-line">{["Discussion", "Discovery", "Planning", "Execute", "Review", "Delivery", "Support"].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}</div></div></section>

        <section id="work" className="new-section work-section"><div className="shell work-placeholder"><div><p className="eyebrow">Selected work</p><h2>Good work should be easy to verify.</h2></div><p>Client stories and project results will appear here as approved case studies are ready to share. We would rather show an honest blank space than make a claim without context.</p></div></section>

        <section id="faq" className="new-section faq-section"><div className="shell faq-grid"><div className="section-intro compact"><p className="eyebrow">Questions, answered</p><h2>Before we begin.</h2><p>A few practical details about working together.</p></div><Faq /></div></section>

        <section id="start" className="new-cta"><div className="shell"><p className="eyebrow">Ready when you are</p><h2>Bring the situation.<br /><em>We will help shape the next step.</em></h2><Link className="button button-primary" href="/start-project">Start a project <ArrowUpRight size={18} /></Link></div></section>
      </main>
    </div>
  </Layout>;
}
