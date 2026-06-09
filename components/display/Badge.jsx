import React from 'react';

/**
 * Badge — a small pill label for status, categories and highlights.
 * Tones map to the brand's semantic colors.
 */
export function Badge({ children, tone = 'neutral', style = {} }) {
  const tones = {
    primary: { background: 'var(--color-blue-muted)', color: 'var(--color-blue)' },
    success: { background: 'var(--color-green-muted)', color: 'var(--color-green-dark)' },
    energy: { background: 'var(--color-yellow-muted)', color: 'var(--color-navy)' },
    navy: { background: 'var(--color-navy)', color: 'var(--color-white)' },
    neutral: { background: 'var(--color-off-white)', color: 'var(--color-gray-4)' },
    error: { background: 'var(--color-error-bg)', color: 'var(--color-error)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
