import React from 'react';

/**
 * OptionCard — a selectable radio card used for category / modality / interest
 * choices in registration flows. Icon (or emoji/glyph) above, label below.
 * Selected state: blue border, blue-muted fill, subtle ring.
 */
export function OptionCard({
  icon,
  label,
  description,
  selected = false,
  disabled = false,
  onSelect,
  style = {},
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={onSelect}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        textAlign: 'center',
        padding: '20px 16px',
        borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${selected ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
        background: selected ? 'var(--color-blue-muted)' : 'var(--color-white)',
        boxShadow: selected ? 'var(--ring-blue)' : 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        fontFamily: 'var(--font-body)',
        transition: 'border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        ...style,
      }}
    >
      {icon != null && (
        <span style={{ fontSize: '28px', lineHeight: 1, color: selected ? 'var(--color-blue)' : 'var(--color-navy)' }}>
          {icon}
        </span>
      )}
      <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-navy)' }}>{label}</span>
      {description && (
        <span style={{ fontSize: '12px', color: 'var(--color-gray-4)', lineHeight: 1.4 }}>{description}</span>
      )}
    </button>
  );
}
