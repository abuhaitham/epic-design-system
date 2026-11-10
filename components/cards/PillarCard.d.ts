/** Clickable pillar summary card (Setup / Compliance / Growth); arrow chip turns Royal Blue and rotates on hover. */
export interface PillarCardProps {
  index?: string;
  title?: React.ReactNode;
  tagline?: React.ReactNode;
  tags?: string[];
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Use 'blue' for at most one card per row */
  variant?: 'white' | 'stone' | 'blue' | 'black';
  className?: string;
}
export declare function PillarCard(props: PillarCardProps): JSX.Element;
