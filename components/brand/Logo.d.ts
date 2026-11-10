export type LogoColor = 'blue' | 'black' | 'navy' | 'white' | 'current';
export interface LogoProps {
  /** Solid brand colour only — never gradients or outlines. Default 'current' (inherits text colour). */
  color?: LogoColor;
  /** Optional separate mark colour (e.g. Royal Blue mark + black wordmark). */
  markColor?: LogoColor;
  /** Show the "EPIC" wordmark (GC Gatuzo Medium). Default true. */
  wordmark?: boolean;
  /** Mark height in px. Default 28. */
  size?: number;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
export interface EpicMarkProps { color?: LogoColor | string; height?: string | number; className?: string; style?: React.CSSProperties; title?: string; }
export declare function EpicMark(props: EpicMarkProps): JSX.Element;
