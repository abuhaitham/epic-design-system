import type { IconName } from '../brand/Icon';
/**
 * Pill button. Primary = Royal Blue (one per view), dark = black, outline = 1px currentColor, light = white on dark surfaces, link = underline-on-hover text button.
 * @startingPoint section="Actions" subtitle="Pill buttons: primary blue, dark, outline, link" viewport="700x300"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'light' | 'link';
  /** sm 40px · md 48px · lg 56px */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> when set */
  href?: string;
  /** Trailing arrow that slides on hover (mirrors in RTL) */
  arrow?: boolean;
  iconStart?: IconName;
  iconEnd?: IconName;
  block?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
