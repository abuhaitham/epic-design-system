/**
 * Text input with label, hint and error. 52px tall, 14px radius, Royal Blue focus ring.
 * @startingPoint section="Forms" subtitle="Inputs, select, textarea, checkbox" viewport="700x420"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Translucent style for black/navy backgrounds */
  dark?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
