/** Checkbox (or radio via type="radio") with Royal Blue checked state. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  type?: 'checkbox' | 'radio';
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
