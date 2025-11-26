import React from 'react';
import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Login = React.lazy(() => import('remote/login'));

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});
