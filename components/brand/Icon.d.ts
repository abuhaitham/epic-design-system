export type IconName = 'arrow-right' | 'arrow-left' | 'arrow-up-right' | 'chevron-down' | 'chevron-right' | 'plus' | 'minus' | 'check' | 'x' | 'menu' | 'globe' | 'message-circle' | 'mail' | 'calendar' | 'linkedin' | 'map-pin' | 'badge-check';
/** Lucide-style 24px line icon (1.75 stroke). Directional icons auto-mirror under dir="rtl". */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  /** px, default 20 */
  size?: number;
  strokeWidth?: number;
  /** Force RTL mirroring on/off. Defaults to true for arrows/chevron-right. */
  flip?: boolean;
  title?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
