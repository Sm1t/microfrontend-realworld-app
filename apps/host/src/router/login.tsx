import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: function Login() {
    return <div className="p-2">Hello from login!</div>;
  },
});
