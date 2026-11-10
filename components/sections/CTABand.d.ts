import type { CtaSpec } from './Hero';
/**
 * Closing call-to-action band on the glow surface (rounded 36px inside the container, or flush full-bleed).
 * @startingPoint section="Sections" subtitle="Closing CTA band on glow surface" viewport="1280x520"
 */
export interface CTABandProps {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: React.ReactNode;
  primaryCta?: CtaSpec | null;
  secondaryCta?: CtaSpec;
  variant?: 'glow-dark' | 'glow' | 'glow-stone' | 'blue' | 'black' | 'fluted';
  flush?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare function CTABand(props: CTABandProps): JSX.Element;
