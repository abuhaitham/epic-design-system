const { Input: BkInput, Select: BkSelect, Textarea: BkTextarea, Checkbox: BkCheck, Button: BkButton, WhatsAppButton: BkWA, GlowSurface: BkGlow, Reveal: BkReveal, Icon: BkIcon, ProfileCard: BkProfile } = window.EPICDesignSystem_70c10b;

function BookScreen({ t }) {
  const b = t.book;
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('Enter a valid email address'); return; }
    setErr(''); setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <main>
      <BkGlow variant="glow-stone" style={{ paddingTop: 'calc(var(--header-h) + clamp(48px,7vw,96px))', paddingBottom: 'var(--section-y)' }}>
        <div className="epic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>
          <BkReveal style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--epic-midnight-navy)' }}>
            <span className="epic-eyebrow">{b.eyebrow}</span>
            <h1 className="epic-h1">{b.title}</h1>
            <p className="epic-lead" style={{ color: 'inherit', opacity: .85, maxWidth: 480 }}>{b.lead}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {b.points.map((p) => <li key={p} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 16 }}><BkIcon name="check" size={18} style={{ color: 'var(--accent)' }} />{p}</li>)}
            </ul>
            <div style={{ marginTop: 16 }}><BkProfile ctaLabel={null} bannerVariant="fluted-dark" /></div>
          </BkReveal>
          <BkReveal delay={120} style={{ background: '#fff', borderRadius: 'var(--radius-2xl)', padding: 'clamp(28px,4vw,48px)', boxShadow: 'var(--shadow-lg)' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minHeight: 420, justifyContent: 'center' }}>
                <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'grid', placeItems: 'center' }}><BkIcon name="check" size={28} strokeWidth={2.25} /></span>
                <h2 className="epic-h3" style={{ color: '#000' }}>{b.done}</h2>
                <p style={{ color: 'var(--text-muted)' }}>{b.doneSub}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}><BkWA label={t.wa} /><BkButton variant="outline" onClick={() => setSent(false)}>{b.again}</BkButton></div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 18 }}>
                <BkInput label={b.name} name="name" required style={{}} />
                <BkInput label={b.phone} name="phone" type="tel" dir="ltr" placeholder="+966 5x xxx xxxx" />
                <div style={{ gridColumn: '1/-1' }}><BkInput label={b.email} name="email" type="email" dir="ltr" error={err || undefined} /></div>
                <div style={{ gridColumn: '1/-1' }}><BkSelect label={b.type} placeholder={b.typePh} options={b.types} /></div>
                <fieldset style={{ gridColumn: '1/-1', border: 0, padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <legend className="epic-field__label" style={{ marginBottom: 12 }}>{b.stage}</legend>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>{b.stages.map((s, i) => <BkCheck key={s} type="radio" name="stage" label={s} defaultChecked={i === 0} />)}</div>
                </fieldset>
                <div style={{ gridColumn: '1/-1' }}><BkTextarea label={b.msg} hint={b.msgHint} rows={3} /></div>
                <div style={{ gridColumn: '1/-1' }}><BkCheck label={b.consent} defaultChecked /></div>
                <div style={{ gridColumn: '1/-1' }}><BkButton type="submit" size="lg" block arrow>{b.submit}</BkButton></div>
              </form>
            )}
          </BkReveal>
        </div>
      </BkGlow>
    </main>
  );
}
window.BookScreen = BookScreen;
