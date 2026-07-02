import { createRoute } from '@tanstack/react-router';
import { UserPage } from '../pages/user';
import { UserFavoritesPage } from '../pages/favorites';
import { rootRoute } from './root';

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profile',
});

export const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profile/$username',
  component: UserPage,
});

export const userFavoritesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profile/$username/favorites',
  component: UserFavoritesPage,
});

export const routes = [userFavoritesRoute, userRoute];
