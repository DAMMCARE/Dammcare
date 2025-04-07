import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="mb-12 text-center">
        <div className="max-w-5xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-6 text-green-700 font-semibold mb-8 text-sm">
            <Link href="/">Home</Link>
            <Link href="/over-mij">Over mij</Link>
            <Link href="/pakketten">Pakketten</Link>
            <Link href="/sociaal-tarief">Sociaal tarief</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <h1 className="text-4xl font-bold text-green-700 mb-2">Welkom bij DAMM Care 💚</h1>
          <p className="text-xl text-gray-600">Menselijke aandacht, elke dag opnieuw.</p>
        </div>
      </header>
    </div>
  );
}
