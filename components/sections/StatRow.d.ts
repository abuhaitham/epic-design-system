export interface Stat { value: string; suffix?: string; label: React.ReactNode; }
/** Big-numeral stat row (GC Gatuzo Light, Western numerals even in RTL) with count-up on scroll. */
export interface StatRowProps {
  /** Defaults to EPIC's track record: 27 · 89 · 158 · 4,800 */
  stats?: Stat[];
  countUp?: boolean;
  className?: string;
}
export declare function StatRow(props: StatRowProps): JSX.Element;
