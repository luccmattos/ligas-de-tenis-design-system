import * as React from 'react';

/**
 * Small uppercase pill for status, categories and highlights. Tone maps to a
 * brand semantic color.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: 'primary' | 'success' | 'energy' | 'navy' | 'neutral' | 'error';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
