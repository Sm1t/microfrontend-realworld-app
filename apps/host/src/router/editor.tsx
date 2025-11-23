import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

export const editorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/editor',
  component: function Editor() {
    return <div className="p-2">Hello from editor!</div>;
  },
});
