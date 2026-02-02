import SignIn from '../components/sign-in.tsx';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="mb-8 text-2xl font-semibold text-black dark:text-zinc-50">
        securing-microservices-authjs-example
      </h1>
      <SignIn />
      <a
        href="https://github.com/markcallen/securing-microservices-authjs-example"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
      >
        github.com/markcallen/securing-microservices-authjs-example
      </a>
    </div>
  );
}
