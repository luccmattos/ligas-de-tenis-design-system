import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Labelled dropdown that matches the Input field styling. Pass `options` as
 * an array of strings or `{ value, label }` objects.
 */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: string;
  options: Array<string | SelectOption>;
  /** Optional empty leading option. */
  placeholder?: string;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
