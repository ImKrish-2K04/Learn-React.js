import { Footer } from "@/Components/UI/Footer/footer";
import { Header } from "@/Components/UI/Header/header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
