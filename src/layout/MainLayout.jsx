import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}