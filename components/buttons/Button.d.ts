import * as React from 'react';

/**
 * The LAT action primitive. Use `primary` for the main CTA on a screen,
 * `success` for conversion actions (join / submit / confirm), `outline` and
 * `ghost`/`secondary` for lower-emphasis actions, `highlight` (yellow) sparingly
 * for promo accents.
 *
 * @startingPoint section="Buttons" subtitle="Branded button with 6 variants and 3 sizes" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: 'primary' | 'success' | 'secondary' | 'ghost' | 'outline' | 'highlight';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
