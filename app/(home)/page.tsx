import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 gap-4 px-6">
      <h1 className="text-3xl font-bold">NautLoop Documentation</h1>
      <p className="text-fd-muted-foreground max-w-md">
        The autonomous team-in-a-box — swarms of isolated agents, powered by
        your subscription. Early access.
      </p>
      <div className="flex gap-3 mt-2">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground"
        >
          Read the docs
        </Link>
        <a href="https://nautloop.com" className="rounded-lg border px-5 py-2.5 font-medium">
          nautloop.com
        </a>
      </div>
    </div>
  );
}
