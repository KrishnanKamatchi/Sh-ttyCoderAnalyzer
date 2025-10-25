import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold">Sh*ttyCoderAnalyzer</h1>
          <p className="text-sm text-slate-300">
            Answer honestly. Results may burn bridges.
          </p>
        </header>
        <main>
          <Quiz />
        </main>
      </div>
    </div>
  );
}

export default App;
