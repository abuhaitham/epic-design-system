export type LogoItem = string | { src: string; alt?: string };
/** "Trusted by" monochrome logo marquee (infinite scroll, pauses on hover, reverses in RTL). Strings render as placeholder wordmarks. */
export interface LogoStripProps {
  label?: string;
  logos?: LogoItem[];
  /** Seconds per loop. Default 40 */
  duration?: number;
  className?: string;
}
export declare function LogoStrip(props: LogoStripProps): JSX.Element;
