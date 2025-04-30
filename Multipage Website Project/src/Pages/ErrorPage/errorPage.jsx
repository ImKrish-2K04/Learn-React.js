import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  // eslint-disable-next-line no-unused-vars
  const error = useRouteError();
  return <h1>this is an error page.</h1>;
};
