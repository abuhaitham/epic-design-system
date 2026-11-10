/** Team member: 4:5 photo (grayscale → colour on hover), name, role, optional LinkedIn chip. */
export interface TeamCardProps {
  name: string;
  role?: React.ReactNode;
  photo?: string;
  linkedin?: string;
  className?: string;
}
export declare function TeamCard(props: TeamCardProps): JSX.Element;
