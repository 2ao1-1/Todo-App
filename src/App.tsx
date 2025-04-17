import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="text-3xl bg-green-500">
      <Outlet />
    </div>
  );
}
