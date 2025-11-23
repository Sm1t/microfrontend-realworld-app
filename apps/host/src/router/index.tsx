import { createRouter, createRoute } from '@tanstack/react-router';

import { Home } from '../pages/home';
import { rootRoute } from './root';
import { loginRoute } from './login';
import { registerRoute } from './register';
import { editorRoute } from './editor';
import { settingsRoute } from './settings';
import { profileIndexRoute, profileRoute } from './profile';

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  editorRoute,
  settingsRoute,
  profileIndexRoute.addChildren([profileRoute]),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };
