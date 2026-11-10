import type { NavLink } from './SiteHeader';
export interface FooterColumn { heading: string; links: NavLink[]; }
/**
 * Black footer with logo, blurb, newsletter, link columns, oversized ghost wordmark and the "EPIC is not a law firm." disclaimer.
 * @startingPoint section="Navigation" subtitle="Black footer with disclaimer" viewport="1280x720"
 */
export interface FooterProps {
  columns?: FooterColumn[];
  blurb?: string;
  newsletter?: boolean;
  newsletterLabel?: string;
  newsletterPlaceholder?: string;
  newsletterCta?: string;
  disclaimer?: string;
  copyright?: string;
  legal?: NavLink[];
  /** Huge low-opacity "EPIC" set in GC Gatuzo */
  bigWordmark?: boolean;
  className?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
