import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">404</p>
      <h1 className="mt-6 text-5xl font-semibold text-slate-950">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-600">The page you are looking for does not exist or has been moved. Return home to continue exploring the portfolio.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-500">
        Go back home
      </Link>
    </main>
  );
}
