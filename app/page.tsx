import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">PointPilot</h1>
        <p className="mb-4">
          PointPilot is a modern point of sale system designed to help businesses manage their sales efficiently.
        </p>
        <Link href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
      </div>
    </main>
  );
}
