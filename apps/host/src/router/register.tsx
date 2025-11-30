import React from 'react';
import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const Register = React.lazy(() => import('remote_register/register'));

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
});
