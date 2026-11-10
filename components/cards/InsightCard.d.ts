import type { SurfaceVariant } from '../brand/GlowSurface';
/** Article teaser: 16:11 image (zooms on hover), category badge, date, title with draw-in underline. */
export interface InsightCardProps {
  title: React.ReactNode;
  category?: string;
  date?: string;
  readTime?: string;
  excerpt?: React.ReactNode;
  image?: string;
  /** Placeholder surface when no image */
  mediaVariant?: SurfaceVariant;
  href?: string;
  className?: string;
}
export declare function InsightCard(props: InsightCardProps): JSX.Element;
