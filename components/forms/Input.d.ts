import * as React from 'react';

/**
 * Labelled text input. The label sits above the field; pass `hint` for helper
 * text or `error` to flip the field into its red error state (error always
 * shows text, never color alone).
 *
 * @startingPoint section="Forms" subtitle="Labelled input with focus/error states" viewport="700x140"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Uppercase label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — also turns the border/background red. */
  error?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
