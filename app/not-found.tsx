import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center" style={{ backgroundColor: '#fef3ea' }}>
      <h1 className="text-8xl md:text-9xl font-moonbase tracking-wider text-[#8B1A1A]">404</h1>
      <p className="text-lg md:text-xl text-[#8B1A1A]/70 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#8B1A1A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6e1515]"
      >
        Back to Home
      </Link>
    </main>
  );
}
