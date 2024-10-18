import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <Dashboard />
      </main>
    </>
  );
}
