import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-3">
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
    </header>
  )
}
