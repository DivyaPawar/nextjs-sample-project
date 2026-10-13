// app/api/draft/route.ts
import { draftMode } from 'next/headers'

export async function GET() {
  const draft = await draftMode()
  draft.enable()
  return Response.json({ draft: 'on' })
}