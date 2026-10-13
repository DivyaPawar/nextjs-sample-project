import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const { secret, path, tag } = await request.json()

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (!path && !tag) {
    return NextResponse.json({ message: 'Missing path or tag' }, { status: 400 })
  }

  if (path) revalidatePath(path)
  if (tag) revalidateTag(tag, 'max')

  return NextResponse.json({ revalidated: true, path, tag })
}