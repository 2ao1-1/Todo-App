import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <main>
        <h1>Dashboard</h1>
      </main>

      <Outlet />
    </>
  );
}
