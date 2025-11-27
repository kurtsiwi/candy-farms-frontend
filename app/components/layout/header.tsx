export default function Header() {
  return (
    <header className="w-full bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-200 dark:bg-black/50 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Candy Farms
        </h1>
      </div>
    </header>
  );
}
