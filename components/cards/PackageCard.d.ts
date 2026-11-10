import type { CtaSpec } from '../sections/Hero';
import type { SurfaceVariant } from '../brand/GlowSurface';
/**
 * Featured package callout (e.g. the SCG bundle): black or Royal Blue block, inclusions list, price, CTA, fluted-texture media side.
 * @startingPoint section="Cards" subtitle="Featured SCG package callout" viewport="1280x560"
 */
export interface PackageCardProps {
  badge?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  includes?: React.ReactNode[];
  price?: string;
  priceUnit?: string;
  primaryCta?: CtaSpec | null;
  secondaryCta?: CtaSpec;
  image?: string;
  mediaVariant?: SurfaceVariant;
  variant?: 'black' | 'blue';
  className?: string;
}
export declare function PackageCard(props: PackageCardProps): JSX.Element;
