import Link from 'next/link'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'

export default function About() {
  return (
    <Layout title="About - My Next.js App" description="About page">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          About This App
        </h1>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <p className="mt-2 text-slate-500">
              This educational tool helps students practice calculating the area of different geometric shapes including rectangles, triangles, parallelograms, and trapezoids.
              
              <br/><br/>
              <strong>How to use:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Observe the shape and its dimensions</li>
                <li>Calculate the area using the appropriate formula</li>
                <li>Enter your answer and check if it's correct</li>
                <li>If needed, use the hint feature to see the formula</li>
              </ul>
            </p>
            <div className="mt-6">
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 