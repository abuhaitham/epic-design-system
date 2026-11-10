import type { CtaSpec } from './Hero';
import type { SurfaceVariant } from '../brand/GlowSurface';
/** Alternating text + image block for a service pillar (Setup / Compliance / Growth). */
export interface ServiceRowProps {
  index?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  tagline?: React.ReactNode;
  /** Checklist of deliverables, rendered in 2 columns */
  items?: React.ReactNode[];
  cta?: CtaSpec;
  image?: string;
  imageAlt?: string;
  /** Custom media node (overrides image) */
  media?: React.ReactNode;
  /** Placeholder surface when no image. Default 'fluted' */
  mediaVariant?: SurfaceVariant;
  /** Media on the start side */
  reverse?: boolean;
  id?: string;
  className?: string;
}
export declare function ServiceRow(props: ServiceRowProps): JSX.Element;
