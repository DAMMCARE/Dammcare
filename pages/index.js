import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row bg-gray-50 text-gray-800">
      {/* Sidebar Menu */}
      <aside className="w-64 bg-green-100 p-6 border-r border-gray-300 min-h-screen">
        <nav className="flex flex-col gap-4 text-green-800 font-semibold text-base">
          <Link href="/">Home</Link>
          <Link href="/over-mij">Over mij</Link>
          <Link href="/pakketten">Pakketten</Link>
          <Link href="/sociaal-tarief">Sociaal tarief</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </aside>

      {/* Main Content Centered */}
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Welkom bij DAMM Care 💚</h1>
          <p className="text-xl text-gray-600">Menselijke aandacht, elke dag opnieuw.</p>
        </div>
      </main>
    </div>
  );
}
