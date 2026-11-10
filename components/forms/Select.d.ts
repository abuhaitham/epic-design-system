export type SelectOption = string | { value: string; label: React.ReactNode };
/** Native select styled to match Input, with chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options: SelectOption[];
  placeholder?: string;
  dark?: boolean;
}
export declare function Select(props: SelectProps): JSX.Element;
