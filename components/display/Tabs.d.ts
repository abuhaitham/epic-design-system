export interface TabItem { id: string; label: React.ReactNode; }
/** Segmented pill tabs with a sliding indicator (also 'underline' and 'dark'). */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  variant?: 'pill' | 'underline' | 'dark';
}
export declare function Tabs(props: TabsProps): JSX.Element;
