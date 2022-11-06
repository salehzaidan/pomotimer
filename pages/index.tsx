import Button from "../components/Button";
import PlayPauseButton from "../components/PlayPauseButton";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-rose-700 text-white">
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-medium sm:text-5xl">PomoTimer</h1>
        <div className="mt-24 space-x-2">
          <Button disabled>Pomodoro</Button>
          <Button>Break</Button>
        </div>
        <div className="mt-8 text-7xl sm:text-8xl">25:00</div>
        <PlayPauseButton className="mt-12" />
      </main>
      <footer className="flex justify-center p-4 text-sm">
        &copy; {year} Saleh Zaidan. All rights reserved.
      </footer>
    </div>
  );
}
