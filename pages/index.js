import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      <aside className="w-1/4 min-h-screen bg-white p-6 border-r border-gray-200">
        <nav className="flex flex-col gap-4 text-green-700 font-semibold text-base">
          <Link href="/">Home</Link>
          <Link href="/over-mij">Over mij</Link>
          <Link href="/pakketten">Pakketten</Link>
          <Link href="/sociaal-tarief">Sociaal tarief</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Welkom bij DAMM Care 💚</h1>
        <p className="text-xl text-gray-600">Menselijke aandacht, elke dag opnieuw.</p>
      </main>
    </div>
  );
}
