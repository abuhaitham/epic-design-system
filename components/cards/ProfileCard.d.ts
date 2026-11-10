import type { SurfaceVariant } from '../brand/GlowSurface';
/** Black social/profile card with fluted Royal Blue banner, mark avatar, verified tick, bio and stats. */
export interface ProfileCardProps {
  name?: string;
  handle?: string;
  bio?: React.ReactNode;
  avatar?: string;
  verified?: boolean;
  stats?: { value: string; label: string }[];
  ctaLabel?: string | null;
  onCta?: () => void;
  bannerVariant?: SurfaceVariant;
  className?: string;
}
export declare function ProfileCard(props: ProfileCardProps): JSX.Element;
