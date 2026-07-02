import { createRootRoute } from '@tanstack/react-router';
import { UserPageLayout } from '../shared/layout';

export const rootRoute = createRootRoute({
  component: UserPageLayout,
});
