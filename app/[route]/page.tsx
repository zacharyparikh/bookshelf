'use client';

// Import the generated route tree
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { useEffect, useState } from 'react';
import NotFound from '@/not-found';

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function Route() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ensure the router is only rendered on client
  if (!isClient) {
    return null;
  }

  return <RouterProvider router={router} />;
}
