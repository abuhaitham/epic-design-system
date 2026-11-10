export interface Step { title: React.ReactNode; text: React.ReactNode; }
/** Numbered process ("Your journey with EPIC") on a hairline timeline; first dot in Royal Blue. */
export interface NumberedStepsProps {
  steps?: Step[];
  /** Highlight a step dot */
  active?: number;
  className?: string;
}
export declare function NumberedSteps(props: NumberedStepsProps): JSX.Element;
