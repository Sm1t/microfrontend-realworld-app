import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

export const profileIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
});

export const profileRoute = createRoute({
  getParentRoute: () => profileIndexRoute,
  path: '$username',
  component: function Profile() {
    const { username } = profileRoute.useParams();

    return <div className="p-2">Hello from profile {username}!</div>;
  },
});
