async function getZen() {
  const res = await fetch('https://api.github.com/zen', {
    cache: 'force-cache',
    next: { tags: ['zen'] },
  })
  return res.text()
}

export default async function Page() {
  const zen = await getZen()
  return <p>Page A: {zen}</p>
}