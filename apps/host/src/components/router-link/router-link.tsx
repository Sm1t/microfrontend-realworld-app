import { Link, type LinkProps } from '@tanstack/react-router';

type Props = {
  activeClassName?: string;
  className?: string;
  href: LinkProps['to'];
} & LinkProps;

export const RouterLink = ({ activeClassName = '', href, ...props }: Props) => (
  <Link {...props} activeProps={{ className: activeClassName }} to={href} />
);
