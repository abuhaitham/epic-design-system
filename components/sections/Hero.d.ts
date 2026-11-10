export interface CtaSpec { label: string; href?: string; onClick?: (e: React.MouseEvent) => void; variant?: 'primary' | 'dark' | 'outline' | 'light' | 'link'; arrow?: boolean; }
/**
 * Full-bleed hero on the signature glow surface: large GC Gatuzo Medium headline (one line per \n, staggered reveal), lead, two pill CTAs.
 * @startingPoint section="Sections" subtitle="Glow-surface hero with staggered headline" viewport="1280x720"
 */
export interface HeroProps {
  eyebrow?: string;
  /** Use \n to break lines; each line reveals in sequence */
  title?: string;
  lead?: string;
  primaryCta?: CtaSpec;
  secondaryCta?: CtaSpec;
  variant?: 'glow' | 'glow-stone' | 'glow-dark' | 'black' | 'blue' | 'fluted';
  align?: 'start' | 'center';
  /** Bottom row (e.g. scroll cue, credentials) */
  foot?: React.ReactNode;
  minHeight?: string | number;
  className?: string;
  children?: React.ReactNode;
}
export declare function Hero(props: HeroProps): JSX.Element;
