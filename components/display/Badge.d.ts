/** Small pill label for categories, statuses and "Featured". */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'blue' | 'solid' | 'dark' | 'outline' | 'success';
  /** Uppercase eyebrow styling */
  upper?: boolean;
  /** Leading status dot */
  dot?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
