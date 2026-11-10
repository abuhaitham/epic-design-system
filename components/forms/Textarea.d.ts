/** Multi-line text field matching Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  dark?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
