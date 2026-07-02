import { createRouter } from '@tanstack/react-router';
import { routes } from './routes';
import { rootRoute } from './root';

const routeTree = rootRoute.addChildren(routes);

export const router = createRouter({ routeTree });
