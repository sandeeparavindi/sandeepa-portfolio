import { CalendarCheck, CarFront, CheckCircle2, ChevronDown, CircleUserRound, CloudSun, Leaf, Search, ShieldCheck, Sparkles } from 'lucide-react';

function MockHeader({ name, children }) {
  return <div className="flex items-center justify-between border-b border-night-line px-4 py-3">
    <div className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-night-muted" /><i className="h-1.5 w-1.5 rounded-full bg-night-muted/60" /><i className="h-1.5 w-1.5 rounded-full bg-brand" /><span className="ml-2 text-[9px] font-bold tracking-wide text-night-foreground/80">{name}</span></div>
    {children || <span className="text-[8px] font-medium text-night-muted">Workspace</span>}
  </div>;
}

function Recruitment() {
  return <div className="project-visual flex items-center justify-center bg-night p-5 sm:p-8">
    <div aria-hidden className="absolute -left-16 bottom-[-160px] h-80 w-80 rounded-full border-[55px] border-brand/15" />
    <div aria-hidden className="brand-glow absolute -right-20 -top-24 h-72 w-72 rounded-full" />
    <div className="mock relative z-10 w-full max-w-[475px] -rotate-[3deg] overflow-hidden rounded-[16px] border border-night-line bg-night-raised text-night-foreground transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03]">
      <MockHeader name="talent / dashboard" />
      <div className="flex min-h-[190px]">
        <div className="hidden w-[26%] space-y-4 border-r border-night-line p-4 sm:block"><div className="flex items-center gap-1.5 text-[9px] font-bold text-brand"><Sparkles size={11} /> hireflow</div>{['Overview', 'Candidates', 'Applications', 'Analytics'].map((x, i) => <div key={x} className={`rounded-md px-2 py-1.5 text-[8px] ${i === 1 ? 'bg-brand text-on-brand' : 'text-night-muted'}`}>{x}</div>)}</div>
        <div className="min-w-0 flex-1 p-4 sm:p-5"><div className="flex items-start justify-between"><div><div className="text-[8px] text-night-muted">Recruitment overview</div><div className="mt-1 text-[13px] font-bold">Candidate pipeline</div></div><span className="rounded-full bg-brand/15 px-2 py-1 text-[8px] text-brand">AI enabled</span></div>
          <div className="mt-4 grid grid-cols-3 gap-2">{['Applicants', 'Review', 'Shortlist'].map((x, i) => <div key={x} className="rounded-lg border border-night-line bg-night p-2"><div className="text-[7px] text-night-muted">{x}</div><div className="mt-1 text-[12px] font-bold">{['128', '32', '18'][i]}</div></div>)}</div>
          <div className="mt-3 rounded-lg border border-night-line bg-night p-3"><div className="mb-3 flex justify-between text-[8px]"><span>Applications</span><span className="text-brand">This month</span></div><div className="flex h-14 items-end justify-between gap-1.5">{[25, 43, 37, 65, 48, 76, 60, 87, 70, 90, 65, 96].map((v, i) => <div key={i} className="min-w-0 flex-1 origin-bottom rounded-t-[2px] bg-brand transition-transform duration-700 group-hover:scale-y-110" style={{ height: `${v}%`, opacity: i < 8 ? .35 : .95, transitionDelay: `${i * 30}ms` }} />)}</div></div>
        </div>
      </div>
    </div>
    <div className="absolute right-3 top-5 z-20 rounded-xl bg-brand px-3 py-2 text-[9px] font-bold text-on-brand shadow-brand sm:right-5"><Sparkles size={13} className="mr-1 inline" /> AI integration</div>
    <span className="absolute bottom-3 left-5 z-20 font-mono text-[8px] uppercase tracking-widest text-night-muted">Illustrative interface</span>
  </div>;
}

function Crop() {
  return <div className="project-visual flex items-center justify-center bg-night-raised p-5 sm:p-8">
    <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-linear-gradient(28deg,transparent 0px,transparent 25px,var(--brand) 26px,var(--brand) 27px,transparent 28px,transparent 58px)' }} />
    <div aria-hidden className="brand-glow absolute -right-20 -top-24 h-64 w-64 rounded-full" />
    <div className="mock relative z-10 w-full max-w-[475px] rotate-[2deg] overflow-hidden rounded-[16px] border border-night-line bg-night-foreground text-night transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03]">
      <div className="flex items-center justify-between border-b border-night/10 px-4 py-3"><span className="flex items-center gap-1.5 text-[10px] font-extrabold"><Leaf size={12} /> fieldwise.</span><span className="flex items-center gap-1 text-[8px] opacity-60"><CloudSun size={12} /> Crop overview</span></div>
      <div className="grid grid-cols-[1.05fr_.95fr] gap-3 p-4"><div><p className="text-[8px] opacity-60">Field monitoring</p><p className="mt-1 text-[15px] font-bold">Your farm, in focus.</p><div className="mt-3 h-[112px] overflow-hidden rounded-xl bg-brand" style={{ backgroundImage: 'repeating-linear-gradient(120deg,transparent 0px,transparent 15px,oklch(0 0 0 / .18) 17px,oklch(0 0 0 / .18) 19px,transparent 21px,transparent 38px)' }}><div className="flex h-full items-center justify-center"><span className="rounded-full bg-night p-2 text-brand shadow"><Leaf size={17} /></span></div></div></div>
        <div className="flex flex-col gap-2"><div className="rounded-xl bg-brand/30 p-3"><div className="flex items-center justify-between text-[8px] opacity-70"><span>Crop records</span><Leaf size={12} /></div><p className="mt-2 text-[16px] font-extrabold">Managed</p><div className="mt-2 flex items-center gap-1 text-[8px]"><CheckCircle2 size={10} /> Synced data</div></div><div className="flex-1 rounded-xl border border-night/10 p-3"><span className="text-[8px] opacity-60">System modules</span><div className="mt-3 space-y-2">{['Fields', 'Crops', 'Staff'].map(x => <div key={x} className="flex justify-between text-[9px]"><span>{x}</span><CheckCircle2 size={11} /></div>)}</div></div></div></div>
    </div>
    <div className="absolute bottom-8 right-2 z-20 flex items-center gap-2 rounded-xl bg-brand px-3 py-2 text-[10px] font-bold text-on-brand shadow-brand sm:right-4"><ShieldCheck size={13} /> Secure APIs</div>
    <span className="absolute bottom-3 left-5 z-20 font-mono text-[8px] uppercase tracking-widest text-night-muted">Illustrative interface</span>
  </div>;
}

function Rental() {
  return <div className="project-visual flex items-center justify-center bg-brand p-5 sm:p-8">
    <div aria-hidden className="absolute -left-12 -top-28 h-80 w-80 rounded-full border-[50px] border-on-brand/10" />
    <div className="mock relative z-10 w-full max-w-[475px] -rotate-[2deg] overflow-hidden rounded-[16px] border border-night-line bg-night text-night-foreground transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03]">
      <div className="flex items-center justify-between border-b border-night-line px-4 py-3"><span className="flex items-center gap-1.5 font-display text-[11px] font-extrabold"><CarFront size={14} className="text-brand" /> driveloop.</span><div className="flex gap-3 text-[8px] text-night-muted"><span>Cars</span><span>Bookings</span><CircleUserRound size={12} /></div></div>
      <div className="px-4 pb-4 pt-3"><div className="flex items-center justify-between"><div><p className="text-[8px] text-night-muted">Explore the collection</p><p className="font-display text-sm font-bold tracking-tight">Find your next drive.</p></div><span className="flex gap-1 rounded-full border border-night-line px-2 py-1 text-[8px]"><Search size={10} /> Explore</span></div>
        <div className="mt-3 grid grid-cols-[1.45fr_.55fr] gap-2"><div className="relative flex min-h-[118px] flex-col justify-end overflow-hidden rounded-xl bg-night-raised px-3 pb-3"><svg viewBox="0 0 250 100" className="absolute left-1/2 top-2 w-[90%] -translate-x-1/2 transition-transform duration-700 group-hover:translate-x-[-46%]" aria-hidden="true"><path d="M27 67 Q38 64 49 47 L79 24 Q91 16 120 16 L172 19 Q190 20 204 43 L220 51 Q231 55 234 66 L235 76 L20 76 L20 70 Z" fill="var(--brand)" /><path d="M80 28 L119 24 L120 48 L61 48 Z M129 24 L171 27 Q184 28 195 47 L130 48 Z" fill="var(--night)" opacity=".75" /><path d="M33 62 L219 62" fill="none" stroke="var(--night)" strokeOpacity=".35" strokeWidth="2" /><circle cx="69" cy="77" r="16" fill="var(--night)" /><circle cx="69" cy="77" r="7" fill="var(--night-muted)" /><circle cx="187" cy="77" r="16" fill="var(--night)" /><circle cx="187" cy="77" r="7" fill="var(--night-muted)" /></svg><div className="relative mt-20 flex justify-between text-[8px] font-bold"><span>Featured vehicles</span><span className="text-brand">View fleet →</span></div></div><div className="flex flex-col gap-2"><div className="flex flex-1 flex-col justify-center rounded-xl bg-brand p-2.5 text-on-brand"><CalendarCheck size={15} /><span className="mt-2 text-[8px]">Bookings</span><span className="text-[10px] font-bold">Simplified</span></div><div className="rounded-xl border border-night-line p-2.5"><span className="flex items-center justify-between text-[8px]">Car listing <ChevronDown size={9} /></span></div></div></div>
      </div>
    </div>
    <div className="absolute right-3 top-6 z-20 rounded-xl bg-night px-3 py-2 text-[10px] font-bold text-brand shadow-float sm:right-5"><CarFront size={14} className="mr-1 inline" /> Full-stack booking</div>
    <span className="absolute bottom-3 left-5 z-20 font-mono text-[8px] uppercase tracking-widest text-on-brand/60">Illustrative interface</span>
  </div>;
}

export default function ProjectVisual({ kind }) {
  if (kind === 'recruitment') return <Recruitment />;
  if (kind === 'crop') return <Crop />;
  return <Rental />;
}
