import * as React from 'react';

/**
 * Horizontal step indicator for multi-step forms and onboarding. Completed
 * steps show a green check, the active step a blue circle, upcoming steps a
 * gray outline; connector legs fill blue as the user advances.
 */
export interface StepperProps {
  /** Ordered step labels. */
  steps: string[];
  /** Index of the active step (0-based). */
  current: number;
  style?: React.CSSProperties;
}

export function Stepper(props: StepperProps): JSX.Element;
