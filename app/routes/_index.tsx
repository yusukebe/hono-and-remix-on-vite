import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'Remix and Hono on Vite' }]
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare
  return json({ myVar: env.MY_VAR })
}

export default function Index() {
  const { myVar } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Welcome Remix and Hono on Vite</h1>
      <ul>
        <li>Remix, {myVar}</li>
        <li>
          <a href="/hono">Hono</a>
        </li>
      </ul>
      <img src="/assets/hono-logo.png" />
    </div>
  )
}
