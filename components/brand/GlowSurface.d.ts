export type SurfaceVariant = 'glow' | 'glow-stone' | 'glow-dark' | 'fluted' | 'fluted-dark' | 'blue' | 'black' | 'stone';
/**
 * Signature EPIC surfaces: the out-of-focus blue glow over mist gray (with film grain), its Pale Stone and Midnight Navy variants, vertical fluted Royal Blue texture, and solid blocks.
 */
export interface GlowSurfaceProps extends React.HTMLAttributes<HTMLElement> {
  /** Default 'glow' */
  variant?: SurfaceVariant;
  /** Film-grain overlay. Default true. */
  grain?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export declare function GlowSurface(props: GlowSurfaceProps): JSX.Element;
