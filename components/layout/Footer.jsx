export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center">
          © {new Date().getFullYear()} My Next.js App. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 