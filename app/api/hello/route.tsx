// app/api/hello/route.ts   →   URL: /api/hello
export async function GET() {
  return Response.json({ message: 'Hello' })
}