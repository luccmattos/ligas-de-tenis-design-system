import React, { useState } from 'react';

/**
 * Card — the standard white content surface. Soft 16px radius, hairline
 * border and a navy-tinted shadow that deepens with a 4px lift on hover
 * (only when `hoverable`). Pass `header` for a navy gradient header strip.
 */
export function Card({
  children,
  header,
  hoverable = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        background: 'var(--color-white)',
        border: '1px solid var(--color-gray-1)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
        ...style,
      }}
      {...rest}
    >
      {header && (
        <div
          style={{
            background: 'var(--gradient-primary)',
            color: 'var(--color-white)',
            padding: '16px var(--space-6)',
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            letterSpacing: '0.02em',
          }}
        >
          {header}
        </div>
      )}
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
