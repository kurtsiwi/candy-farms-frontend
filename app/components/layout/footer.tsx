export default function Footer() {
  return (
    <footer className="w-full bg-white/50 backdrop-blur-sm border-t border-zinc-200 dark:bg-black/50 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Candy Farms. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
