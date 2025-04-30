import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/Components/Layouts/appLayout";
import { HomePage } from "@/Pages/Home/home";
import { CountryPage } from "@/Pages/Country/country";
import { ContactPage } from "@/Pages/Contact/contact";
import { ErrorPage } from "@/Pages/ErrorPage/errorPage";
import { AboutPage } from "@/Pages/About/about";
import { CountryDetails } from "@/Pages/Country/countryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "country",
        element: <CountryPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
