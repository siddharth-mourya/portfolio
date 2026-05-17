import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-400">404</p>
      <h1 className="mt-6 text-5xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-300">The page you are looking for does not exist or has been moved. Return home to continue exploring the portfolio.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
        Go back home
      </Link>
    </main>
  );
}
