import { createRootRoute, Link as RouterLink, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Link from 'next/link'

export const Route = createRootRoute({
  component: () => (
    <>
      <div sx={{ padding: '0.5em', display: 'flex', gap: '0.5em' }}>
        <Link href="/">
          Home
        </Link>
        <RouterLink to="/books">
          Books
        </RouterLink>
        <Link href="/about">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})