import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About - My Next.js App</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          About This App
        </h1>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <p className="mt-2 text-slate-500">
              This is a Next.js app with Tailwind CSS, deployed with GitHub Actions.
            </p>
            <div className="mt-6">
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 