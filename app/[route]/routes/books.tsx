import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
  component: Books,
})

function Books() {
  return <div sx={{ padding: '0.5em' }}>Hello from Books!</div>
}