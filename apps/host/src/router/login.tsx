import React from 'react';
import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const Login = React.lazy(() => import('remote_login/login'));

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => (
    <React.Suspense fallback={<div>Загрузка...</div>}>
      <Login />
    </React.Suspense>
  ),
});
