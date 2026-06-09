import * as React from 'react';

/**
 * Standard white content surface — 16px radius, hairline border, navy-tinted
 * shadow. Set `hoverable` for the 4px lift on hover; pass `header` for a navy
 * gradient header strip (rendered in the display font).
 *
 * @startingPoint section="Surfaces" subtitle="Content card with optional gradient header" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Optional navy-gradient header strip content. */
  header?: React.ReactNode;
  hoverable?: boolean;
  /** Inner padding (CSS value). @default var(--space-6) */
  padding?: string;
}

export function Card(props: CardProps): JSX.Element;
