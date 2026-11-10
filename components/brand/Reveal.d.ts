/** Scroll-triggered entrance (fade + 28px rise, 900ms ease-out). Stagger siblings with delay. */
export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  /** ms */
  delay?: number;
  variant?: 'up' | 'fade' | 'scale';
  once?: boolean;
  threshold?: number;
  children?: React.ReactNode;
}
export declare function Reveal(props: RevealProps): JSX.Element;
