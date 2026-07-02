import React from 'react';
import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const Profile = React.lazy(() => import('remote_profile/profile'));

// try loader to register subtrees
// https://github.com/Khyonn/tanstackrouter-modulefederation/blob/master/host/src/utils/registerSubtree.tsx, https://github.com/TanStack/router/discussions/7564
// https://tanstack.com/router/latest/docs/guide/data-loading#loader-parameters
// https://tanstack.com/router/latest/docs/api/router/RouteType

// Fog of War in react-router
// https://reactrouter.com/main/api/data-routers/createBrowserRouter

export const profileIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Profile,
});

export const profileRoute = createRoute({
  getParentRoute: () => profileIndexRoute,
  path: '$username',
  component: function Profile() {
    const { username } = profileRoute.useParams();

    return <div className="p-2">Hello from profile {username}!</div>;
  },
});
