// app/products/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: 'shoe' }, { slug: 'hat' }]
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <p>Product: {slug}</p>
}