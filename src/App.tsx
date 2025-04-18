import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-main text-primary p-4">
      <Outlet />
    </main>
  );
}
