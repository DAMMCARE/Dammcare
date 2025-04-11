import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      <aside className="w-64 bg-white p-6 border-r border-gray-200 min-h-screen">
        <nav className="flex flex-col gap-4 text-green-700 font-semibold text-base">
          <Link href="/">Home</Link>
          <Link href="/over-mij">Over mij</Link>
          <Link href="/pakketten">Pakketten</Link>
          <Link href="/sociaal-tarief">Sociaal tarief</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </aside>
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-700 mb-4">Contact</h1>
          <p className="text-gray-600">Deze pagina komt binnenkort.</p>
        </div>
      </main>
    </div>
  );
}
