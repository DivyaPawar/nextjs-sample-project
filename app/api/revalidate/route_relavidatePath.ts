import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const { secret, path } = await request.json()

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (!path) {
    return NextResponse.json({ message: 'Missing path' }, { status: 400 })
  }

  revalidatePath(path)
  return NextResponse.json({ revalidated: true, path })
}