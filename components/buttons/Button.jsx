import React from 'react';

/**
 * Button — the LAT action primitive.
 * Variants mirror the brand's CTA hierarchy: blue→navy gradient for primary
 * actions, green gradient for conversion ("Join / Submit"), plus ghost,
 * secondary and outline for lower-emphasis actions. 44px min touch target.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    borderRadius: 'var(--radius-md)',
    transition: 'transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
  };

  const sizes = {
    sm: { minHeight: '38px', padding: '8px 18px', fontSize: '13px' },
    md: { minHeight: '44px', padding: '13px 24px', fontSize: '14px' },
    lg: { minHeight: '52px', padding: '16px 32px', fontSize: '16px' },
  };

  const variants = {
    primary: { background: 'var(--gradient-primary)', color: 'var(--color-white)', boxShadow: 'var(--shadow-blue)' },
    success: { background: 'var(--gradient-success)', color: 'var(--color-white)', boxShadow: 'var(--shadow-green)' },
    secondary: { background: 'var(--color-off-white)', color: 'var(--color-gray-4)', fontWeight: 600 },
    ghost: { background: 'transparent', color: 'var(--color-gray-4)' },
    outline: { background: 'var(--color-white)', color: 'var(--color-navy)', border: '2px solid var(--color-blue)' },
    highlight: { background: 'var(--color-yellow)', color: 'var(--color-navy)', fontWeight: 800 },
  };

  function handleEnter(e) {
    if (disabled) return;
    if (variant === 'primary' || variant === 'success' || variant === 'highlight') {
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--color-gray-1)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'var(--color-navy-light)';
    } else if (variant === 'outline') {
      e.currentTarget.style.background = 'var(--color-blue-muted)';
    }
  }
  function handleLeave(e) {
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = variants[variant].background;
    if (variant === 'outline') e.currentTarget.style.background = 'var(--color-white)';
  }

  return (
    <button
      type={type}
      disabled={disabled}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </button>
  );
}
