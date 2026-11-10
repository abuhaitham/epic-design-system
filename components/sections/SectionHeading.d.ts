/** Section intro: small Royal Blue eyebrow, Medium headline, muted lead, optional trailing action. */
export interface SectionHeadingProps {
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
