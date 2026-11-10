/** WhatsApp contact pill (wa.me deep link). Use float for the fixed bottom-end bubble. */
export interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** International number, digits only (e.g. 9665…) */
  phone?: string;
  /** Prefilled message */
  message?: string;
  label?: string;
  /** position:fixed bottom-end (flips side in RTL) */
  float?: boolean;
  iconOnly?: boolean;
}
export declare function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
