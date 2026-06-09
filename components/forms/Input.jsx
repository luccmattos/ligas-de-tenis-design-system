import React, { useState } from 'react';

/**
 * Input — labelled text field. Label always sits above the field (never
 * placeholder-only). Off-white at rest, white on focus with a blue ring.
 */
export function Input({
  label,
  hint,
  error,
  type = 'text',
  id,
  value,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const showError = Boolean(error);

  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--color-text)',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    border: `1.5px solid ${showError ? 'var(--color-error)' : focused ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
    background: showError ? 'var(--color-error-bg)' : focused ? 'var(--color-white)' : 'var(--color-off-white)',
    boxShadow: focused && !showError ? 'var(--ring-blue)' : 'none',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-gray-4)' }}
        >
          {label}
        </label>
      )}
      <input
        id={fieldId}
        type={type}
        value={value}
        disabled={disabled}
        aria-invalid={showError || undefined}
        style={fieldStyle}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        {...rest}
      />
      {showError ? (
        <span style={{ fontSize: '12px', color: 'var(--color-error)', fontWeight: 600 }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: '12px', color: 'var(--color-gray-4)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
