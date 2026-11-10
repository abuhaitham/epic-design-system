export interface FAQItem { q: React.ReactNode; a: React.ReactNode; }
/** Hairline accordion; plus rotates into a black × and the answer eases open. */
export interface FAQAccordionProps {
  items: FAQItem[];
  /** Index open on load; null for none. Default 0 */
  defaultOpen?: number | null;
  multiple?: boolean;
  className?: string;
}
export declare function FAQAccordion(props: FAQAccordionProps): JSX.Element;
