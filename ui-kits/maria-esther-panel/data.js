/* Fake operational data for the Maria Esther Match Desk UI kit.
   Mirrors the shape used by the real panel (PanelQueueRow / RankedSuggestion). */
window.MED_DATA = {
  operator: { name: 'Fernando', email: 'fernando@ligasdetenis.com.br' },
  summary: { total: 18, neverPlayed: 5, inactive14d: 7, contactedToday: 3 },
  queue: [
    {
      id: 'r1', name: 'Rafael Moura', category: 'B · Open', games: 0, court: true,
      inactivity: 'Nunca jogou no semestre', availability: 'Disponibilidade alta', contactedAt: null,
    },
    {
      id: 'r2', name: 'Camila Restrepo', category: 'C · Open', games: 1, court: false,
      inactivity: '18 dias sem jogar', availability: 'Disponibilidade média', contactedAt: '07/06 · 14:20',
    },
    {
      id: 'r3', name: 'Henrique Salles', category: 'A · 35+', games: 2, court: true,
      inactivity: '21 dias sem jogar', availability: 'Disponibilidade baixa', contactedAt: null,
    },
    {
      id: 'r4', name: 'Patrícia Lemos', category: 'B · Open', games: 0, court: false,
      inactivity: 'Nunca jogou no semestre', availability: 'Disponibilidade alta', contactedAt: null,
    },
    {
      id: 'r5', name: 'Diego Antunes', category: 'C · Open', games: 3, court: true,
      inactivity: '16 dias sem jogar', availability: 'Disponibilidade média', contactedAt: '06/06 · 09:05',
    },
  ],
  suggestions: {
    r1: [
      { rank: 1, name: 'Bruno Carvalho', score: 92, reasons: [
        { text: 'Tem quadra em casa (Alphaville)', bold: true },
        { text: 'Mesma categoria B · Open' },
        { text: 'Jogou 2 partidas — disponível esta semana' } ] },
      { rank: 2, name: 'Tiago Nogueira', score: 81, reasons: [
        { text: 'Mesma categoria B · Open', bold: true },
        { text: 'Sem quadra — Rafael tem quadra' },
        { text: '12 dias sem jogar' } ] },
      { rank: 3, name: 'Marcelo Pires', score: 74, reasons: [
        { text: 'Categoria B · Open' },
        { text: 'Disponibilidade média nas terças e quintas' } ] },
    ],
  },
  initialMessage:
    'Oi, Rafael! Aqui é a Maria Esther, da Liga Alphaville de Tênis. 🎾\n\n' +
    'Vi que você ainda não marcou sua primeira partida do semestre. Separei 3 jogadores da sua categoria que estão disponíveis essa semana.\n\n' +
    'Quer que eu te apresente um deles pra marcar o jogo?',
};
