import React from 'react';
import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const Login = React.lazy(() => import('remote/login'));

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});
