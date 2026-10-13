// app/draft-test/page.tsx
import { draftMode } from 'next/headers'

export default async function Page() {
  const { isEnabled } = await draftMode()
  return <p>Draft mode is {isEnabled ? 'ON' : 'OFF'}</p>
}