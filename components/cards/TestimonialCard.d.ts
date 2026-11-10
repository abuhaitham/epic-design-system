/** Client quote card with Royal Blue quote mark and attribution. */
export interface TestimonialCardProps {
  quote: React.ReactNode;
  name: string;
  role?: React.ReactNode;
  avatar?: string;
  variant?: 'white' | 'dark';
  className?: string;
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
