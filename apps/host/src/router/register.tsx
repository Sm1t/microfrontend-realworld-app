import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: function Register() {
    return <div className="p-2">Hello from register!</div>;
  },
});
