export interface NavLink { label: string; href: string; }
/**
 * Sticky marketing header: mark + wordmark, nav, EN/العربية toggle, "Client login", Royal Blue "Book a discovery call" pill. Transparent over the hero, frosted Pale Stone after 24px of scroll; mobile drawer under 1040px.
 * @startingPoint section="Navigation" subtitle="Sticky header with language toggle and CTA" viewport="1280x120"
 */
export interface SiteHeaderProps {
  links?: NavLink[];
  lang?: 'en' | 'ar';
  onLangToggle?: () => void;
  loginLabel?: string;
  loginHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: (e: React.MouseEvent) => void;
  /** 'dark' = white text while transparent over a dark/glow hero */
  tone?: 'light' | 'dark';
  /** position:fixed so the hero sits underneath */
  overlay?: boolean;
  /** Slide away on scroll-down, return on scroll-up */
  hideOnScroll?: boolean;
  /** Force the frosted state (for static previews) */
  scrolled?: boolean;
  onNavigate?: (link: NavLink) => void;
  className?: string;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
