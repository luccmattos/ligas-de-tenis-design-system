import * as React from 'react';

/**
 * Selectable radio card for category / modality / interest choices in
 * registration flows. Lay several out in a grid and drive selection with
 * shared state. Icon above, label (and optional description) below.
 */
export interface OptionCardProps {
  /** Icon node, glyph or emoji shown above the label. */
  icon?: React.ReactNode;
  label: string;
  description?: string;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

export function OptionCard(props: OptionCardProps): JSX.Element;
