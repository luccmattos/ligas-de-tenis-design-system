/* Onboarding & Registration — UI kit screens.
   Player-facing surface: hero + multi-step "quero me inscrever" form.
   Composes DS primitives from the bundle. */
const { Button, Input, Select, OptionCard, Stepper, Badge, Card } = window.LigasDeTNisDesignSystem_6dc710;

const STEPS = ['Dados', 'Interesse', 'Disponibilidade', 'Confirmar'];

// Signature court-grid texture — tileable two-tier line rhythm (fine grid + bold "court boxes").
function CourtGrid() {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      backgroundImage: [
        'linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)',
        'linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)',
        'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)',
        'linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
      ].join(','),
      backgroundSize: '120px 120px, 120px 120px, 30px 30px, 30px 30px',
    }} />
  );
}

function Hero({ onStart }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-navy)', color: '#fff', padding: '64px 8%' }}>
      <CourtGrid />
      <div style={{ position: 'absolute', right: -120, top: -120, width: 360, height: 360, borderRadius: '50%', background: 'rgba(41,170,225,0.22)', filter: 'blur(80px)' }} aria-hidden />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }}>
        <div>
          <Badge tone="energy" style={{ background: 'var(--color-yellow)', color: 'var(--color-navy)' }}>Inscrições abertas · 1º semestre</Badge>
          <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 6vw, 88px)', letterSpacing: '0.02em', lineHeight: 1.0, paddingBottom: '0.12em' }}>
            JOGUE UM CIRCUITO<br/>DE VERDADE
          </h1>
          <p style={{ margin: '32px 0 0', maxWidth: 520, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
            Ranking de desafios e torneios no formato ATP, para tenistas amadores de Alphaville e região. Comunidade, competição e networking de verdade.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="success" size="lg" onClick={onStart}>Quero me inscrever</Button>
            <Button variant="outline" size="lg" style={{ borderColor: 'rgba(255,255,255,0.4)', background: 'transparent', color: '#fff' }}>Ver como funciona</Button>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 44 }}>
            {[['10+', 'anos de liga'], ['1.000+', 'jogadores'], ['6', 'etapas por torneio']].map(([n, l]) => (
              <div key={l}>
                <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--color-yellow)', lineHeight: 1 }}>{n}</p>
                <p style={{ margin: '4px 0 0', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="../../assets/logos/logo-official-lat-blue-ligas-de-tenis.png" alt="Liga Alphaville de Tênis" style={{ width: '100%', maxWidth: 320, filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }} />
        </div>
      </div>
    </section>
  );
}

function FormShell({ children, step }) {
  return (
    <section style={{ background: 'var(--color-off-white)', padding: '64px 5%' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <Stepper steps={STEPS} current={step} />
        </div>
        <Card>
          {children}
        </Card>
      </div>
    </section>
  );
}

function StepHeading({ kicker, title }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', color: 'var(--color-blue)' }}>{kicker}</p>
      <h2 style={{ margin: '6px 0 0', fontFamily: 'var(--font-display)', fontSize: 36, letterSpacing: '0.02em', color: 'var(--color-navy)', lineHeight: 1 }}>{title}</h2>
    </div>
  );
}

function RegistrationFlow() {
  const [step, setStep] = React.useState(0);
  const [interest, setInterest] = React.useState('ambos');
  const [days, setDays] = React.useState(['ter', 'qui']);
  const toggleDay = (d) => setDays((cur) => cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d]);

  const back = () => setStep((s) => Math.max(0, s - 1));
  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));

  return (
    <FormShell step={step}>
      {step === 0 && (
        <div>
          <StepHeading kicker="Passo 1 de 4" title="SEUS DADOS" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input label="Nome completo" placeholder="Como você assina" />
            <Input label="E-mail" type="email" placeholder="seu@email.com" />
            <Input label="WhatsApp" placeholder="(11) 90000-0000" hint="Usamos para combinar suas partidas." />
            <Select label="Onde você joga" placeholder="Selecione o condomínio / clube" options={['Alphaville', 'Tamboré', 'Pinheiros', 'Morumbi', 'Outro']} />
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <StepHeading kicker="Passo 2 de 4" title="O QUE VOCÊ QUER" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            <OptionCard label="Ranking" description="Desafios o semestre todo" selected={interest === 'ranking'} onSelect={() => setInterest('ranking')} />
            <OptionCard label="Torneio" description="Etapas no formato ATP" selected={interest === 'torneio'} onSelect={() => setInterest('torneio')} />
            <OptionCard label="Os dois" description="Ranking + torneio" selected={interest === 'ambos'} onSelect={() => setInterest('ambos')} />
          </div>
          <div style={{ marginTop: 16 }}>
            <Select label="Sua categoria" placeholder="Não sei — me ajudem" options={['A · avançado', 'B · intermediário', 'C · iniciante']} />
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <StepHeading kicker="Passo 3 de 4" title="DISPONIBILIDADE" />
          <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--color-gray-4)' }}>Quais dias você costuma jogar? Pode marcar vários.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {[['seg', 'Seg'], ['ter', 'Ter'], ['qua', 'Qua'], ['qui', 'Qui'], ['sex', 'Sex'], ['sab', 'Sáb'], ['dom', 'Dom']].map(([k, l]) => (
              <OptionCard key={k} label={l} selected={days.includes(k)} onSelect={() => toggleDay(k)} />
            ))}
          </div>
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--color-yellow-muted)' }}>
            <span style={{ fontSize: 20 }} aria-hidden>🎾</span>
            <span style={{ fontSize: 13, color: 'var(--color-navy)', fontWeight: 600 }}>Tem quadra em casa? Conte pra gente — facilita o match!</span>
          </div>
        </div>
      )}
      {step === 3 && (
        <div style={{ textAlign: 'center', padding: '12px 0' }}>
          <div style={{ width: 64, height: 64, margin: '0 auto', borderRadius: '50%', background: 'var(--gradient-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 30, boxShadow: 'var(--shadow-green)' }}>✓</div>
          <h2 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontSize: 40, letterSpacing: '0.02em', color: 'var(--color-navy)' }}>BEM-VINDO À LIGA</h2>
          <p style={{ margin: '10px auto 0', maxWidth: 380, fontSize: 15, lineHeight: 1.6, color: 'var(--color-gray-4)' }}>
            Recebemos sua inscrição. Em instantes a Maria Esther vai te chamar no WhatsApp com os próximos passos e o pagamento.
          </p>
          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 8 }}>
            <Badge tone="success">Inscrição enviada</Badge>
            <Badge tone="primary">{interest === 'ambos' ? 'Ranking + Torneio' : interest === 'ranking' ? 'Ranking' : 'Torneio'}</Badge>
          </div>
        </div>
      )}

      {step < 3 && (
        <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'space-between' }}>
          <Button variant="secondary" onClick={back} disabled={step === 0}>Voltar</Button>
          {step < 2
            ? <Button variant="primary" onClick={next}>Continuar</Button>
            : <Button variant="success" onClick={next}>Finalizar inscrição</Button>}
        </div>
      )}
      {step === 3 && (
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
          <Button variant="outline" onClick={() => setStep(0)}>Fazer outra inscrição</Button>
        </div>
      )}
    </FormShell>
  );
}

function OnboardingApp() {
  const formRef = React.useRef(null);
  const scrollToForm = () => {
    const el = formRef.current;
    if (el) window.scrollTo({ top: el.offsetTop - 16, behavior: 'smooth' });
  };
  return (
    <div>
      <Hero onStart={scrollToForm} />
      <div ref={formRef}>
        <RegistrationFlow />
      </div>
    </div>
  );
}

window.OnboardingApp = OnboardingApp;
