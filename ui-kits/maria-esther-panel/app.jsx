/* Maria Esther Match Desk — UI kit screens.
   Recreates the operator panel (login → desk → player → recommendations).
   Composes the DS primitives from the bundle namespace. */
const { Button, Badge, Input, Select } = window.LigasDeTNisDesignSystem_6dc710;
const D = window.MED_DATA;

const HATCH = 'repeating-linear-gradient(-18deg, transparent, transparent 12px, rgba(255,255,255,0.06) 12px, rgba(255,255,255,0.06) 13px)';
const DESK_BG = {
  backgroundColor: '#e8edf5',
  backgroundImage:
    'radial-gradient(ellipse 80% 50% at 100% 0%, rgba(41,170,225,0.12), transparent),' +
    'linear-gradient(rgba(31,46,96,0.04) 1px, transparent 1px),' +
    'linear-gradient(90deg, rgba(31,46,96,0.04) 1px, transparent 1px)',
  backgroundSize: '100% 100%, 24px 24px, 24px 24px',
};

function SectionLabel({ children }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gray-4)', margin: 0 }}>
      {children}
    </p>
  );
}

/* ── Login ───────────────────────────────────────────────── */
function LoginScreen({ onSignIn }) {
  return (
    <div style={{ position: 'relative', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-navy)', padding: 24, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(-18deg, transparent, transparent 12px, #fff 12px, #fff 13px)' }} aria-hidden />
      <div style={{ position: 'absolute', right: -96, top: -96, width: 256, height: 256, borderRadius: '50%', background: 'rgba(41,170,225,0.20)', filter: 'blur(48px)' }} aria-hidden />
      <div style={{ position: 'relative', width: '100%', maxWidth: 400, background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 32, boxShadow: 'var(--shadow-xl)' }}>
        <img src="../../assets/logos/logo-official-lat-default-ligas-de-tenis.svg" alt="LAT" style={{ height: 64, marginBottom: 18 }} />
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 40, letterSpacing: '0.03em', color: 'var(--color-navy)', margin: 0, lineHeight: 1 }}>MARIA ESTHER</p>
        <p style={{ marginTop: 4, fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--color-blue)' }}>Match desk — piloto manual</p>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="E-mail do operador" type="email" defaultValue={D.operator.email} placeholder="Preencha o seu e-mail" />
          <Input label="Senha" type="password" defaultValue="••••••••" />
          <Button variant="primary" fullWidth onClick={onSignIn}>Entrar</Button>
        </div>
      </div>
    </div>
  );
}

/* ── Desk header ─────────────────────────────────────────── */
function DeskHeader({ onSignOut }) {
  const s = D.summary;
  return (
    <header style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 24px', background: 'var(--color-navy)', borderBottom: '1px solid var(--color-navy-dark)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(105deg, rgba(41,170,225,0.15) 0%, transparent 45%, rgba(247,201,73,0.08) 100%)' }} aria-hidden />
      <div style={{ position: 'relative' }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-blue-light)' }}>Liga Alphaville de Tênis</p>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 40, letterSpacing: '0.03em', color: '#fff', lineHeight: 1.05, paddingBottom: '0.6em' }}>MARIA ESTHER MATCH DESK</h1>
        <p style={{ margin: '12px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
          {s.total} elegíveis · {s.neverPlayed} nunca jogaram · {s.inactive14d} com 14+ dias · {s.contactedToday} acionados hoje
        </p>
      </div>
      <div style={{ position: 'relative', display: 'flex', gap: 8 }}>
        <Button variant="secondary">Atualizar fila</Button>
        <Button variant="ghost" style={{ color: '#fff' }} onClick={onSignOut}>Sair</Button>
      </div>
    </header>
  );
}

/* ── Queue ───────────────────────────────────────────────── */
function QueueRow({ row, selected, onSelect }) {
  return (
    <button type="button" onClick={() => onSelect(row)}
      style={{ display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer', border: 'none',
        borderBottom: '1px solid var(--color-gray-1)', padding: '16px', background: selected ? 'var(--color-blue-muted)' : 'transparent',
        borderLeft: `4px solid ${selected ? 'var(--color-blue)' : 'transparent'}`, fontFamily: 'var(--font-body)', transition: 'background var(--duration-fast) var(--ease-out)' }}>
      <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy)' }}>{row.name}</p>
      <p style={{ margin: '4px 0 0', fontSize: 12, lineHeight: 1.5, color: 'var(--color-gray-4)' }}>
        {row.category} · {row.inactivity} · {row.games} jogos · {row.court ? 'Tem quadra' : 'Sem quadra'}
      </p>
      {row.contactedAt ? (
        <p style={{ margin: '6px 0 0', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--color-green-dark)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-green)' }} aria-hidden /> Acionado em {row.contactedAt}
        </p>
      ) : (
        <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--color-gray-3)' }}>Nunca acionado no painel</p>
      )}
    </button>
  );
}

function QueuePanel({ selectedId, onSelect }) {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid var(--color-gray-1)', background: 'var(--color-white)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16, borderBottom: '1px solid var(--color-gray-1)', background: 'rgba(243,245,248,0.8)' }}>
        <Input label="Buscar" type="search" placeholder="Nome do jogador" />
        <Select label="Categoria" options={['Todas categorias', 'A · 35+', 'B · Open', 'C · Open']} defaultValue="Todas categorias" />
        <p style={{ margin: 0, fontSize: 12, color: 'var(--color-gray-4)' }}>{D.queue.length} jogador(es) na fila</p>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {D.queue.map((row) => (
          <QueueRow key={row.id} row={row} selected={row.id === selectedId} onSelect={onSelect} />
        ))}
      </div>
    </aside>
  );
}

/* ── Recommendation card ─────────────────────────────────── */
function RecommendationCard({ s, selected, onSelect }) {
  return (
    <article style={{ borderRadius: 'var(--radius-lg)', padding: 16,
      border: `1px solid ${selected ? 'var(--color-blue)' : 'var(--color-gray-1)'}`,
      background: selected ? 'var(--color-blue-muted)' : 'var(--color-white)',
      boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-sm)', transition: 'box-shadow var(--duration-base) var(--ease-out)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1, color: 'var(--color-navy)' }}>{String(s.rank).padStart(2, '0')}</span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--color-navy)' }}>{s.name}</h3>
          <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {s.reasons.map((r, i) => (
              <li key={i} style={{ fontSize: 14, color: 'var(--color-gray-4)' }}>
                — {r.bold ? <strong style={{ color: 'var(--color-navy)', fontWeight: 600 }}>{r.text}</strong> : r.text}
              </li>
            ))}
          </ul>
          <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--color-gray-3)' }}>Score {s.score}</p>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <Button variant={selected ? 'primary' : 'outline'} onClick={onSelect}>
          {selected ? 'Opção selecionada' : 'Selecionar esta opção'}
        </Button>
      </div>
    </article>
  );
}

/* ── Player detail ───────────────────────────────────────── */
function PlayerDetail({ player }) {
  const [selectedRank, setSelectedRank] = React.useState(null);
  const suggestions = D.suggestions[player.id] || D.suggestions.r1;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <header style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--color-navy-dark)', background: 'var(--color-navy)', padding: '20px 24px', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'repeating-linear-gradient(-12deg, transparent, transparent 8px, #fff 8px, #fff 9px)' }} aria-hidden />
        <p style={{ position: 'relative', margin: 0, fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '0.03em', paddingBottom: '0.06em' }}>{player.name.toUpperCase()}</p>
        <p style={{ position: 'relative', margin: '6px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
          {player.category} · {player.inactivity} · {player.games} jogos no semestre · {player.court ? 'Tem quadra' : 'Sem quadra'} · {player.availability}
        </p>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, flex: 1, overflowY: 'auto', padding: 24 }}>
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionLabel>Mensagem para o jogador elegível</SectionLabel>
          <textarea defaultValue={D.initialMessage} rows={12}
            style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--color-text)', padding: 12, borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-gray-2)', background: '#fff', boxShadow: 'var(--shadow-sm)' }} />
          <Button variant="primary" fullWidth>Abrir WhatsApp com o jogador</Button>
          <Button variant="success" fullWidth>Confirmar que enviei a sugestão</Button>
        </section>
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionLabel>Recomendações</SectionLabel>
          <p style={{ margin: 0, borderRadius: 'var(--radius-md)', border: '1px solid rgba(41,170,225,0.2)', background: 'var(--color-blue-muted)', padding: '8px 12px', fontSize: 14, color: 'var(--color-navy)' }}>
            Essa rodada faz sentido para acionar o jogador? Avalie antes ou depois do envio.
          </p>
          {suggestions.map((s) => (
            <RecommendationCard key={s.rank} s={s} selected={selectedRank === s.rank} onSelect={() => setSelectedRank(s.rank)} />
          ))}
        </section>
      </div>
    </div>
  );
}

/* ── Empty state ─────────────────────────────────────────── */
function EmptyState() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 32, textAlign: 'center' }}>
      <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--color-navy)', letterSpacing: '0.02em' }}>SELECIONE UM JOGADOR</p>
      <p style={{ margin: '12px 0 0', maxWidth: 420, fontSize: 14, lineHeight: 1.6, color: 'var(--color-gray-4)' }}>
        Escolha alguém na fila para revisar as 3 recomendações, avaliar a rodada e enviar a sugestão pelo WhatsApp do jogador elegível.
      </p>
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────── */
function MatchDeskApp() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  if (!signedIn) return <LoginScreen onSignIn={() => setSignedIn(true)} />;
  return (
    <div style={{ ...DESK_BG, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <DeskHeader onSignOut={() => { setSignedIn(false); setSelected(null); }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 360px) 1fr', flex: 1, minHeight: 0 }}>
        <QueuePanel selectedId={selected?.id ?? null} onSelect={setSelected} />
        <main style={{ minHeight: 0, background: '#e8edf5' }}>
          {selected ? <PlayerDetail key={selected.id} player={selected} /> : <EmptyState />}
        </main>
      </div>
    </div>
  );
}

window.MatchDeskApp = MatchDeskApp;
