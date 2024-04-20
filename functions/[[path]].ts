import { handle } from 'hono/cloudflare-pages'
import server from '../server'
export const onRequest = handle(server)
