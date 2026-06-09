import React, { useState } from 'react';

/**
 * Select — labelled dropdown sharing the Input visual language.
 * Pass `options` as [{ value, label }] or plain strings.
 */
export function Select({
  label,
  options = [],
  value,
  disabled = false,
  id,
  placeholder,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

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
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          value={value}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            appearance: 'none',
            WebkitAppearance: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-text)',
            padding: '12px 40px 12px 16px',
            borderRadius: 'var(--radius-md)',
            border: `1.5px solid ${focused ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
            background: focused ? 'var(--color-white)' : 'var(--color-off-white)',
            boxShadow: focused ? 'var(--ring-blue)' : 'none',
            outline: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {opts.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span
          aria-hidden
          style={{
            position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
            pointerEvents: 'none', color: 'var(--color-gray-4)', fontSize: '12px',
          }}
        >▼</span>
      </div>
    </div>
  );
}
