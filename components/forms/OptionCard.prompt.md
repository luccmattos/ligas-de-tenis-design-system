Selectable radio card for choosing a category, modality or interest; arrange in a grid and manage `selected` with shared state.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
  <OptionCard label="Ranking" description="Jogue o semestre" selected={pick==='r'} onSelect={() => setPick('r')} />
  <OptionCard label="Torneio" description="Etapas ATP" selected={pick==='t'} onSelect={() => setPick('t')} />
  <OptionCard label="Os dois" selected={pick==='b'} onSelect={() => setPick('b')} />
</div>
```
