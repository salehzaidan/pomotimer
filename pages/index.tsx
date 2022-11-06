export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div>
      <main>
        <h1>PomoTimer</h1>
        <div>
          <div>
            <button>Pomodoro</button>
            <button>Break</button>
          </div>
          <div>25:00</div>
          <button>Play/Pause</button>
        </div>
      </main>
      <footer>&copy; {year} Saleh Zaidan. All rights reserved.</footer>
    </div>
  );
}
