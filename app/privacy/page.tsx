import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p>
              This Privacy Policy describes how PointPilot (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects your information when you use our point of sale system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
            <p>
              We collect only essential information needed to provide our point of sale services. This includes business information and transaction data necessary for operation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
              For any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 