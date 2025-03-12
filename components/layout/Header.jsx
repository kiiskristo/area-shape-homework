import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Next.js App</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 