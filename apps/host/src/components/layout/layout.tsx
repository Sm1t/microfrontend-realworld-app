import { Fragment, ReactNode } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);
