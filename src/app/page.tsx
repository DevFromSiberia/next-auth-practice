import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="px-10 py-10 flex w-1/4 min-h-70 bg-lime-300 flex-col justify-between rounded-2xl">
        <h1 className="w-fit mx-auto text-2xl">Main Page</h1>
        <Link
          className="mx-auto mt-10 py-4 px-10 bg-slate-800 text-sky-50 rounded-2xl uppercase"
          href="/api/auth/login"
        >
          auth
        </Link>
      </div>
    </main>
  );
}
