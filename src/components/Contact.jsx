import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { profile } from '@/data/portfolioData';
import Reveal from './Reveal';

const initialForm = { name: '', email: '', subject: '', message: '' };

function ContactSocial({ href, children, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-night-line text-night-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-on-brand"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [copied, setCopied] = useState(false);

  const change = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject.trim());
    const message = encodeURIComponent(
      `Hello Sandeepa,\n\n${form.message.trim()}\n\nFrom: ${form.name.trim()}\nReply email: ${form.email.trim()}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="wrap relative">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <div>
            <p className="eyebrow">06 / GET IN TOUCH</p>
            <h2 className="heading mt-5">Let's make it <br /><span className="hl">happen together.</span></h2>
          </div>
          <p className="max-w-[340px] text-sm leading-7 text-muted">A new opportunity, an interesting project, or a simple hello — I'd love to hear from you.</p>
        </Reveal>

        <div className="grid overflow-hidden rounded-[32px] border border-line shadow-float lg:grid-cols-[.9fr_1.1fr] lg:rounded-[38px]">
          <Reveal className="relative flex flex-col justify-between overflow-hidden bg-night px-7 py-10 text-night-foreground sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="brand-glow pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-[150px] -right-[150px] h-[400px] w-[400px] animate-spin-slower rounded-full border border-dashed border-brand/30" aria-hidden="true" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-night-line bg-night-raised px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-night-foreground">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-brand" />
                </span>
                Available for opportunities
              </div>
              <h3 className="mt-10 max-w-[460px] font-display text-[clamp(2.3rem,4vw,3.9rem)] font-extrabold leading-[1.04] tracking-[-.04em]">
                Great things <br />start with a <span className="text-brand">conversation.</span>
              </h3>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.85] text-night-muted">
                Open to software engineering internships, full-stack opportunities and meaningful collaborations.
              </p>
              <div className="my-9 h-px bg-gradient-to-r from-brand/60 via-night-line to-transparent" />
              <span className="font-mono text-[10px] tracking-[.16em] text-night-muted">DIRECT EMAIL</span>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a className="break-all font-display text-[clamp(1rem,1.5vw,1.35rem)] font-bold tracking-[-.02em] text-night-foreground underline decoration-brand/70 decoration-2 underline-offset-[7px] transition-colors hover:text-brand" href={`mailto:${profile.email}`}>{profile.email}</a>
                <button type="button" onClick={copyEmail} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-night-line text-brand transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-on-brand" title={copied ? 'Copied' : 'Copy email address'} aria-label="Copy email address">
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                </button>
              </div>
              <div aria-live="polite" className="mt-2 min-h-[20px] font-mono text-[11px] text-brand">{copied ? 'Email copied to clipboard' : ''}</div>
            </div>

            <div className="relative z-10 mt-12">
              <div className="flex items-center gap-2 text-[13px] text-night-muted"><MapPin size={16} className="text-brand" /> Sri Lanka · Remote-friendly</div>
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <ContactSocial href={profile.github} label="Open GitHub"><Github size={19} /></ContactSocial>
                <ContactSocial href={profile.linkedin} label="Open LinkedIn"><Linkedin size={19} /></ContactSocial>
                <a href={profile.resume} download className="btn-brand !min-h-12">My Resume <Download size={15} /></a>
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-night-line pt-5 font-mono text-[9.5px] uppercase tracking-[.14em] text-night-muted">
                <Sparkles size={14} className="text-brand" /> Let's build something brilliant
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative bg-surface px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="mb-9 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10.5px] font-medium uppercase tracking-[.18em] text-accent">YOUR MESSAGE</p>
                <h3 className="mt-3 font-display text-[clamp(1.65rem,2.8vw,2.4rem)] font-extrabold tracking-[-.035em] text-ink">Tell me about your idea.</h3>
                <p className="mt-2 max-w-[400px] text-sm leading-7 text-muted">Fill out the details below. Your email app will open with your message ready to send.</p>
              </div>
              <motion.span whileHover={{ rotate: 45 }} className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-on-brand sm:flex"><ArrowUpRight size={23} /></motion.span>
            </div>

            <form onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="contact-field-label">01 / YOUR NAME <span aria-hidden="true">*</span></span>
                  <input className="contact-input" name="name" autoComplete="name" placeholder="Your full name" value={form.name} onChange={change} required maxLength={80} />
                </label>
                <label className="block">
                  <span className="contact-field-label">02 / EMAIL ADDRESS <span aria-hidden="true">*</span></span>
                  <input className="contact-input" type="email" name="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={change} required maxLength={160} />
                </label>
              </div>

              <label className="block">
                <span className="contact-field-label">03 / SUBJECT <span aria-hidden="true">*</span></span>
                <input className="contact-input" name="subject" placeholder="Internship, collaboration, project..." value={form.subject} onChange={change} required maxLength={140} />
              </label>

              <label className="block">
                <span className="contact-field-label">04 / YOUR MESSAGE <span aria-hidden="true">*</span></span>
                <textarea className="contact-input min-h-[160px] resize-y" name="message" placeholder="Hi Sandeepa, I'd like to connect about..." value={form.message} onChange={change} required minLength={5} maxLength={3000} />
              </label>

              <button type="submit" className="btn-brand group w-full !py-4 font-display !text-[14px] sm:w-auto sm:!px-8">
                Open email draft <Send size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
              <p className="flex items-start gap-2 text-[11px] leading-6 text-muted"><Mail size={14} className="mt-1 shrink-0 text-accent" /> No server submission — your default email application handles sending. You can also email me directly.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
