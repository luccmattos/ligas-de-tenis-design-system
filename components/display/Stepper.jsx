import React from 'react';

/**
 * Stepper — horizontal progress indicator for multi-step forms / onboarding.
 * Completed steps show a green check, the active step a blue circle, upcoming
 * steps a gray outline. Connector legs fill from gray to blue as you advance.
 */
export function Stepper({ steps = [], current = 0, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', fontFamily: 'var(--font-body)', ...style }}>
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        const circleBg = done ? 'var(--color-green)' : active ? 'var(--color-blue)' : 'var(--color-white)';
        const circleBorder = done ? 'var(--color-green)' : active ? 'var(--color-blue)' : 'var(--color-gray-2)';
        const circleColor = done || active ? 'var(--color-white)' : 'var(--color-gray-3)';
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: '0 0 auto' }}>
              <span
                style={{
                  width: '34px', height: '34px', borderRadius: 'var(--radius-pill)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: circleBg, border: `2px solid ${circleBorder}`, color: circleColor,
                  fontWeight: 700, fontSize: '15px',
                  transition: 'all var(--duration-base) var(--ease-out)',
                }}
              >
                {done ? '✓' : i + 1}
              </span>
              <span
                style={{
                  fontSize: '12px', fontWeight: active ? 700 : 600,
                  color: active ? 'var(--color-navy)' : 'var(--color-gray-4)',
                  textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap',
                }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  flex: 1, height: '3px', borderRadius: 'var(--radius-pill)', marginTop: '15px',
                  background: i < current ? 'var(--color-blue)' : 'var(--color-gray-1)',
                  transition: 'background var(--duration-base) var(--ease-out)',
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
