"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site";

export default function StartProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  return <Layout>
    <main className="start-project-page">
      <div className="shell start-project-grid">
        <div className="start-project-intro"><Link className="text-link" href="/"><ArrowLeft size={17} /> Back home</Link><p className="eyebrow">Start a project</p><h1>Tell us what needs to work better.</h1><p>Share a little context and we will come back with the clearest next step—not a preselected package.</p><div className="start-project-aside"><span>01</span><p>We will understand the situation first, then shape a useful conversation around your goals.</p></div></div>
        <form className="project-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          {submitted ? <div className="form-success"><p className="eyebrow">Thank you</p><h2>Your inquiry is ready for a conversation.</h2><p>This preview form is connected and ready for your inquiry delivery destination.</p><Link className="button button-primary" href="/">Return home <ArrowUpRight size={18} /></Link></div> : <><label>Name<input name="name" required autoComplete="name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" /></label><label>What are you working on?<textarea name="message" required rows={5} placeholder="A website, internal tool, automation, or something else…" /></label><label>What would be useful next?<select name="next-step" defaultValue=""><option value="" disabled>Select one</option><option>Explore the right direction</option><option>Scope a defined project</option><option>Discuss ongoing support</option></select></label><p className="form-consent">By submitting, you agree to be contacted about your inquiry. No obligation to proceed.</p><button className="button button-primary" type="submit">Send inquiry <ArrowUpRight size={18} /></button></>}
        </form>
      </div>
    </main>
  </Layout>;
}
