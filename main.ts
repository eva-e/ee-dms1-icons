import { serve } from "https://deno.land/std@0.116.0/http/server.ts"
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts"

const serveFiles = (req: Request) => staticFiles ('public') ({ 
    request: req, 
    respondWith: (r: Response) => r 
})

serve (req => serveFiles (req), { addr: ':80' })

console.log (`Listening on http://localhost:80/`)